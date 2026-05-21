# TAOP KIT PRO - Interactive Presentation Platform

![TAOP KIT PRO](/public/hero-pet.png)

TAOP KIT PRO is a modern, interactive web presentation designed to showcase an all-in-one pet care solution. Built with Next.js 16 (App Router), React, and Tailwind CSS, this single-page application features fluid animations, a premium glassmorphism design system, and an engaging user experience to effectively communicate the product's value proposition, features, and strategic analysis for academic and business pitches.

## ✨ Key Features

- **Modern UI/UX**: Premium aesthetic tailored for the pet-care industry using a custom Teal, Amber, and Coral color palette.
- **Fluid Animations**: Scroll-triggered reveals, stagger animations, and micro-interactions powered by [Framer Motion](https://www.framer.com/motion/).
- **Glassmorphism Design**: Frosted glass effects and depth-of-field styling to create a sleek, contemporary look.
- **Interactive Data Visualization**: Dynamic metrics dashboards, concentric product level charts, and interactive strategic crossover matrices (FO, DO, FA, DA).
- **Dynamic Calculators**: Integrated pricing margin calculator demonstrating the Kotler/Stanton theory.
- **Fully Responsive**: Optimized for seamless viewing across all devices (Mobile, Tablet, Desktop) with a custom animated mobile navigation.
- **SEO Optimized**: Pre-configured metadata and semantic HTML structure.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📁 Project Structure

```text
src/
├── app/
│   ├── globals.css            # Global styles, Tailwind directives, and design tokens
│   ├── layout.tsx             # Root layout with fonts and Metadata
│   └── page.tsx               # Main entry point (Server Component)
├── components/
│   ├── Animations.tsx         # Reusable Framer Motion primitive components
│   ├── Navbar.tsx             # Sticky navigation with mobile menu
│   ├── PresentationClient.tsx # Main client component assembling all sections
│   └── sections/              # Modular presentation sections
│       ├── HeroSection.tsx            # Main hero banner
│       ├── EquipoSection.tsx          # Founders & team profiles
│       ├── InvestigacionSection.tsx   # Market research metrics
│       ├── DescripcionSection.tsx     # What is TAOP KIT PRO?
│       ├── NivelesSection.tsx         # Kotler's product layers
│       ├── OmnicanalidadSection.tsx   # CIM Strategy & Omnichannel flow
│       ├── CostosSection.tsx          # Pricing calculator & structure
│       ├── ObjetivoSection.tsx        # Goals, targets and tactics
│       └── FodaSection.tsx            # SWOT & Crossover strategies
public/
├── hero-pet.png               # Hero background image
├── product-kit.png            # Product presentation image
└── products-flatlay.png       # Included items flatlay image
```

## 🛠️ Installation & Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Setup Instructions

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd sara
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **View the project**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the interactive presentation.

## 🚢 Deployment

This project is 100% compatible with Vercel and requires zero extra configuration for deployment.

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import the project into your [Vercel Dashboard](https://vercel.com/new).
3. Vercel will automatically detect the Next.js framework and configure the build settings.
4. Click **Deploy**.

Alternatively, deploy via the Vercel CLI:
```bash
npx vercel --prod
```

## 📝 Content Highlights

The presentation is divided into strategic sections based on the formal business documentation:
- **Equipo**: Introduction of the academic creators from IUE and their goals.
- **Estudio**: Real survey data, limitations, and pain points of the target market.
- **Descripción**: Core benefits and values (All-In-One, Professional validation).
- **Niveles**: Product tier analysis (Core, Actual, Augmented) in an interactive chart.
- **CIM**: Customer journey mapping and Integrated Marketing Communications pillars.
- **Costos**: Transparent breakdown of product/service costs and a dynamic retail price calculator.
- **Objetivo**: Business goals, targets (30% increase), and actionable marketing tactics.
- **FODA**: Interactive analysis of Strengths, Weaknesses, Opportunities, and Threats alongside detailed crossover matrices (FO/DO/FA/DA).

---
*Built with ❤️ for TAOP KIT PRO.*
