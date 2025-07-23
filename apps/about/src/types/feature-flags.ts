export interface FeatureFlag {
  id: string;
  description: string;
  key: string;
  enabled: boolean;
  environment: 'development' | 'staging' | 'production';
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

export interface FeatureFlagFormData {
  name: string;
  description: string;
  key: string;
  enabled: boolean;
  environment: 'development' | 'staging' | 'production';
  type: 'boolean' | 'percentage' | 'custom';
  percentage?: number;
  customValue?: string;
  tags: string[];
}

export interface FeatureFlagStats {
  total: number;
  enabled: number;
  disabled: number;
  byEnvironment: {
    development: number;
    staging: number;
    production: number;
  };
  byType: {
    boolean: number;
    percentage: number;
    custom: number;
  };
}
