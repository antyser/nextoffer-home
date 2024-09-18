export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Pricing from "@/components/pricing";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <div>
      <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <PageIllustration />
        <Hero />
        <Features />
        <Workflows />
        <Pricing />
        <Testimonials />
        <Cta />
      </main>
    </div>
  );
}
