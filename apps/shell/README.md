# Flagster Shell

The main shell application for the Flagster microfrontend architecture. This app serves as the container that orchestrates and loads other microfrontends (Dashboard and About).

## Quick Start

Install dependencies:

```bash
pnpm install
```

Start development server:

```bash
pnpm dev
```

The app will be available at [http://localhost:8181](http://localhost:8181).

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues

## Architecture

- **Module Federation**: Exposes QueryClient and imports Dashboard/About apps
- **React Router**: Handles navigation between microfrontends
- **Theme Provider**: Manages dark/light theme across the application
- **Navigation**: Main navigation component with theme toggle

## Dependencies

- React 19
- React Router DOM
- TanStack Query
- @flagster/ui (shared UI components)
