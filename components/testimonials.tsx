import Image from "next/image";

const testimonials = [
  {
    name: "Emily T.",
    position: "Software Engineer",
    company: "Microsoft",
    content: "NextOffer was a key factor in helping me secure my position at Microsoft. The real-time assistance kept me focused during the interview, and the tailored feedback helped me improve where it mattered most. I couldn't have done it without this tool!",
  },
  {
    name: "Jason R.",
    position: "Data Scientist",
    company: "Apple",
    content: "The AI-driven mock interviews were incredibly close to the actual interview process at Meta. The feedback I received was spot-on, and it helped me understand exactly what I needed to work on. I felt fully prepared walking into the interview.",
  },
  {
    name: "Sophie K.",
    position: "Solutions Architect",
    company: "Amazon",
    content: "I struggled with system design interviews, but NextOffer's real-time prompts and detailed feedback helped me bridge the gap. It gave me the confidence to succeed in my Amazon interview and ultimately land the job!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Don't take our word for it
            </h2>
            <p className="text-lg text-indigo-200/65">
              NextOffer empowers candidates to ace technical interviews, providing AI-driven solutions that boost confidence, enhance performance, and help land your dream job.
            </p>
          </div>
          {/* Testimonials */}
          <div className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative flex h-full flex-col justify-between rounded-2xl bg-gray-800 p-6">
                <div className="relative flex flex-grow flex-col">
                  <p className="mb-8 text-lg text-indigo-200/65">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-auto flex items-center">
                    <div className="text-sm font-medium text-indigo-200/65">
                      {testimonial.name} <span className="text-indigo-500">-</span> {testimonial.position} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}