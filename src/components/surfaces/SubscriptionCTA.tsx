'use client';

import React from 'react';
import { Button, Surface, Badge } from '../ui';

export interface SubscriptionPlan {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
}

interface SubscriptionCTAProps {
  title: string;
  subtitle: string;
  plans: SubscriptionPlan[];
}

export function SubscriptionCTA({ title, subtitle, plans }: SubscriptionCTAProps) {
  return (
    <section className="py-section md:py-sectionLarge bg-gradient-clay">
      <div className="max-w-5xl mx-auto px-gutter">
        <div className="text-center mb-section">
          <h2 className="font-serif text-heading-lg text-charcoal mb-lg">{title}</h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {plans.map((plan) => (
            <Surface
              key={plan.name}
              variant={plan.highlighted ? 'mid' : 'glass'}
              className={`p-xl flex flex-col ${plan.highlighted ? 'ring-2 ring-terracotta' : ''}`}
            >
              <h3 className="text-heading-sm text-charcoal mb-md font-serif">{plan.name}</h3>
              <p className="text-display-sm text-terracotta font-serif mb-lg">
                {plan.price}
                {plan.period && <span className="text-body-sm text-text-secondary">/{plan.period}</span>}
              </p>

              <ul className="space-y-md mb-xl flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-body-sm text-charcoal flex items-start gap-md"
                  >
                    <span className="text-terracotta mt-xs font-bold flex-shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="primary" size="md" className="w-full">
                Subscribe Now
              </Button>
            </Surface>
          ))}
        </div>
      </div>
    </section>
  );
}
