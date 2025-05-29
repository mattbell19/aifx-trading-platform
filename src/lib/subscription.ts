import { prisma } from './prisma'
import { SUBSCRIPTION_PLANS } from './stripe'

export async function getUserSubscriptions(userId: string) {
  const subscriptions = await prisma.subscription.findMany({
    where: {
      userId,
      status: 'active',
    },
  })

  return subscriptions
}

export async function hasActiveSubscription(userId: string, planId?: string) {
  const where: any = {
    userId,
    status: 'active',
  }

  if (planId) {
    where.planId = planId
  }

  const subscription = await prisma.subscription.findFirst({ where })
  return !!subscription
}

export async function getUserSubscriptionStatus(userId: string) {
  const subscriptions = await getUserSubscriptions(userId)
  
  const subscriptionStatus: Record<string, boolean> = {
    'fx-5-range': false,
    'fx-10-range': false,
    'fx-25-range': false,
    '3d-fx-fund': false,
  }

  subscriptions.forEach(sub => {
    if (sub.planId in subscriptionStatus) {
      subscriptionStatus[sub.planId] = true
    }
  })

  return subscriptionStatus
}

export async function cancelSubscription(userId: string, planId: string) {
  const subscription = await prisma.subscription.findFirst({
    where: {
      userId,
      planId,
      status: 'active',
    },
  })

  if (!subscription) {
    throw new Error('Subscription not found')
  }

  await prisma.subscription.update({
    where: { id: subscription.id },
    data: { status: 'canceled' },
  })

  return subscription
}

export function getSubscriptionPlan(planId: string) {
  return SUBSCRIPTION_PLANS[planId as keyof typeof SUBSCRIPTION_PLANS]
}
