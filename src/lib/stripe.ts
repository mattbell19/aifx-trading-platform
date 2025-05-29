import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
  typescript: true,
})

// Client-side Stripe instance
let stripePromise: Promise<Stripe | null>
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  }
  return stripePromise
}

// Bot subscription plans
export const SUBSCRIPTION_PLANS = {
  'fx-5-range': {
    name: 'FX 5° RANGE',
    description: 'Conservative Trading',
    price: 29.99,
    priceId: process.env.STRIPE_FX_5_PRICE_ID!,
    features: ['24/7 Trading', 'Risk Management', 'Conservative Strategy'],
  },
  'fx-10-range': {
    name: 'FX 10° RANGE',
    description: 'Balanced Trading',
    price: 49.99,
    priceId: process.env.STRIPE_FX_10_PRICE_ID!,
    features: ['24/7 Trading', 'Risk Management', 'Multi-pair Support'],
    popular: true,
  },
  'fx-25-range': {
    name: 'FX 25° RANGE',
    description: 'Aggressive Trading',
    price: 79.99,
    priceId: process.env.STRIPE_FX_25_PRICE_ID!,
    features: ['24/7 Trading', 'Advanced Analytics', 'High Frequency'],
  },
  '3d-fx-fund': {
    name: '3D FX FUND',
    description: 'Premium Strategy',
    price: 149.99,
    priceId: process.env.STRIPE_3D_FX_PRICE_ID!,
    features: ['24/7 Trading', 'AI Optimization', 'Premium Support'],
  },
} as const

export type SubscriptionPlanId = keyof typeof SUBSCRIPTION_PLANS
