# China Youth Unemployment Analysis

## Overview
A static informational website analyzing China's youth unemployment crisis and migration policies. Features verified 2023-2024 data from official Chinese government sources, interactive data visualizations, and comprehensive policy analysis.

## Project Status
**Production-ready static website** - All data embedded in frontend, no backend API dependencies

## Architecture

### Frontend (Static)
- **Framework**: React + TypeScript with Vite
- **Routing**: Wouter for client-side routing
- **UI Components**: Shadcn/ui with Radix primitives
- **Styling**: Tailwind CSS with custom Material Design-inspired tokens
- **Charts**: Recharts for interactive data visualization
- **Typography**: 
  - Inter for headings
  - IBM Plex Sans for body text
  - IBM Plex Mono for statistics

### Data Structure
All data is embedded in frontend modules (static, no API calls):
- `client/src/data/statistics.ts` - Unemployment trends and demographic data
- `client/src/data/policies.ts` - Government policy initiatives
- `client/src/data/timeline.ts` - Historical events and milestones

### Pages
1. **Home** (`/`) - Hero section with cityscape image, key statistics, and recent policies
2. **Statistics** (`/statistics`) - Interactive charts showing unemployment trends and demographic breakdowns
3. **Policies** (`/policies`) - Detailed policy analysis with filtering by category
4. **Timeline** (`/timeline`) - Chronological view of major events with category filters
5. **About** (`/about`) - Methodology, data sources, and project information

## Design Guidelines
- Material Design principles with data journalism influences
- Design tokens configured in `client/src/index.css`
- Complete design guidelines in `design_guidelines.md`
- Responsive design for all screen sizes

## Data Accuracy
- All statistics verified through November 2024 only
- No future projections or 2025+ references
- Primary source: National Bureau of Statistics of China (NBS)
- Secondary sources: MOHRSS, State Council

## Key Statistics (Nov 2024)
- Youth unemployment (16-24): 16.1%
- Migrant workers: 299.73 million
- Peak unemployment (June 2023): 21.3%
- Methodology change: January 2024 (excludes current students)

## Recent Changes
- **November 17, 2024**: Converted from full-stack to static website architecture
  - Removed all backend API dependencies
  - Embedded all data directly in frontend modules
  - Added SEO metadata to all pages with unique titles and Open Graph tags
  - Removed React Query scaffolding (not needed for static data)
  
## Development
```bash
npm run dev  # Starts Vite dev server on port 5000
```

## SEO Implementation
Each page includes:
- Unique descriptive title tags
- Meta descriptions summarizing page content
- Open Graph tags for social media sharing
- All metadata managed by `client/src/components/SEO.tsx`

## Code Quality
- TypeScript with strict type checking
- All interactive elements have `data-testid` attributes
- Reusable components in `client/src/components/`
- Shared schema definitions in `shared/schema.ts`
- Proper NBS citations on all data points
