# AIFx - Trading Bot Platform

A modern SAAS platform for renting AI-powered trading bots built with Next.js, Prisma, and Tailwind CSS.

## 🚀 Features

- **Beautiful Dark UI**: Modern glassmorphism design with blue/purple gradients
- **Authentication**: Secure login/signup with NextAuth.js
- **Dashboard**: Real-time trading analytics with interactive charts
- **Trading Bots**: Rent and manage AI-powered trading strategies
- **AI Chat**: Get personalized trading advice from AI assistant
- **Subscription Management**: Stripe integration for payments
- **Responsive Design**: Works perfectly on all devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 19, TypeScript
- **UI**: Shadcn/ui, Tailwind CSS, Lucide Icons
- **Charts**: Recharts for beautiful data visualization
- **Authentication**: NextAuth.js with credentials provider
- **Database**: PostgreSQL with Prisma ORM
- **Payments**: Stripe for subscription management
- **AI**: OpenAI API for chat functionality
- **Deployment**: Heroku with Postgres add-on

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd aifx
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Update `.env` with your values:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/aifx_db"

   # NextAuth.js
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"

   # Stripe
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_PUBLISHABLE_KEY="pk_test_..."

   # OpenAI
   OPENAI_API_KEY="sk-..."
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Schema

The application uses PostgreSQL with the following main models:

- **User**: User accounts and authentication
- **Subscription**: Stripe subscription management
- **TradingBot**: Available trading bot strategies
- **UserBot**: User's rented bots and their performance
- **Transaction**: Trading history and results
- **ChatMessage**: AI chat conversation history

## 🎨 Design Features

- **Dark Theme**: Professional dark UI with blue/purple gradients
- **Glassmorphism**: Modern glass-like cards with backdrop blur
- **Interactive Charts**: Beautiful data visualization with Recharts
- **Responsive Layout**: Mobile-first design that works everywhere
- **Smooth Animations**: Subtle transitions and hover effects

## 📱 Pages

- **Landing Page**: Hero section with features and pricing
- **Authentication**: Sign in/up with beautiful forms
- **Dashboard**: Overview with charts and quick actions
- **Trading Bots**: Browse and manage your rented bots
- **AI Chat**: Get trading advice from AI assistant
- **Subscription**: Manage your plan and billing
- **Settings**: Profile, notifications, and security

## 🚀 Deployment

### Heroku Deployment

1. **Create a Heroku app**
   ```bash
   heroku create your-app-name
   ```

2. **Add Postgres add-on**
   ```bash
   heroku addons:create heroku-postgresql:mini
   ```

3. **Set environment variables**
   ```bash
   heroku config:set NEXTAUTH_SECRET="your-secret"
   heroku config:set NEXTAUTH_URL="https://your-app.herokuapp.com"
   heroku config:set STRIPE_SECRET_KEY="sk_live_..."
   heroku config:set OPENAI_API_KEY="sk-..."
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

5. **Run database migrations**
   ```bash
   heroku run npx prisma db push
   ```

## 🔧 Development

### Adding New Components

```bash
npx shadcn@latest add [component-name]
```

### Database Changes

```bash
npx prisma db push
npx prisma generate
```

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using Next.js and modern web technologies.
