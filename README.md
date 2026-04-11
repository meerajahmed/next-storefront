# next-storefront
Full-stack eCommerce platform built with Next.js, PostgreSQL, Prisma, NextAuth, Stripe, and PayPal.

---

next-storefront is a full-stack eCommerce platform built with Next.js.  
It demonstrates modern web development practices including authentication, database integration, payment processing, and scalable UI architecture.

This project showcases how to build a production-ready online store using industry-standard tools and best practices.

---

## Features

- Modern responsive UI with dynamic layouts
- Product listing and product details pages
- Shopping cart functionality
- Secure authentication (Sign Up / Login)
- Checkout and shipping forms
- Payment integration (Stripe & PayPal)
- Database management with PostgreSQL
- Schema modeling using Prisma ORM
- Form validation using Zod
- Theme management and reusable UI components
- Server-side rendering and API routes
- Production-ready architecture

---

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS (or your styling choice)

### Backend
- Next.js API Routes
- PostgreSQL
- Prisma ORM

### Authentication
- NextAuth.js

### Payments
- Stripe
- PayPal

### Validation
- Zod

### Deployment
- Vercel (recommended)

---


## Getting Started

### 1. Configure Environment Variables
Create a new `.env` file in the root of the project and define your PostgreSQL database connection URL:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

### 2. Install Dependencies
This project uses `pnpm` as its package manager.

```bash
pnpm install
```

### 3. Setup the Prisma Database
Synchronize the Prisma schema configuration with your database to automatically provision the required relational tables:

```bash
pnpm dlx prisma db push
```

After pushing, execute the standardized seed script specifically designed to populate your store with default mock data:

```bash
pnpm dlx prisma db seed
```

### 4. Run the Development Server
Once the database is successfully configured, launch the Next.js local environment:

```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to explore the platform.

### 5. Explore Database via Prisma Studio
Prisma Studio provides a fully integrated visual database GUI editor for reviewing and administrating your PostgreSQL entries without typing complex queries.

You can spin it up natively inside a new terminal via:
```bash
pnpm dlx prisma studio
```
Prisma studio operates persistently by default on [http://localhost:5555](http://localhost:5555).
