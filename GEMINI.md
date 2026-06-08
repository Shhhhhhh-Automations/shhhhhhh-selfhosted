# Project: shhhhhhh-selfhosted

A self-hosted automation platform featuring a fluid, neon-lit workflow canvas. Designed for developers and automation enthusiasts who value "loud" (powerful) automation with "quiet" (unobtrusive, efficient) operations.

## [i] Core Technologies
- **Frontend**: Svelte 5, SvelteKit, Vite, Tailwind CSS (using OKLCH colors).
- **Backend**: Hono (running on Bun), Drizzle ORM, SQLite (via `better-sqlite3`).
- **Tooling**: Biome (formatting and linting), Bun.
- **Design**: Bricolage Grotesque typography, high-contrast neon-on-dark aesthetics.

## [i] Architecture
- `frontend/`: SvelteKit application (built as a static SPA for production).
- `backend/`: Hono-based API (serves static frontend from `./public`).
- `packages/cli/`: NPM/NPX distribution package.
- `Dockerfile`: Multi-stage build for production.

## [#] Key Commands

### Common
- **Full Build**: `npm run build` (Root)
- **Start Unified Server**: `npm start` (Root)
- **Lint/Format**: `npx @biomejs/biome check --write .` (Root)

### Backend
- **Development**: `bun dev` (in `backend/`)
- **Build**: `bun build` (in `backend/`)
- **Database**:
  - `bun db:generate`: Generate migrations.
  - `bun db:push`: Push schema changes directly to SQLite.
  - `bun db:migrate`: Apply migrations.

### Frontend
- **Development**: `npm run dev` or `vite dev` (in `frontend/`)
- **Build**: `npm run build` (in `frontend/`)
- **Type Check**: `npm run check` (in `frontend/`)

## [#] Distribution Methods

### Docker
- A single container houses the unified build.
- Data is persisted in a `/data` volume.
- Configurable via `PORT`, `SHHHHHHH_DATA_DIR`, and `DATABASE_URL`.

### NPM / NPX
- Published as `shhhhhhh-automation`.
- Executable via `npx shhhhhhh-automation`.
- Uses `~/.shhhhhhh` as default data directory on the host.

## [!] Development Conventions

### Code Style & Formatting
- **Formatter**: Biome is used for the entire project.
- **Indentation**: Tabs.
- **Quotes**: Single quotes for JavaScript/TypeScript.
- **Width**: 100 characters line width.

### Frontend Patterns
- **Styling**: Prefer Tailwind CSS with OKLCH color definitions as defined in `tailwind.config.js`.
- **State**: Leverage Svelte 5 runes (`$state`, `$derived`, etc.) for reactive logic.
- **Typography**: Use `font-sans` or `font-display` (Bricolage Grotesque).

### Backend Patterns
- **API**: Use Hono's `app.route()` to modularize functionality into the `src/routes/` directory.
- **Database**: Use Drizzle ORM for all database interactions. Schema is centralized in `backend/src/db/schema.ts`.
- **Runtime**: Bun is the primary runtime for the backend.

### Design Principles
- **Quiet Power**: Unobtrusive UI that performs complex tasks.
- **Organic-Tech Aesthetic**:
  - **Atmosphere**: Not "cyberpunk neon," but a refined, moody, and atmospheric look.
  - **Canvas**: Depth created via Aurora Mesh Gradients and a photographic grain texture.
  - **Texture**: Monochrome noise filter at low opacity (~3-4%) using `mix-blend-overlay`.
  - **Nodes**: Translucent backgrounds with `backdrop-blur-md`, geometric and sharp.
  - **Fluidity**: Smooth transitions on the workflow canvas.
