# ShopHub - E-Commerce Website

A fully functional e-commerce website built with Next.js, React, and Tailwind CSS.

## Features

### Customer-Facing
- **Homepage** - Hero section, featured products, categories
- **Product Catalog** - Browse, search, and filter products by category and price
- **Shopping Cart** - Add/remove items, update quantities with persistent state
- **Checkout** - Multi-step checkout with shipping and payment information
- **User Authentication** - Login, signup, and user profiles
- **Order Management** - View order history and track status
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop

### Admin Features
- **Admin Dashboard** - Overview with key metrics and analytics
- **Product Management** - Add, edit, and delete products
- **Order Management** - View and manage customer orders
- **Analytics** - Revenue trends and order status visualization

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4, Shadcn UI Components
- **State Management**: React Context API
- **Authentication**: Custom Context-based auth
- **Hosting**: Vercel (ready to deploy)

## Getting Started

### Installation

1. Install with the shadcn CLI:
\`\`\`bash
npx shadcn-cli@latest init
\`\`\`

2. Or download the ZIP and install dependencies:
\`\`\`bash
npm install
\`\`\`

### Running Locally

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Demo Credentials

For testing the authentication system:
- Email: demo@shophub.com
- Password: Any password

## Project Structure

\`\`\`
app/
├── page.tsx                 # Homepage
├── products/               # Product catalog
├── cart/                   # Shopping cart
├── checkout/               # Checkout flow
├── login/ & signup/        # Authentication
├── profile/                # User profiles
├── admin/                  # Admin dashboard
├── about/ & contact/       # Info pages
└── layout.tsx              # Root layout with providers

components/
├── header.tsx              # Navigation header
├── footer.tsx              # Footer
├── featured-products.tsx   # Product grid
├── product-catalog.tsx     # Catalog with filters
├── cart-page.tsx           # Cart management
├── checkout-page.tsx       # Checkout flow
├── user-profile.tsx        # User profile
├── admin/                  # Admin components
└── auth/                   # Auth components
\`\`\`

## Key Pages

- `/` - Homepage
- `/products` - Product catalog with filters
- `/cart` - Shopping cart
- `/checkout` - Checkout flow
- `/login` - User login
- `/signup` - User registration
- `/profile` - User profile and orders
- `/admin` - Admin dashboard
- `/about` - About us
- `/contact` - Contact page

## Features Implemented

✅ Responsive design (mobile-first)
✅ Product filtering and search
✅ Shopping cart with persistent state
✅ Multi-step checkout
✅ User authentication system
✅ User profile and order history
✅ Admin dashboard with analytics
✅ Modern dark theme UI
✅ All components accessible
✅ SEO optimized

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy your changes

[Deploy with Vercel](https://vercel.com/new)

## Future Enhancements

- Database integration (PostgreSQL/Supabase)
- Real payment processing (Stripe)
- Email notifications
- Advanced analytics
- Inventory management
- User reviews and ratings
- Wishlist functionality
- Promotional codes

## License

MIT
