# EduTube - Educational Video Platform

A comprehensive educational video platform built with Next.js, Tailwind CSS, and modern web technologies. Features include course management, video streaming, user authentication, payment processing, and a YouTube-like interface.

## Features

- 🎥 **Video Course Platform**: Browse and watch educational videos
- 🔐 **Social Authentication**: Login with Google, Facebook, and GitHub
- 💳 **Payment Integration**: Support for CCAvenue and PayPal
- 📱 **Responsive Design**: YouTube-like interface optimized for all devices
- 🎯 **Course Management**: Categories, ratings, reviews, and progress tracking
- 🛒 **Shopping Cart**: Add courses to cart and purchase
- 📊 **User Dashboard**: Track progress and manage enrolled courses
- 🔍 **Search & Filtering**: Find courses by category, rating, price, etc.
- 👥 **Admin Panel**: Manage courses, users, and analytics

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL with Prisma ORM
- **Payment**: CCAvenue, PayPal
- **Video Player**: React Player
- **UI Components**: Headless UI, Heroicons
- **State Management**: Zustand
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- PostgreSQL database
- Social auth provider credentials (Google, Facebook, GitHub)
- Payment gateway credentials (CCAvenue, PayPal)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd educational-video-platform
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set up environment variables**
Copy `.env.local` and update with your credentials:
```bash
cp .env.local .env.local
```

Update the following variables:
- `DATABASE_URL`: Your PostgreSQL connection string
- `NEXTAUTH_SECRET`: A secure random string
- Social auth provider credentials
- Payment gateway credentials

4. **Set up the database**
```bash
pnpm dlx prisma migrate dev
pnpm dlx prisma generate
```

5. **Seed the database (optional)**
```bash
pnpm dlx prisma db seed
```

6. **Run the development server**
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   └── providers/         # Context providers
├── components/            # Reusable components
│   ├── course/           # Course-related components
│   └── layout/           # Layout components
├── lib/                  # Utility functions
│   ├── auth.ts           # NextAuth configuration
│   ├── prisma.ts         # Prisma client
│   └── utils.ts          # Helper functions
prisma/
├── schema.prisma         # Database schema
└── migrations/           # Database migrations
```

## Key Features Implementation

### Authentication
- Social login with Google, Facebook, and GitHub
- Session management with NextAuth.js
- Protected routes and middleware

### Course Management
- Course catalog with categories and filtering
- Video streaming with progress tracking
- Reviews and ratings system
- Wishlist and cart functionality

### Payment Processing
- CCAvenue integration for Indian market
- PayPal for international payments
- Secure payment processing and webhooks

### User Experience
- YouTube-inspired interface
- Responsive design for all devices
- Real-time notifications
- Search and filtering capabilities

## Development

### Database Schema
The application uses Prisma with PostgreSQL. Key models include:
- User (with roles: Student, Instructor, Admin)
- Course, Chapter, Video
- Enrollment, Progress, Review
- Purchase, CartItem, WatchlistItem

### API Routes
- `/api/auth/*` - Authentication endpoints
- `/api/courses/*` - Course management
- `/api/payment/*` - Payment processing
- `/api/admin/*` - Admin functionality

### Deployment

1. **Environment Setup**
   - Configure production database
   - Set up payment gateway webhooks
   - Configure social auth redirect URLs

2. **Build and Deploy**
```bash
pnpm build
pnpm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue on the GitHub repository.
