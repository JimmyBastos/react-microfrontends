import { Calendar, Trash2, ExternalLink } from 'lucide-react';
import { FeatureFlag } from '../../types/feature-flags';
import {
  Card,
  CardHeader,
  TypographyH2,
  TypographyMuted,
  CardContent,
  Switch,
  TypographySmall,
  Button,
  Badge,
  cn,
} from '@flagster/ui';

interface FeatureFlagCardProps {
  flag: FeatureFlag;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function FeatureFlagCard({
  flag,
  onToggle,
  onDelete,
}: FeatureFlagCardProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Card className={cn('group')}>
      <CardHeader className="pb-0">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <div className="flex-1 min-w-0">
              <TypographyH2 className="text-lg font-semibold truncate font-mono">
                {flag.key}
              </TypographyH2>
              <TypographyMuted className="text-sm leading-relaxed">
                {flag.description}
              </TypographyMuted>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 ml-2">
            <Badge variant="outline" className="text-xs">
              {flag.environment}
            </Badge>
            <Badge
              variant={flag.enabled ? 'default' : 'secondary'}
              className={cn(
                flag.enabled &&
                  'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
              )}
            >
              {flag.enabled ? 'Active' : 'Inactive'}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Created {formatDate(flag.createdAt)}
          </div>
          <div className="flex items-center gap-1">
            <ExternalLink className="h-3 w-3" />
            <span>ID: {flag.id}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t">
          <div className="flex items-center gap-3">
            <Switch
              checked={flag.enabled}
              onCheckedChange={() => onToggle(flag.id)}
              className="data-[state=checked]:bg-green-600"
            />
            <TypographySmall className="font-medium">
              {flag.enabled ? 'Enabled' : 'Disabled'}
            </TypographySmall>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="secondary"
              size="sm"
              className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => onDelete(flag.id)}
              title="Delete flag"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
