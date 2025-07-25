# @flagster/ui

Shared UI component library for the Flagster microfrontend architecture. Built with shadcn/ui, Radix UI, and Tailwind CSS.

## Quick Start

Install dependencies:

```bash
pnpm install
```

Build the library:

```bash
pnpm build
```

Watch mode for development:

```bash
pnpm dev
```

## Usage

Import components in your microfrontend:

```tsx
import { Button, Card, Badge } from '@flagster/ui';

function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
      <Badge>New</Badge>
    </Card>
  );
}
```

## Available Components

- **Layout**: Container, Card
- **Forms**: Button, Input, Label, Select, Switch, Textarea
- **Navigation**: NavigationMenu, DropdownMenu
- **Feedback**: AlertDialog, Dialog, Sonner (toast)
- **Display**: Badge, Skeleton, Typography
- **Data**: Table, Tabs

## Architecture

- **shadcn/ui**: Component primitives
- **Radix UI**: Accessible component foundations
- **Tailwind CSS**: Utility-first styling
- **TypeScript**: Full type safety
- **ESM**: Modern module system

## Development

- `pnpm dev` - Watch mode for development
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
