# W3J LLC - Technology Consulting Services

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/W3JDev/W3JLLC-BLUE-THEMED)

A professional, modern, and visually stunning corporate website for W3J LLC, a technology consulting firm specializing in full-stack development and AI integration.

This project is a visually stunning, professional, and minimalist single-page corporate website for W3J LLC. The website serves as the primary online presence, designed to attract enterprise clients by showcasing expertise in full-stack development and AI integration. The application features a clear, intuitive layout with sections for Services, About, Portfolio, and Contact, all accessible via a smooth-scrolling interface from a fixed header. The design prioritizes a clean, modern aesthetic with a sophisticated blue and gray color palette, generous white space, and subtle animations to enhance user experience and build brand credibility.

## Key Features

- **Modern Single-Page Design:** A seamless, single-page layout for a fluid user experience.
- **Responsive & Mobile-First:** Flawless viewing experience across all devices, from mobile phones to desktops.
- **Interactive UI/UX:** Smooth scrolling, subtle animations, and micro-interactions for a polished feel.
- **Services Showcase:** Clearly defined service offerings with descriptions and icons.
- **Portfolio Section:** Highlights key project types to demonstrate expertise and build credibility.
- **Integrated Contact Form:** Built with `react-hook-form` and `zod` for robust, client-side validation.
- **Professional Branding:** Clean, corporate aesthetic with a sophisticated color palette and typography.

## Technology Stack

- **Framework:** [React](https://reactjs.org/) (with Vite)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Deployment:** [Cloudflare Pages & Workers](https://www.cloudflare.com/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (v18 or later) and [Bun](https://bun.sh/) installed on your machine.

### Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/w3j-llc/w3j-llc-corporate-site.git
    cd w3j-llc-corporate-site
    ```

2.  **Install dependencies:**
    This project uses `bun` for package management.
    ```bash
    bun install
    ```

3.  **Run the development server:**
    This command starts the Vite development server.
    ```bash
    bun run dev
    ```
    The application will be available at `http://localhost:3000`.

## Development

- **Components:** Reusable UI components are located in `src/components`. Core page sections (Hero, Services, etc.) are organized as individual components.
- **UI Library:** The project heavily utilizes `shadcn/ui`. To add new components, use the `shadcn-ui` CLI.
- **Styling:** Custom styles and Tailwind CSS configurations can be found in `src/index.css` and `tailwind.config.js`.
- **Pages:** The main page structure is defined in `src/pages/HomePage.tsx`.

## Deployment

This project is optimized for deployment on the Cloudflare network.

### Deploying to Cloudflare Pages

1.  **Build the project:**
    This command creates a production-ready build in the `dist` directory.
    ```bash
    bun run build
    ```

2.  **Deploy with Wrangler:**
    Ensure you have [Wrangler](https://developers.cloudflare.com/workers/wrangler/get-started/) installed and configured. Then, run the deploy command:
    ```bash
    bun run deploy
    ```
    This will deploy your application to Cloudflare Pages and bind any associated Workers.

Alternatively, you can connect your GitHub repository directly to Cloudflare Pages for continuous deployment.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/W3JDev/W3JLLC-BLUE-THEMED)

## License

This project is licensed under the MIT License.

## Contact

**W3J LLC**
- **Owner:** Muhammad Nurunnabi
- **Email:** admin@w3jdev.com
- **Address:** 30 N Gould St Ste R, Sheridan, WY 82801