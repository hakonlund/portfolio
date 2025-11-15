# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Norwegian-language portfolio website for Håkon Teigen Lund, showcasing choir arrangements. Built with React and TypeScript, it's a Create React App project focused on displaying a catalog of musical arrangements with search/filter functionality.

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (opens at http://localhost:3000)
npm start

# Build for production
npm build

# Run tests
npm test
```

## Architecture

### Routing Structure
- Uses `react-router-dom` for client-side routing
- Two main routes defined in `src/App.tsx`:
  - `/` - Home page with introduction
  - `/arrangementer` - Arrangements catalog page

### Key Components
- **App.tsx**: Root component with navigation bar (responsive with burger menu for mobile), handles menu state and click-outside detection
- **Home.tsx**: Landing page with bio and contact information
- **Arrangements.tsx**: Displays filterable grid of arrangement cards, implements real-time search across title, artist, and besetning (choir type)
- **ArrangementCard.tsx**: Card component for individual arrangements with optional YouTube link

### Data Structure
- **arrangements.ts**: Central data file containing array of arrangement objects
- Each arrangement has: `tittel`, `artist`, `originalTekst`, `dato`, `tilKor`, `besetning` (e.g., SATB, TTBB, SSAA), `fremførelse` (YouTube link)

### Styling
- CSS Custom Properties defined in `src/styles/App.css`
- Color scheme: Teal/turquoise theme (`--main-color: #1D7A83`, `--navbar-bg: #B9E3E4`)
- Typography: Inter (body), Lora (headings) - loaded via @fontsource packages
- Responsive design with mobile breakpoint at 768px
- Grid layout for arrangements using `repeat(auto-fit, minmax(250px, 1fr))`

## Language
All user-facing text is in Norwegian (Bokmål). Variable names and comments are also primarily in Norwegian.

## TypeScript Configuration
- Target: ES5
- Strict mode enabled
- JSX: react-jsx transform
