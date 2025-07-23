import { featureFlagsService } from './feature-flags';
import { FeatureFlag } from '@/types/feature-flags';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface DashboardStats {
  totalFlags: number;
  activeFlags: number;
  activePercentage: number;
  recentFlags: number;
  thisMonthFlags: number;
  flagsByEnvironment: {
    development: number;
    staging: number;
    production: number;
  };
}

export class DashboardService {
  async getStats(): Promise<DashboardStats> {
    await delay(400);

    const flags = await featureFlagsService.getAll();

    const totalFlags = flags.length;
    const activeFlags = flags.filter((f: FeatureFlag) => f.enabled).length;
    const activePercentage = totalFlags > 0 ? Math.round((activeFlags / totalFlags) * 100) : 0;

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentFlags = flags.filter((f: FeatureFlag) => f.createdAt >= sevenDaysAgo).length;

    const thisMonth = new Date();
    thisMonth.setDate(1);
    const thisMonthFlags = flags.filter((f: FeatureFlag) => f.createdAt >= thisMonth).length;

    const flagsByEnvironment = {
      development: flags.filter((f: FeatureFlag) => f.environment === 'development').length,
      staging: flags.filter((f: FeatureFlag) => f.environment === 'staging').length,
      production: flags.filter((f: FeatureFlag) => f.environment === 'production').length,
    };

    return {
      totalFlags,
      activeFlags,
      activePercentage,
      recentFlags,
      thisMonthFlags,
      flagsByEnvironment,
    };
  }
}

export const dashboardService = new DashboardService();
