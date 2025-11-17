# Design Guidelines: China Youth Unemployment & Migration Policy Website

## Design Approach

**System**: Material Design-inspired with data journalism influences (The Economist, Our World in Data)
**Rationale**: Information-dense educational content requiring clarity, strong data visualization support, and professional credibility. Focus on readability and data comprehension over visual flair.

## Typography System

**Font Stack**: 
- Primary: Inter (headers, navigation, UI elements)
- Secondary: IBM Plex Sans (body text, data labels)
- Monospace: IBM Plex Mono (statistics, numbers, data points)

**Hierarchy**:
- Hero/Page Titles: text-5xl font-bold (48px)
- Section Headers: text-3xl font-semibold (30px)
- Subsections: text-2xl font-medium (24px)
- Body Text: text-base leading-relaxed (16px, 1.75 line-height)
- Data Labels: text-sm font-medium uppercase tracking-wide (14px)
- Captions/Metadata: text-xs (12px)

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16, 20
- Component padding: p-6 or p-8
- Section spacing: py-16 or py-20
- Card gaps: gap-6
- Element margins: mb-4, mt-8

**Grid Structure**:
- Max container width: max-w-7xl
- Content areas: max-w-4xl for text-heavy sections
- Dashboard/data sections: max-w-6xl
- Sidebar layouts: 1/4 - 3/4 split (lg:grid-cols-4, span-3)

## Component Library

### Navigation
- Sticky top navigation with persistent visibility
- Horizontal menu with clearly separated sections (Home | Statistics | Policies | Timeline | About)
- Breadcrumb navigation for deep content pages
- Mobile: Hamburger menu with slide-out drawer

### Data Visualization Cards
- Elevated cards with subtle border (border rounded-lg)
- Card header: Title + metadata (date range, source)
- Chart container: Minimum height h-64 to h-96
- Data source citations at bottom in small text
- Use placeholder comments for charts: `<!-- CHART: Line graph showing unemployment trends 2023-2025 -->`

### Statistics Display
- Large number displays: text-6xl font-bold for key metrics
- Metric cards in grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Each card: Number + label + percentage change indicator
- Comparison data: Side-by-side layout with dividing borders

### Policy Cards
- Structured information hierarchy: Policy name → Date → Description → Impact
- Icon placement: Left-aligned with heroicons (document-text, users, briefcase)
- Expandable sections for detailed policy text
- Tag system for categorization (subsidy, reform, employment)

### Timeline Component
- Vertical timeline with milestone nodes
- Left: Date stamps (year-month format)
- Right: Event cards with title + description
- Connecting line with node indicators at each event
- Alternating alignment for visual interest on desktop

### Tables
- Striped rows for readability (odd:bg-gray-50 pattern)
- Sticky headers for long scrolling tables
- Sortable column headers with icons
- Responsive: Stack to cards on mobile
- Number columns: Right-aligned, monospace font

### Hero Section
**Image**: Full-width hero with gradient overlay
- Image description: Modern Chinese cityscape showing urban development with young professionals in business district, representing youth workforce and urbanization
- Overlay: Dark gradient from bottom (80% opacity to transparent)
- Content positioning: Centered, lower third of image
- Height: h-[500px] to h-[600px]

### Call-to-Action Elements
- Primary actions: Large rectangular buttons with generous padding (px-8 py-4)
- Secondary actions: Outlined style with hover state
- Buttons on images: Backdrop blur effect (backdrop-blur-md bg-white/20)

## Page-Specific Layouts

**Homepage**: 
- Hero with key statistic overlay
- Three-column quick stats grid
- Featured policy section
- Recent updates feed
- Footer with sources and methodology links

**Dashboard Page**:
- Filter controls at top (date range, demographics)
- 2-column chart layout for comparisons
- Full-width trend charts
- Data export functionality placement

**Policy Analysis**:
- Single column max-w-4xl for readable text
- Sidebar for navigation between policies
- Inline data callouts and statistics
- Related policies section at bottom

**Timeline Page**:
- Full vertical timeline
- Filter by category (policy, data, events)
- Jump-to-date navigation

## Accessibility
- High contrast for all data visualizations
- Alt text for all charts and graphs
- Keyboard navigation for all interactive elements
- Focus indicators with 2px outline
- ARIA labels for data tables and complex components

## Icons
**Library**: Heroicons via CDN
- Navigation: chart-bar, document-text, clock, information-circle
- Data: arrow-trending-up, arrow-trending-down, users, briefcase
- Actions: download, share, filter

## Animations
Minimal, purposeful only:
- Smooth scroll behavior for anchor links
- Fade-in for charts on viewport entry (intersection observer)
- Subtle hover lifts on cards (translate-y-1)
- No decorative animations