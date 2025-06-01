# V60 Recipe

A beautiful, modern website for V60 pour over coffee recipes inspired by the design aesthetic of filmtypes.com. This project showcases expert brewing techniques, detailed recipes, and comprehensive guides for coffee enthusiasts.

## Features

- 🎨 **Modern Design**: Clean, aesthetic design inspired by filmtypes.com
- ☕ **Expert Recipes**: Curated collection of V60 recipes from coffee experts
- 📱 **Responsive**: Fully responsive design that works on all devices
- 🔍 **Recipe Details**: Comprehensive brewing instructions, tips, and equipment lists
- 🏷️ **Categorization**: Recipes organized by difficulty level and brewing style
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 🔧 **Interactive Filtering**: Filter recipes by difficulty and featured status
- 📚 **Comprehensive Guides**: Complete brewing guides and equipment recommendations
- 🎯 **Smooth Navigation**: Seamless page transitions and user experience

## Pages & Features

### 🏠 **Homepage (`/`)**
- Hero section with gradient text and call-to-action buttons
- Featured recipes showcase
- Newsletter signup
- Quick stats and footer with links

### ☕ **All Recipes (`/recipes`)**
- Complete recipe collection with filtering
- Interactive filter buttons (All, Beginner, Intermediate, Advanced, Featured)
- Real-time recipe count and smooth animations
- Recipe cards with difficulty badges and quick stats

### 📖 **Individual Recipe Pages (`/recipes/[id]`)**
- Detailed step-by-step brewing instructions
- Equipment lists and pro tips
- Recipe specifications (ratio, time, temperature, etc.)
- Difficulty indicators and tags

### 📚 **Brewing Guides (`/guides`)**
- Quick start guide for beginners
- Comprehensive sections covering:
  - V60 Basics & Equipment
  - Grind size and water quality
  - Coffee ratios and pouring technique
  - Troubleshooting and maintenance
- Recipe recommendations for different skill levels

### ⚖️ **Equipment Guide (`/equipment`)**
- Budget-friendly starter kits ($50-80, $150-250, $400+)
- Detailed equipment breakdown with importance levels
- Price ranges and buying tips
- Care and maintenance instructions

### 👋 **About Page (`/about`)**
- Personal story behind the project
- Journey from barista coffee to V60 brewing
- Inspiration from living in Japan
- Mission to collect coffee knowledge in one place

## Recipes Included

- **James Hoffmann Ultimate V60** - The renowned coffee expert's ultimate technique
- **4:6 Method by Tetsu Kasuya** - World Brewers Cup winning method
- **Scott Rao V60 Method** - Precision-focused brewing technique
- **Beginner-Friendly V60** - Perfect for newcomers to pour over
- **Single Pour V60** - Simplified method for consistent results
- **Iced V60 Flash Brew** - Perfect for hot summer days

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom coffee-themed color palette
- **Typography**: Inter + Playfair Display fonts
- **Language**: TypeScript for type safety
- **Animations**: Custom CSS animations and transitions
- **State Management**: React hooks for filtering and interactions

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd v60recipe
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### 🚀 **Netlify Deployment**

This project is optimized for deployment on Netlify with static export. The configuration is already set up for you.

#### **Automatic Deployment (Recommended)**

1. **Push to GitHub**: Make sure your code is in a GitHub repository

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Netlify will automatically detect the build settings from `netlify.toml`

3. **Deploy**: Click "Deploy site" - Netlify will automatically:
   - Run `npm run build`
   - Publish the `out/` directory
   - Set up continuous deployment

#### **Manual Deployment**

1. **Build the project**:
```bash
npm run build
```

2. **Deploy the `out/` folder**:
   - Drag and drop the `out/` folder to Netlify's deploy area
   - Or use Netlify CLI: `netlify deploy --prod --dir=out`

#### **Configuration Details**

The project includes:
- **`netlify.toml`**: Build configuration and redirects
- **`next.config.js`**: Static export configuration
- **Custom 404 page**: `app/not-found.tsx`
- **Security headers**: CSP, XSS protection, etc.
- **Caching rules**: Optimized for static assets

#### **Environment Variables**

If you need environment variables:
1. Go to Site settings → Environment variables in Netlify
2. Add your variables (e.g., `NEXT_PUBLIC_API_URL`)
3. Redeploy the site

#### **Custom Domain**

To use a custom domain:
1. Go to Site settings → Domain management
2. Add your custom domain
3. Configure DNS settings as instructed
4. SSL certificate will be automatically provisioned

## Project Structure

```
v60recipe/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage component
│   ├── not-found.tsx      # Custom 404 page
│   ├── recipes/           # Recipe pages
│   │   ├── page.tsx       # All recipes with filtering
│   │   └── [id]/          # Individual recipe pages
│   ├── guides/            # Brewing guides page
│   │   └── page.tsx       # Comprehensive brewing guides
│   └── equipment/         # Equipment guide page
│       └── page.tsx       # Equipment recommendations
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header with mobile menu
│   └── RecipeCard.tsx     # Recipe display card with links
├── data/                  # Static data and types
│   └── recipes.ts         # Recipe data and TypeScript interfaces
├── public/                # Static assets
├── netlify.toml           # Netlify deployment configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration (static export)
└── package.json           # Dependencies and scripts
```

## Design Philosophy

The design takes inspiration from filmtypes.com with:

- **Clean Typography**: Using Playfair Display for headings and Inter for body text
- **Warm Color Palette**: Coffee and cream tones that evoke the warmth of brewing
- **Card-Based Layout**: Clean cards for recipe display with hover effects
- **Responsive Grid**: Flexible layouts that work across all screen sizes
- **Subtle Animations**: Smooth transitions and hover effects for better UX
- **Interactive Elements**: Filtering, navigation, and state management

## Color Palette

- **Coffee Tones**: From light cream (#fefcf9) to dark coffee (#614229)
- **Accent Colors**: Warm browns and creams for a cozy, coffee-shop feel
- **Interactive Elements**: Subtle hover states and focus indicators
- **Status Colors**: Green for beginner, yellow for intermediate, red for advanced

## Key Features in Detail

### 🔧 **Interactive Filtering System**
- Real-time filtering by difficulty level and featured status
- Smooth animations when switching filters
- Recipe count updates dynamically
- Empty state handling with helpful messaging

### 📱 **Responsive Design**
- Mobile-first approach with breakpoints for tablet and desktop
- Collapsible navigation menu for mobile devices
- Optimized layouts for different screen sizes
- Touch-friendly interactive elements

### ⚡ **Performance Optimizations**
- Next.js App Router for optimal loading
- Efficient component structure and state management
- Optimized images and assets
- Smooth page transitions

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Brewing calculator tool
- [ ] User recipe submissions and ratings
- [ ] Coffee bean recommendations
- [ ] Video brewing guides
- [ ] Search functionality across all content
- [ ] User accounts and favorites
- [ ] Mobile app version
- [ ] Coffee shop locator
- [ ] Community features and comments

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from [filmtypes.com](https://www.filmtypes.com)
- Recipe content sourced from coffee experts and brewing communities
- V60 brewing techniques from James Hoffmann, Tetsu Kasuya, Scott Rao, and others
- Built with love for the coffee community ☕

---

**Happy Brewing!** ☕✨