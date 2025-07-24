import { useMemo, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { featureFlagsService, CreateFeatureFlagData } from '../services/feature-flags';
import { FeatureFlag } from '../types/feature-flags';

export function useFeatureFlags() {
  const [searchTerm, setSearchTerm] = useState('');
  const queryClient = useQueryClient();

  const {
    data: flags = [],
    isLoading: flagsLoading,
    error: flagsError,
  } = useQuery({
    queryKey: ['feature-flags'],
    queryFn: () => featureFlagsService.getAll(),
    retry: (failureCount, error) => {
      if (error instanceof Error && error.message.includes('not found')) {
        return false;
      }
      return failureCount < 2;
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

  const createFeatureFlag = useMutation({
    mutationFn: (data: CreateFeatureFlagData) => featureFlagsService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feature-flags'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard-stats'] });
      toast.success('Feature flag created successfully');
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

  return {
    flags,
    filteredFlags,
    enabledFlags,
    disabledFlags,
    searchTerm,
    setSearchTerm,
    flagsLoading,
    flagsError,
    createFeatureFlag,
    deleteFeatureFlag,
    toggleFeatureFlag,
  };
}
