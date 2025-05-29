# Stripe Integration Setup Guide

## 1. Create Stripe Account
1. Go to [stripe.com](https://stripe.com) and create an account
2. Complete your account setup and verification

## 2. Get API Keys
1. Go to Stripe Dashboard → Developers → API keys
2. Copy your **Publishable key** and **Secret key**
3. Add them to your `.env.local` file:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```

## 3. Create Products and Prices
Create the following products in Stripe Dashboard → Products:

### FX 5° RANGE - $29.99/month
- Name: "FX 5° RANGE"
- Description: "Conservative Trading Bot"
- Price: $29.99 USD recurring monthly

### FX 10° RANGE - $49.99/month
- Name: "FX 10° RANGE" 
- Description: "Balanced Trading Bot"
- Price: $49.99 USD recurring monthly

### FX 25° RANGE - $79.99/month
- Name: "FX 25° RANGE"
- Description: "Aggressive Trading Bot" 
- Price: $79.99 USD recurring monthly

### 3D FX FUND - $149.99/month
- Name: "3D FX FUND"
- Description: "Premium Trading Bot"
- Price: $149.99 USD recurring monthly

## 4. Get Price IDs
After creating products, copy the Price IDs and add to `.env.local`:
```
STRIPE_FX_5_PRICE_ID=price_...
STRIPE_FX_10_PRICE_ID=price_...
STRIPE_FX_25_PRICE_ID=price_...
STRIPE_3D_FX_PRICE_ID=price_...
```

## 5. Setup Webhooks
1. Go to Stripe Dashboard → Developers → Webhooks
2. Click "Add endpoint"
3. Endpoint URL: `https://yourdomain.com/api/stripe/webhook`
4. Select these events:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copy the webhook signing secret and add to `.env.local`:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

## 6. Configure Customer Portal
1. Go to Stripe Dashboard → Settings → Billing → Customer portal
2. Enable the customer portal
3. Configure allowed features:
   - Update payment method
   - Download invoices
   - Cancel subscriptions
   - Update billing information

## 7. Database Migration
Run the database migration to add Stripe fields:
```bash
npx prisma db push
```

## 8. Test the Integration
1. Use Stripe test cards: https://stripe.com/docs/testing
2. Test card: `4242 4242 4242 4242`
3. Any future expiry date and CVC

## 9. Go Live
1. Complete Stripe account verification
2. Switch to live API keys
3. Update webhook endpoint to production URL
4. Test with real payment methods

## Webhook Events Handled
- `checkout.session.completed` - Creates subscription record
- `customer.subscription.updated` - Updates subscription status
- `customer.subscription.deleted` - Cancels subscription
- `invoice.payment_succeeded` - Activates subscription
- `invoice.payment_failed` - Marks subscription as past due

## Security Notes
- Never expose secret keys in client-side code
- Always verify webhook signatures
- Use HTTPS in production
- Regularly rotate webhook secrets
