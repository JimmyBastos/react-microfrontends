# Flagster

A modern feature flag management system built with React 19, TypeScript, and microfrontend architecture. Powered by Zephyr Cloud for seamless microfrontend deployment and orchestration.

![Flagster](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![Rspack](https://img.shields.io/badge/Rspack-1.4-orange?logo=webpack)
![Module Federation](https://img.shields.io/badge/Module%20Federation-Enabled-green)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd react-microfrontends

# Install dependencies
pnpm install

# Start all applications in development mode
pnpm dev
```

### Development URLs

- **Shell**: http://localhost:8181
- **Dashboard**: http://localhost:8282
- **About**: http://localhost:8383

## 🏗️ Architecture

Flagster is built using a microfrontend architecture with Module Federation, enabling independent development and deployment of each application.

### Project Structure

```
react-microfrontends/
├── apps/
│   ├── shell/          # Main container application
│   ├── dashboard/      # Feature flag management
│   └── about/          # Project information
├── packages/
│   └── ui/             # Shared UI component library
└── package.json
```

### Microfrontend Architecture

- **Shell**: Container application that orchestrates microfrontends
- **Dashboard**: Feature flag CRUD operations with real-time search
- **About**: Project showcase and technology information
- **UI Package**: Shared component library across all apps

### Module Federation

Each microfrontend exposes and consumes components:

- **Shell** exposes: `QueryClient`
- **Dashboard** exposes: `Dashboard` component
- **About** exposes: `About` component
- **UI Package** exposes: All UI components

## 🛠️ Technology Stack

### Core Technologies
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Rspack** - Fast bundler with Module Federation
- **TanStack Query** - Data fetching and caching
- **React Router** - Client-side routing

### UI & Styling
- **shadcn/ui** - Modern component primitives
- **Radix UI** - Accessible component foundations
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons
- **Sonner** - Toast notifications

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking

## 📦 Available Scripts

### Root Level
```bash
pnpm dev              # Start all apps in parallel
pnpm build            # Build all apps
pnpm lint             # Lint all packages
pnpm lint:fix         # Fix linting issues
pnpm format           # Format all code
```

### Individual Apps
```bash
# Shell
pnpm shell:dev        # Start shell development server
pnpm shell:build      # Build shell for production
pnpm shell:preview    # Preview shell build

# Dashboard
pnpm dashboard:dev    # Start dashboard development server
pnpm dashboard:build  # Build dashboard for production
pnpm dashboard:preview # Preview dashboard build

# About
pnpm about:dev        # Start about development server
pnpm about:build      # Build about for production
pnpm about:preview    # Preview about build

# UI Package
pnpm ui:build         # Build UI library
pnpm ui:dev           # Watch UI library
```

## 🎯 Features

### Feature Flag Management
- ✅ Create, read, update, delete feature flags
- ✅ Real-time search and filtering
- ✅ Type-to-confirm deletion
- ✅ Optimistic UI updates
- ✅ Skeleton loading states

### User Experience
- ✅ Dark/light theme switching
- ✅ Toast notifications
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Accessible components

### Development Experience
- ✅ Hot module replacement
- ✅ TypeScript support
- ✅ ESLint configuration
- ✅ Prettier formatting
- ✅ Module Federation

## 🚀 Deployment

### Zephyr Cloud Microfrontends

Flagster leverages [Zephyr Cloud](https://zephyr-cloud.io/) for seamless microfrontend deployment and orchestration. Zephyr Cloud is specifically designed for microfrontend architectures, providing:

- **Module Federation Native Support**: Built-in support for Module Federation patterns used in Flagster
- **Independent Microfrontend Deployment**: Deploy shell, dashboard, and about apps independently
- **Microfrontend Orchestration**: Automatic coordination between shell container and remote microfrontends
- **Zero-Downtime Updates**: Update individual microfrontends without affecting the entire application

This architecture allows Flagster's microfrontends (shell, dashboard, about) to be developed, deployed, and scaled independently while maintaining seamless integration through Module Federation.

### Deployment

Flagster is designed to work seamlessly with [Zephyr Cloud](https://zephyr-cloud.io/) for microfrontend deployment:

- **Microfrontend Orchestration**: Automated deployment of individual apps
- **Module Federation Support**: Native support for Module Federation
- **Independent Scaling**: Scale microfrontends independently
- **Global Distribution**: CDN distribution for optimal performance

### Build Process

```bash
# Build all applications
pnpm build

# Build individual applications
pnpm shell:build
pnpm dashboard:build
pnpm about:build
pnpm ui:build
```

## 🧪 Development

### Adding New Features

1. **UI Components**: Add to `packages/ui/src/components/`
2. **New Microfrontend**: Create in `apps/` directory
3. **Shared Logic**: Add to appropriate package or create new one

### Module Federation

To add a new microfrontend:

1. Create app in `apps/` directory
2. Configure Module Federation in `rspack.config.ts`
3. Update shell's remote configuration
4. Add navigation route

### Code Style

- Use TypeScript for all new code
- Follow ESLint rules
- Use Prettier for formatting
- Write meaningful commit messages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 👨‍💻 Author

Made with ❤️ by [JimmyBastos](https://www.linkedin.com/in/jimmybastos)

---

**Flagster** - Modern feature flag management for the future of web development.
