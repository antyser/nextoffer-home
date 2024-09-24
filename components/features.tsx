import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

const features = [
  {
    title: "Expert-Trained AI",
    description: "Our AI assistant is trained by industry experts, giving you insights and guidance from the best in the field.",
    icon: (
      <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
        <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
        <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
      </svg>
    ),
  },
  {
    title: "Position-Specific Feedback",
    description: "Receive feedback tailored to the exact role you're applying for, helping you close the gap between your current performance and your dream job.",
    icon: (
      <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
        <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
        <path fillOpacity=".48" d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z" />
      </svg>
    ),
  },
  {
    title: "Undetectable Assistance",
    description: "Seamless and discreet, Nextoffer runs in the background without being noticed by interviewers, so you can focus confidently.",
    icon: (
      <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
        <path fillOpacity=".48" d="M18 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM9 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 18a6 6 0 01-5.197-3h10.394A6 6 0 0112 18z" />
      </svg>
    ),
  },
  {
    title: "Rich Integrations",
    description: "Works effortlessly with major video call platforms like Google Meet, Zoom, Microsoft Teams, and more.",
    icon: (
      <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
        <path d="M13 16v2h10v-2H13zm0-6v2h10v-2H13zm5 4v2h5v-2h-5zm0-6v2h5V8h-5zm-5-4v2h10V4H13z" />
        <path fillOpacity=".48" d="M7 14c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0-6C5.34 0 4 1.34 4 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
      </svg>
    ),
  },
  {
    title: "Latest Company Data",
    description: "Stay ahead with continuously updated interview questions and hiring rubrics from leading companies.",
    icon: (
      <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
        <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
        <path fillOpacity=".48" d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z" />
      </svg>
    ),
  },
  {
    title: "Supports 30+ Languages",
    description: "Available in over 30 languages, ensuring you get the right support, no matter where you're interviewing.",
    icon: (
      <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 5h2v2h-2V5zm-1 4h4v2h-1v6h-2v-6h-1V9zm8.5 10.5L17 21l-1.5-1.5L14 21l-1.5-1.5L11 21l-1.5-1.5L8 21l-1.5-1.5L5 21l-1.5-1.5L2 21V3l1.5 1.5L5 3l1.5 1.5L8 3l1.5 1.5L11 3l1.5 1.5L14 3l1.5 1.5L17 3l1.5 1.5L20 3v18l-1.5-1.5z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Features
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Built for mastering technical interviews
            </h2>
            <p className="text-lg text-indigo-200/65">
              Nextoffer actively updates its database with the latest interview questions and rubrics from top companies, ensuring you're always prepared.
            </p>
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            {features.map((feature, index) => (
              <article key={index}>
                {feature.icon}
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  {feature.title}
                </h3>
                <p className="text-indigo-200/65">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
