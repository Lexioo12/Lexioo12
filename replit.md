# Tanki Online Portfolio - Full Stack Web Application

## Overview

This is a portfolio website built for a Tanki Online player and digital artist named "Keep-Cry". The application showcases gaming achievements, artwork, tank setups, and contact information in a gaming-themed design that reflects the Tanki Online aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom Tanki Online themed colors
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Storage**: In-memory storage implementation with interface for database migration
- **Development**: Hot module replacement and error handling via Vite integration

### Key Components

#### Frontend Components
- **Portfolio Sections**: Hero, About, Artwork Gallery, Tank Setup, Contact
- **UI Elements**: Navigation, Particle Background, Lightbox for image viewing
- **Interactive Features**: Form handling, toast notifications, responsive design

#### Backend Services
- **Storage Interface**: Abstract storage layer supporting both in-memory and database implementations
- **API Routes**: RESTful endpoints with `/api` prefix
- **Middleware**: Request logging, JSON parsing, error handling

#### Database Schema
- **Users Table**: Basic user management with username/password fields
- **Validation**: Zod schemas for type-safe data validation
- **Migrations**: Drizzle migrations in dedicated migrations folder

## Data Flow

1. **Static Content**: Portfolio content is embedded in React components
2. **User Data**: Stored via IStorage interface (currently in-memory, database-ready)
3. **API Communication**: TanStack Query handles API calls with error handling
4. **State Management**: Component-level state for UI interactions

## External Dependencies

### Production Dependencies
- **Database**: Neon Database (PostgreSQL) via `@neondatabase/serverless`
- **UI Library**: Extensive Radix UI component collection
- **Utilities**: date-fns, clsx, class-variance-authority for styling
- **Development**: Custom Replit integration plugins

### Development Tools
- **Database Management**: Drizzle Kit for migrations and schema management
- **Build Process**: ESBuild for server bundling, Vite for client bundling
- **Type Safety**: TypeScript with strict configuration

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds React app to `dist/public`
2. **Server Build**: ESBuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: `NODE_ENV=development` with hot reloading
- **Production**: `NODE_ENV=production` with optimized builds
- **Database**: `DATABASE_URL` environment variable required

### Hosting Architecture
- **Static Files**: Served from `dist/public` in production
- **API Routes**: Express server handles `/api/*` routes
- **Database**: PostgreSQL hosted on Neon Database platform
- **Development**: Replit-specific plugins for enhanced development experience

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Theme System**: Custom Tanki Online color palette with dark mode support
- **Interactive Elements**: Particle effects, animated backgrounds, image lightbox
- **Form Handling**: Contact form with validation and toast feedback
- **SEO Ready**: Proper meta tags and semantic HTML structure

The application is structured for easy expansion, with clear separation between frontend portfolio content and backend user management capabilities. The modular storage interface allows for seamless transition from in-memory to database storage as needed.