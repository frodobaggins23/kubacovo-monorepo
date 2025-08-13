# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is an Nx monorepo designed to host multiple React applications, shared libraries, and a design system.

### Core Development Commands
```bash
# Start development server for any app
npx nx serve <app-name>
# or
npx nx dev <app-name>

# Build for production
npx nx build <app-name>

# Run tests with Vitest
npx nx test <app-name>

# Type checking
npx nx typecheck <app-name>

# Linting with ESLint
npx nx lint <app-name>

# Preview production build
npx nx preview <app-name>
```

### Project Structure Commands
```bash
# Show available targets for any project
npx nx show project <project-name>

# Generate new React application
npx nx g @nx/react:app <app-name>

# Generate new React library
npx nx g @nx/react:lib <lib-name>

# Generate new React component
npx nx g @nx/react:component <ComponentName> --project=<project-name>

# List all available generators
npx nx list

# Visualize project dependencies
npx nx graph
```

## Architecture Overview

### Monorepo Structure
- **Nx monorepo** with TypeScript configuration
- **Multiple React applications** in `apps/` directory
- **Shared libraries** for business logic and utilities
- **Design system library** with shared UI components
- **Workspace-level dependencies** managed in root `package.json`

### Technology Stack
- **React 19** with TypeScript
- **React Router DOM** for routing
- **Vite** for build tooling and dev server
- **Vitest** for testing with jsdom environment
- **TailwindCSS** for styling
- **ESLint** with TypeScript rules for linting

### Key Configuration Files
- `nx.json`: Nx workspace configuration with plugins for React, Vite, ESLint, and TypeScript
- `vite.config.ts`: Vite configuration with React plugin and test setup (per app)
- `tsconfig.base.json`: Base TypeScript configuration for the monorepo
- `vitest.workspace.ts`: Vitest workspace configuration

### Planned Architecture
- **Apps**: Multiple React applications consuming shared libraries
- **Libs**: Business logic, utilities, and data management libraries
- **Design System**: Shared UI component library for consistent styling across apps
- **Routing**: React Router setup in individual applications
- **Styling**: TailwindCSS configured consistently across all projects

### Development Notes
- Applications run on different ports (4200, 4201, etc.) in development mode
- Preview builds use ports 4300+
- Tests use Vitest with jsdom environment and coverage reporting
- All generators are configured to use TailwindCSS by default
- TypeScript is configured with strict mode and modern ES2022 target
- Libraries should be designed for reusability across multiple applications