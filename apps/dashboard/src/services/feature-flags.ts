import { FeatureFlag } from '@/types/feature-flags';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface CreateFeatureFlagData {
  description: string;
  key: string;
  environment: 'development' | 'staging' | 'production';
}

export interface UpdateFeatureFlagData {
  description?: string;
  enabled?: boolean;
  environment?: 'development' | 'staging' | 'production';
}

export class FeatureFlagsService {
  private flags: FeatureFlag[] = [
    {
      id: '1',
      description:
        'Enable new user interface with improved design and performance',
      key: 'new-ui',
      enabled: true,
      environment: 'production',
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15'),
      createdBy: 'admin',
    },
    {
      id: '2',
      description: 'Show beta features to early adopters and testers',
      key: 'beta-features',
      enabled: false,
      environment: 'staging',
      createdAt: new Date('2024-01-10'),
      updatedAt: new Date('2024-01-10'),
      createdBy: 'admin',
    },
    {
      id: '3',
      description: 'Enable advanced analytics and reporting features',
      key: 'analytics-dashboard',
      enabled: true,
      environment: 'production',
      createdAt: new Date('2024-01-08'),
      updatedAt: new Date('2024-01-08'),
      createdBy: 'admin',
    },
    {
      id: '4',
      description: 'Optimize interface for mobile devices and tablets',
      key: 'mobile-optimization',
      enabled: false,
      environment: 'development',
      createdAt: new Date('2024-01-05'),
      updatedAt: new Date('2024-01-05'),
      createdBy: 'admin',
    },
  ];

  async getAll(): Promise<FeatureFlag[]> {
    await delay(500);
    // Order by id descending (numerically)
    return [...this.flags].sort((a, b) => Number(b.id) - Number(a.id));
  }

  async getById(id: string): Promise<FeatureFlag | null> {
    await delay(300);
    const flag = this.flags.find((f) => f.id === id);
    return flag ? { ...flag } : null;
  }

  async create(data: CreateFeatureFlagData): Promise<FeatureFlag> {
    await delay(800);
    const newFlag: FeatureFlag = {
      id: Date.now().toString(),
      ...data,
      enabled: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: 'current-user',
    };
    this.flags.push(newFlag);
    return { ...newFlag };
  }

  async update(id: string, data: UpdateFeatureFlagData): Promise<FeatureFlag> {
    await delay(600);
    const index = this.flags.findIndex((f) => f.id === id);
    if (index === -1) {
      throw new Error('Feature flag not found');
    }

    this.flags[index] = {
      ...this.flags[index],
      ...data,
      updatedAt: new Date(),
    };

    return { ...this.flags[index] };
  }

  async delete(id: string): Promise<void> {
    await delay(400);
    const index = this.flags.findIndex((f) => f.id === id);
    if (index === -1) {
      throw new Error('Feature flag not found');
    }
    this.flags.splice(index, 1);
  }

  async toggle(id: string): Promise<FeatureFlag> {
    await delay(300);
    const index = this.flags.findIndex((f) => f.id === id);
    if (index === -1) {
      throw new Error('Feature flag not found');
    }

    this.flags[index] = {
      ...this.flags[index],
      enabled: !this.flags[index].enabled,
      updatedAt: new Date(),
    };

    return { ...this.flags[index] };
  }
}

// Export singleton instance
export const featureFlagsService = new FeatureFlagsService();
