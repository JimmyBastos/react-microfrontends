import {
  Badge,
  Button,
  Container,
  Input,
  TypographyH1,
  TypographyMuted,
} from '@flagster/ui';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  Activity,
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Clock,
  Flag,
  Plus,
  Search,
  TrendingUp,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { toast } from 'sonner';
import { DashboardSkeleton } from '../components/app/dashboard-skeleton';
import { DeleteConfirmationDialog } from '../components/app/delete-confirmation-dialog';
import { EmptyState } from '../components/app/empty-state';
import { FeatureFlagCard } from '../components/app/feature-flag-card';
import { FeatureFlagModal } from '../components/app/feature-flag-modal';
import {
  InitializationAwareContainer,
  useInitializationStage,
} from '../components/app/initialization-aware-container';
import { MetricCard } from '../components/app/metric-card';
import { dashboardService } from '../services/dashboard';
import {
  CreateFeatureFlagData,
  featureFlagsService,
} from '../services/feature-flags';
import { FeatureFlag } from '../types/feature-flags';

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState<{
    isOpen: boolean;
    flagId: string | null;
  }>({
    isOpen: false,
    flagId: null,
  });

  const queryClient = useQueryClient();

  const {
    data: flags = [],
    isLoading: flagsLoading,
    error: flagsError,
  } = useQuery({
    queryKey: ['feature-flags'],
    queryFn: () => featureFlagsService.getAll(),
  });

  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: () => dashboardService.getStats(),
  });

  const createFeatureFlag = useMutation({
    mutationFn: (data: CreateFeatureFlagData) =>
      featureFlagsService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feature-flags'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard-stats'] });
      toast.success('Feature flag created successfully');
      setIsModalOpen(false);
    },
    onError: () => {
      toast.error('Failed to create feature flag');
    },
  });

  const deleteFeatureFlag = useMutation({
    mutationFn: (id: string) => featureFlagsService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feature-flags'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard-stats'] });
      toast.success('Feature flag deleted successfully');
      setDeleteDialog({ isOpen: false, flagId: null });
    },
    onError: () => {
      toast.error('Failed to delete feature flag');
    },
  });

  const toggleFeatureFlag = useMutation({
    mutationFn: (id: string) => featureFlagsService.toggle(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feature-flags'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard-stats'] });
      toast.success('Feature flag toggled successfully');
    },
    onError: () => {
      toast.error('Failed to toggle feature flag');
    },
  });

  const filteredFlags = useMemo(
    () =>
      flags.filter(
        (flag: FeatureFlag) =>
          flag.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
          flag.description.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [flags, searchTerm],
  );

  const enabledFlags = useMemo(
    () => flags.filter((flag: FeatureFlag) => flag.enabled),
    [flags],
  );
  const disabledFlags = useMemo(
    () => flags.filter((flag: FeatureFlag) => !flag.enabled),
    [flags],
  );

  const handleDeleteClick = (flagId: string) => {
    setDeleteDialog({ isOpen: true, flagId });
  };

  const flagToDelete = flags.find((flag) => flag.id === deleteDialog.flagId);

  const initializationStage = useInitializationStage(
    flags,
    flagsError,
    flagsLoading || statsLoading,
  );

  return (
    <Container className="flex-1 space-y-4 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <TypographyH1>Dashboard</TypographyH1>
          <TypographyMuted>
            Manage your feature flags and monitor their status
          </TypographyMuted>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Flag
        </Button>
      </div>

      <InitializationAwareContainer
        stage={initializationStage}
        loading={<DashboardSkeleton />}
        finished={
          <>
            <div className="grid gap-6 md:grid-cols-3">
              <MetricCard
                title="Total Flags"
                value={stats?.totalFlags ?? 0}
                icon={Flag}
                color="blue"
                trend={{
                  value: `+${stats?.thisMonthFlags ?? 0} this month`,
                  icon: TrendingUp,
                }}
              />

              <MetricCard
                title="Active Flags"
                value={stats?.activeFlags ?? 0}
                icon={CheckCircle}
                color="green"
                trend={{
                  value: `${stats?.activePercentage ?? 0}% of total`,
                  icon: BarChart3,
                }}
              />

              <MetricCard
                title="Recent Activity"
                value={stats?.recentFlags ?? 0}
                icon={Activity}
                color="purple"
                trend={{
                  value: 'New in last 7 days',
                  icon: Clock,
                }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by key or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="cursor-pointer">
                  All ({flags.length})
                </Badge>
                <Badge variant="outline" className="cursor-pointer">
                  Active ({enabledFlags.length})
                </Badge>
                <Badge variant="outline" className="cursor-pointer">
                  Inactive ({disabledFlags.length})
                </Badge>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {filteredFlags.map((flag) => (
                <FeatureFlagCard
                  key={flag.id}
                  flag={flag}
                  onToggle={(id) => toggleFeatureFlag.mutate(id)}
                  onDelete={handleDeleteClick}
                />
              ))}
            </div>

            {filteredFlags.length === 0 && (
              <EmptyState
                title={searchTerm ? 'No flags found' : 'No feature flags yet'}
                icon={Flag}
                actionLabel="Create Flag"
                onAction={() => setIsModalOpen(true)}
                showAction={!searchTerm}
                description={
                  searchTerm
                    ? 'Try adjusting your search terms'
                    : 'Create your first feature flag to get started'
                }
              />
            )}
          </>
        }
        failed={
          <EmptyState
            title="Error"
            icon={AlertTriangle}
            actionLabel="Retry"
            onAction={() => window.location.reload()}
            description="Failed to load feature flags. Please try again."
          />
        }
        empty={
          <EmptyState
            title="No feature flags yet"
            icon={Flag}
            actionLabel="Create Flag"
            onAction={() => setIsModalOpen(true)}
            description="Create your first feature flag to get started"
          />
        }
      />

      <FeatureFlagModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={(data) => createFeatureFlag.mutate(data)}
      />

      <DeleteConfirmationDialog
        isOpen={deleteDialog.isOpen}
        value={flagToDelete?.key || ''}
        title="Delete Feature Flag"
        description="This action cannot be undone. To confirm deletion, please type the feature flag key."
        onClose={() => setDeleteDialog({ isOpen: false, flagId: null })}
        onConfirm={() =>
          flagToDelete && deleteFeatureFlag.mutate(flagToDelete.id)
        }
      />
    </Container>
  );
}

export default Dashboard;
