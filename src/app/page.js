import About from "@/modules/About/About";
import Benefits from "@/modules/Benefits/Benefits";
import Booking from "@/modules/Booking/Booking";
import Hero from "@/modules/Hero/Hero";
import Pricing from "@/modules/Pricing/Pricing";
import WhatIsLeela from "@/modules/WhatIsLeela/WhatIsLeela";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhatIsLeela />
      <Benefits />
      <Pricing />
      <Booking />
    </main>
  );
}
