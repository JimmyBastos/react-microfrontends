# Flagster

A modern feature flag management system built with React 19, TypeScript, and micro-frontend architecture.

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Rspack](https://img.shields.io/badge/Rspack-1.4-orange?logo=webpack)](https://rspack.dev/)
[![Module Federation](https://img.shields.io/badge/Module%20Federation-Enabled-green)](https://webpack.js.org/concepts/module-federation/)

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

# Start all applications
pnpm dev
```

### Development URLs

- **Shell**: http://localhost:8181
- **Dashboard**: http://localhost:8282
- **About**: http://localhost:8383

## 🏗️ Architecture

Flagster uses a micro-frontend architecture with Module Federation, enabling independent development and deployment.

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

### Module Federation

- **Shell**: Container app that orchestrates micro-frontends
- **Dashboard**: Feature flag CRUD operations
- **About**: Project showcase
- **UI Package**: Shared component library

## 🛠️ Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Rspack** - Fast bundler with Module Federation
- **TanStack Query** - Data fetching and caching
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Modern component primitives
- **Radix UI** - Accessible component foundations

## 📦 Scripts

### Development
```bash
pnpm dev              # Start all apps
pnpm shell:dev        # Start shell only
pnpm dashboard:dev    # Start dashboard only
pnpm about:dev        # Start about only
```

### Build
```bash
pnpm build            # Build all apps
pnpm shell:build      # Build shell
pnpm dashboard:build  # Build dashboard
pnpm about:build      # Build about
pnpm ui:build         # Build UI library
```

### Code Quality
```bash
pnpm lint             # Lint all packages
pnpm lint:fix         # Fix linting issues
pnpm format           # Format code
```

## 🎯 Features

- ✅ Feature flag CRUD operations
- ✅ Real-time search and filtering
- ✅ Dark/light theme switching
- ✅ Responsive design
- ✅ Module Federation
- ✅ TypeScript support
- ✅ Hot module replacement

## 🚀 Deployment

Flagster is designed to work with [Zephyr Cloud](https://zephyr-cloud.io/) for micro-frontend deployment:

- **Independent Deployment**: Deploy apps separately
- **Module Federation Support**: Native Module Federation support
- **Zero-Downtime Updates**: Update individual micro-frontends
- **Global Distribution**: CDN distribution

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
