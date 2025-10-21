# metrosites-queen-pet-prototype


The Queen Pet Products & Accessories – Website Prototype
Project Overview

The Queen Pet Products & Accessories Website Prototype is a front-end project designed to visually showcase a premium e-commerce platform for pet products. The website highlights products, categories, and an interactive shopping experience including cart and checkout mock-ups.

The prototype emphasizes a modern, playful, and professional design, catering to pet owners looking for high-quality products.

Key Objectives

Showcase pet products with images, pricing, and categories.

Provide interactive product listings and hover animations.

Simulate shopping experience with cart and checkout pages.

Include promotional banners and special offers.

Fully responsive layout for desktop, tablet, and mobile.

Demonstrate UI/UX flow for e-commerce functionality without backend integration.

Tech Stack
Category	Tools / Libraries
Frontend Framework	React JS (Vite + TypeScript)
Styling	Tailwind CSS, Daisy UI, CSS Variables (OKLCH Colors)
UI Components	shadcn/ui, Daisy UI, Lucide Icons
Animations	Framer Motion
Routing	React Router DOM
Version Control	Git, GitHub
Design Mockups	Figma / Adobe XD
Hosting / Deployment	Vercel, Netlify
Utilities	Helper functions, constants, reusable hooks

Primary Colors Example:

Main: oklch(70% 0.05 50)

Accent: from-pink-400 to-yellow-400 (for buttons, badges, sale tags)

Secondary: oklch(80% 0.1 20)

Languages Used:

TypeScript / JavaScript

HTML5

CSS3 / Tailwind CSS

Repository Information
Field	Details
Project Name	The Queen Pet Products & Accessories – Website Prototype
Repository Name	metrosites-queen-pet-prototype
Repository Status	Active / In Development
Version Control	Git & GitHub
Branching Strategy	main for stable, dev for development
Demo / Hosting	Vercel / Netlify
Project Folder Structure
metrosites-queen-pet-prototype/
│
├── public/                       # Static files: logos, images, favicon
│   └── images/
│
├── src/
│   ├── assets/                    # Product images, banners, icons
│   │   └── products/
│   │       └── categories/
│   │
│   ├── components/                # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ProductCard.tsx
│   │   ├── CartItem.tsx
│   │   ├── CartSummary.tsx
│   │   ├── CheckoutForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   └── Badge.tsx
│   │
│   ├── pages/                     # Main pages
│   │   ├── Home.tsx
│   │   ├── Products.tsx
│   │   ├── ProductDetails.tsx
│   │   ├── Cart.tsx
│   │   ├── Checkout.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   │
│   ├── routes/                    # React Router configuration
│   │   └── AppRoutes.tsx
│   │
│   ├── styles/                    # Tailwind overrides / global CSS
│   │   └── globals.css
│   │
│   ├── utils/                     # Helper functions/constants/hooks
│   │   ├── colors.ts
│   │   ├── productsData.ts
│   │   └── cartUtils.ts
│   │
│   ├── App.tsx                    # Main App component
│   └── main.tsx                   # Root render
│
├── package.json                   # Project dependencies
├── tailwind.config.js             # Tailwind CSS + Daisy UI config
├── tsconfig.json                  # TypeScript configuration
├── vite.config.ts                 # Vite build configuration
└── README.md                      # Project documentation

Component Architecture
Component	Description
Navbar	Top navigation with links to Home, Products, Cart, Checkout, About. Responsive with hamburger menu.
Hero	Intro section with brand tagline and CTA buttons.
ProductCard	Displays individual products with image, price, and hover effects.
CartItem	Displays products added to the cart with quantity controls.
CartSummary	Shows subtotal, taxes, and checkout CTA.
CheckoutForm	Form for customer checkout: name, address, payment mock, confirmation CTA.
Footer	Contact info, social links, and copyright.
Button	Reusable button with gradient and hover animation.
Badge	Label for sale, new product, or promotion.
Page Flow

Home – Hero + featured products + promotions + CTA to Products.

Products – Product listings with filtering, sorting, and hover effects.

Product Details – Detailed product view with image gallery and Add to Cart button.

Cart – Mock shopping cart with editable items and subtotal.

Checkout – Checkout form with validation and CTA.

About – Brand story and values.

Contact – Contact form & map.



<img width="507" height="824" alt="image" src="https://github.com/user-attachments/assets/a5b247af-5851-45fe-8180-b9e990212958" />
