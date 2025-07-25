# Flagster Dashboard

The dashboard microfrontend for feature flag management. This app provides CRUD operations for feature flags with real-time search, filtering, and optimistic UI updates.

## Quick Start

Install dependencies:

```bash
pnpm install
```

Start development server:

```bash
pnpm dev
```

The app will be available at [http://localhost:8282](http://localhost:8282).

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues

## Features

- **Feature Flag Management**: Create, read, update, delete feature flags
- **Real-time Search**: Instant search and filtering
- **Optimistic Updates**: Immediate UI feedback
- **Skeleton Loading**: Smooth loading states
- **Toast Notifications**: User feedback for actions
- **Responsive Design**: Works on all screen sizes

## Architecture

- **Module Federation**: Exposes Dashboard component to Shell
- **Class-based Services**: API logic separation
- **TanStack Query**: Data fetching and caching
- **Component Architecture**: Modular, reusable components

## Dependencies

- React 19
- TanStack Query
- @flagster/ui (shared UI components)
