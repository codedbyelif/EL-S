# EL-S Portfolio

This is a modern, high-performance personal portfolio website designed to showcase innovative web and mobile applications. It features advanced interactive elements, 3D graphics, and a sleek, responsive design.

**Coded by [codedbyelif](https://github.com/codedbyelif)**

## About The Project

EL-S is built to demonstrate technical expertise and design precision. It utilizes cutting-edge web technologies to create an immersive user experience. The site includes a 3D face-scanning background effect, dynamic text animations, and a detailed showcase of various software projects ranging from mobile apps to embedded systems.

## Key Features

- **Interactive 3D Background:** A real-time, face-scanning effect using Three.js and face-api.js (lazy-loaded for performance).
- **Dynamic Animations:** Smooth transitions and text effects powered by GSAP and custom CSS animations.
- **Responsive Design:** Fully optimized for all device sizes, from mobile phones to large desktop screens.
- **Project Showcase:** Detailed views for specific projects like Lovent, RezzGo, and ITU MARGE, including technology stacks and screenshots.
- **Modern UI Components:** Custom-built components such as the Curved Text Loop and App Showcase with interactive hover effects.

## Technology Stack

This project is built using the following technologies:

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, CLSX, Tailwind Merge
- **3D & Graphics:** Three.js, React Three Fiber
- **Computer Vision:** face-api.js
- **Animations:** GSAP (GreenSock Animation Platform)
- **Icons:** Lucide React
- **UI Components:** Radix UI Primitives

## Projects Showcased

The portfolio highlights several key projects:

1.  **Lovent:** A book reading and writing platform with web and mobile access.
2.  **RezzGo:** A 24/7 online reservation system connecting businesses and users.
3.  **ITU MARGE:** A website for the Mining Automation, Robotics & Ground Engineering club.
4.  **IoT & Embedded Systems:** Arduino and Nuvoton microprocessor projects.

## Project Structure

The project directory is structured as follows:

```
EL-S/
├── app/                  # Next.js App Router pages and layouts
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Main application layout
│   └── page.tsx          # Homepage
├── components/           # Reusable UI components
│   ├── AppShowcase.tsx   # Mobile app presentation component
│   ├── ContactSection.tsx# Contact information and social links
│   ├── CurvedLoop.tsx    # Interactive curved text animation
│   ├── GridScan.tsx      # 3D background effect
│   └── ...
├── lib/                  # Utility functions and data
│   ├── data.ts           # Project data and configuration
│   └── utils.ts          # Helper functions (CN, etc.)
├── public/               # Static assets (images, icons, models)
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Available Scripts

In the project directory, you can run the following commands:

-   `npm run dev`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
-   `npm run build`: Builds the app for production to the `.next` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Runs the linter to find and fix code issues.

## Optimization & Performance

To ensure a smooth user experience, this project implements several performance strategies:

-   **Lazy Loading:** Heavy 3D components and face detection models (`GridScan`) are lazy-loaded using `next/dynamic` to improve initial Load times.
-   **Conditional Logic:** Resource-intensive scripts are only executed when necessary (e.g., webcam enabled).
-   **Image Optimization:** Next.js Image component and proper formatting (WebP/SVG) are used where applicable.

## Customization

You can customize the portfolio by modifying the following files:

-   **Content:** Edit `lib/data.ts` to update project descriptions, images, and links.
-   **Styling:** Update `app/globals.css` for global styles or modify Tailwind classes directly in components.
-   **Images:** Place new images in the `public/` directory and reference them in your components or data file.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1.  Push your code to a GitHub repository.
2.  Import your repository to Vercel.
3.  Vercel will automatically detect the settings and deploy your site.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/codedbyelif/EL-S.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## Acknowledgments

-   [Next.js Documentation](https://nextjs.org/docs)
-   [Tailwind CSS](https://tailwindcss.com)
-   [Three.js](https://threejs.org)
-   [Lucide Icons](https://lucide.dev)

## License

Copyright (c) 2026 codedbyelif. All rights reserved.

This project is open for viewing and educational purposes. Please contact the author for commercial usage or redistribution inquiries.

## Author

**codedbyelif**

- **GitHub:** [codedbyelif](https://github.com/codedbyelif)
- **LinkedIn:** [Elif Kaynar](https://www.linkedin.com/in/elif-kaynar/)
- **Instagram:** [@elisarlyss](https://www.instagram.com/elisarlyss/)

---

*Designed and developed by codedbyelif.*
