# Flagster

A modern feature flag management system built with React 19, TypeScript, and micro-frontend architecture.

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Rspack](https://img.shields.io/badge/Rspack-1.4-orange?logo=webpack)](https://rspack.dev/)

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
git clone git@github.com:JimmyBastos/react-microfrontends.git
cd react-microfrontends
pnpm install
pnpm dev
```

### Development URLs

- **Shell**: http://localhost:8181
- **Dashboard**: http://localhost:8282
- **About**: http://localhost:8383

## Architecture

Flagster uses a micro-frontend architecture with Module Federation for independent development and deployment.

### Project Structure

```
react-microfrontends/
├── apps/
│   ├── shell/          # Main container application
│   ├── dashboard/      # Feature flag management
│   └── about/          # Project information
├── packages/
│   └── ui/             # Shared UI component library
```

### Module Federation

- **Shell**: Container app that orchestrates micro-frontends
- **Dashboard**: Feature flag CRUD operations
- **About**: Project showcase
- **UI Package**: Shared component library

## Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Rspack** - Fast bundler with Module Federation
- **TanStack Query** - Data fetching and caching
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Modern component primitives

## Scripts

```bash
# Development
pnpm dev              # Start all apps
pnpm shell:dev        # Start shell only
pnpm dashboard:dev    # Start dashboard only
pnpm about:dev        # Start about only

# Build
pnpm build            # Build all apps
pnpm shell:build      # Build shell
pnpm dashboard:build  # Build dashboard
pnpm about:build      # Build about
pnpm ui:build         # Build UI library

# Code Quality
pnpm lint             # Lint all packages
pnpm lint:fix         # Fix linting issues
pnpm format           # Format code
```

## Features

- Feature flag CRUD operations
- Real-time search and filtering
- Dark/light theme switching
- Responsive design
- Module Federation
- TypeScript support
- Hot module replacement

## Deployment

Flagster is designed to work with [Zephyr Cloud](https://zephyr-cloud.io/) for micro-frontend deployment:

- Independent deployment of apps
- Native Module Federation support
- Zero-downtime updates
- Global CDN distribution

## License

MIT License - see LICENSE file for details

---

Made with ❤️ by [JimmyBastos](https://www.linkedin.com/in/jimmybastos)
