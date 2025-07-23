import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  cn,
  TypographySmall,
} from '@flagster/ui';
import { LucideIcon } from 'lucide-react';

type MetricColor = 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'gray';

interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  color?: MetricColor;
  trend?: {
    value: string | number;
    icon: LucideIcon;
  };
  className?: string;
}

const colorVariants = {
  blue: {
    icon: 'text-blue-600 dark:text-blue-400',
    value: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-100 dark:bg-blue-900/20',
  },
  green: {
    icon: 'text-green-600 dark:text-green-400',
    value: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-100 dark:bg-green-900/20',
  },
  purple: {
    icon: 'text-purple-600 dark:text-purple-400',
    value: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-100 dark:bg-purple-900/20',
  },
  orange: {
    icon: 'text-orange-600 dark:text-orange-400',
    value: 'text-orange-600 dark:text-orange-400',
    bg: 'bg-orange-100 dark:bg-orange-900/20',
  },
  red: {
    icon: 'text-red-600 dark:text-red-400',
    value: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-100 dark:bg-red-900/20',
  },
  gray: {
    icon: 'text-gray-600 dark:text-gray-400',
    value: 'text-gray-600 dark:text-gray-400',
    bg: 'bg-gray-100 dark:bg-gray-900/20',
  },
};

export function MetricCard({
  title,
  value,
  description,
  icon: Icon,
  color = 'gray',
  trend,
  className,
}: MetricCardProps) {
  const colors = colorVariants[color];

  return (
    <Card className={cn('', className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={cn('p-2 rounded-lg', colors.bg)}>
          <Icon className={cn('h-4 w-4', colors.icon)} />
        </div>
      </CardHeader>

      <CardContent>
        <div className={cn('text-3xl font-bold', colors.value)}>{value}</div>

        {trend && (
          <div className="flex items-center gap-1 mt-1">
            <trend.icon className="h-3 w-3 text-muted-foreground" />
            <TypographySmall className="text-xs text-muted-foreground">
              {trend.value}
            </TypographySmall>
          </div>
        )}

        {description && !trend && (
          <TypographySmall className="text-xs text-muted-foreground">
            {description}
          </TypographySmall>
        )}
      </CardContent>
    </Card>
  );
}
