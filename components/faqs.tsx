"use client";

import { useState } from 'react';

const faqItems = [
    {
      question: "What do the free trials include?",
      answer: "Our free trials include 3 separate 15-minute interview sessions. Each session gives you full access to all Nextoffer features, allowing you to experience our service in real-world scenarios."
    },
    {
      question: "What industries does Nextoffer support?",
      answer: "Nextoffer supports a wide range of industries including technology, finance, healthcare, education, and more. Our AI is adaptable to various domains and can be customized to your specific needs."
    },
    {
      question: "Which online meeting platforms are compatible with Nextoffer?",
      answer: "Nextoffer seamlessly integrates with popular platforms such as Zoom, Google Meet, Microsoft Teams, and Webex, ensuring support across various meeting environments."
    },
    {
      question: "Is Nextoffer detectable during interviews?",
      answer: "Nextoffer is designed to be discreet. However, we strongly encourage ethical use and transparency with interviewers about any aids being used during the interview process."
    },
    {
      question: "What distinguishes Nextoffer from other similar tools?",
      answer: "Nextoffer stands out with its advanced AI, trained by domain experts who actively update our interview database. This ensures our responses are current and industry-specific. Additionally, we offer 3 free 15-minute trials, allowing users to experience these benefits firsthand."
    },
    {
      question: "What is Nextoffer's cancellation policy?",
      answer: "We don't offer refunds for cancellations. Once you subscribe, you have the flexibility to cancel at any time. Your access will remain active until the end of your current billing period."
    },
  ];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-700 py-4">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={toggleOpen}
      >
        <span className="text-lg font-medium text-gray-200">{question}</span>
        <span className="ml-6 flex-shrink-0 text-indigo-500">
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2">
          <p className="text-indigo-200/65">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative" id="faqs">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-100">FAQs</h2>
          <div className="mx-auto max-w-3xl">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}