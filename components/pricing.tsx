'use client';

import { useState } from 'react';
import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

const pricingPlans = [
  {
    name: 'FREE',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for those just getting started with interviews or exploring AI-assisted preparation.',
    features: [
      '3 x 15-min Interview Sessions for Mock Interviews or Real-Time Interviews',
      'Interview Feedback',
    ],
    buttonText: 'Try for free',
  },
  {
    name: 'PRO',
    price: { monthly: 88, yearly: 24 },
    description: 'Unlimited support to enhance your interview skills with advanced AI-driven tools.',
    features: [
      'Unlimited 60-min Interview Sessions for Mock Interviews or Real-Time Interviews',
      'Advanced Interview Feedback with detailed performance insights',
      'Full Access to Coding Copilot for technical interviews',
      'Personalized AI Assistant to tackle behavioral and experience-based interviews',
      'Priority Customer Support for faster assistance',
    ],
    buttonText: 'Get the plan',
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Choose the plan that's right for you
            </h2>
            <p className="text-lg text-indigo-200/65">
              Flexible pricing options to suit your needs and budget
            </p>
          </div>
          
          {/* Pricing toggle */}
          <div className="flex justify-center items-center mb-16">
            <div className="relative flex items-center p-1 bg-gray-800 rounded-full">
              <span 
                className={`absolute h-full top-0 transition-all duration-300 ease-in-out rounded-full bg-indigo-500 ${isYearly ? 'left-1/2 w-1/2' : 'left-0 w-1/2'}`}
              ></span>
              <button
                className={`relative z-20 px-4 py-2 text-sm transition-colors duration-300 ${!isYearly ? 'text-white' : 'text-gray-400'}`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button
                className={`relative z-20 px-4 py-2 text-sm transition-colors duration-300 ${isYearly ? 'text-white' : 'text-gray-400'}`}
                onClick={() => setIsYearly(true)}
              >
                Yearly
              </button>
            </div>
            <span className={`ml-4 px-3 py-1 text-xs font-bold text-white bg-purple-500 rounded-full transition-opacity duration-300 ${isYearly ? 'opacity-100' : 'opacity-0'}`}>
              SAVE 73%
            </span>
          </div>

          {/* Pricing plans */}
          <div className="mx-auto grid max-w-sm gap-8 lg:max-w-none lg:grid-cols-2">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="relative flex flex-col h-full p-6 bg-gray-800 rounded-2xl">
                <div className="mb-6">
                  <div className="text-lg font-semibold text-indigo-500 mb-1">{plan.name}</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-3xl font-bold text-gray-200">$</span>
                    <span className="text-4xl font-bold text-gray-200">{isYearly ? plan.price.yearly : plan.price.monthly}</span>
                    {plan.price.monthly !== 0 && (
                      <span className="text-gray-400 ml-2">
                        /month
                        {isYearly && <span className="text-sm ml-1">billed annually</span>}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="text-gray-400 -mb-2 grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-indigo-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full" href="https://app.nextoffer.ai/login">{plan.buttonText}</a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}