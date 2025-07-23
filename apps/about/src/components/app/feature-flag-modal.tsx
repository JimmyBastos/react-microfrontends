import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@flagster/ui';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { CreateFeatureFlagData } from '../../services/feature-flags';

interface FeatureFlagModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (flag: CreateFeatureFlagData) => void;
}

export function FeatureFlagModal({
  isOpen,
  onClose,
  onAdd,
}: FeatureFlagModalProps) {
  const [formData, setFormData] = useState<CreateFeatureFlagData>({
    description: '',
    key: '',
    environment: 'development',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.key.trim()) {
      onAdd(formData);
      setFormData({
        description: '',
        key: '',
        environment: 'development',
      });
      onClose();
    }
  };

  const handleClose = () => {
    setFormData({
      description: '',
      key: '',
      environment: 'development',
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Add feature flag
          </DialogTitle>
          <DialogDescription>
            Create a new feature flag to control application features.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="flag-key" className="text-sm font-medium">
                Flag Key
              </Label>
              <Input
                id="flag-key"
                placeholder="e.g., new-feature, beta-ui"
                value={formData.key}
                onChange={(e) =>
                  setFormData({ ...formData, key: e.target.value })
                }
                className="font-mono"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="flag-description" className="text-sm font-medium">
                Description
              </Label>
              <Input
                id="flag-description"
                placeholder="Describe what this feature flag controls..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="flag-environment" className="text-sm font-medium">
                Environment
              </Label>
              <Select
                value={formData.environment}
                onValueChange={(
                  value: 'development' | 'staging' | 'production',
                ) => setFormData({ ...formData, environment: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="staging">Staging</SelectItem>
                  <SelectItem value="production">Production</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter className="gap-3 pt-4">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={!formData.key.trim()}>
              <Plus className="w-4 h-4 mr-2" />
              Add Flag
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
