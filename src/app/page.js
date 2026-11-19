import About from "@/modules/About/About";
import Benefits from "@/modules/Benefits/Benefits";
import Booking from "@/modules/Booking/Booking";
import Hero from "@/modules/Hero/Hero";
import HowItWorks from "@/modules/HowItWorks/HowItWorks";
import Pricing from "@/modules/Pricing/Pricing";
import WhatIsLeela from "@/modules/WhatIsLeela/WhatIsLeela";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatIsLeela />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Booking />
    </>
  );
}
