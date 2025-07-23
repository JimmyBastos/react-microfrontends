import {
  Card,
  CardContent,
  TypographyH3,
  TypographyMuted,
  Button,
} from '@flagster/ui';

import { type LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  actionLabel?: string;
  onAction?: () => void;
  showAction?: boolean;
}

export function EmptyState({
  title,
  description,
  icon: Icon,
  actionLabel,
  onAction,
  showAction = true,
}: EmptyStateProps) {
  return (
    <Card>
      <CardContent className="p-10">
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
          {Icon && (
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-muted flex items-center justify-center">
              <Icon className="w-6 h-6 text-muted-foreground" />
            </div>
          )}

          <TypographyH3 className="mb-4">{title}</TypographyH3>

          {description && (
            <TypographyMuted className="mb-6 max-w-md">
              {description}
            </TypographyMuted>
          )}

          {showAction && actionLabel && onAction && (
            <div className="flex gap-3">
              <Button onClick={onAction} className="mt-4">
                {actionLabel}
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
