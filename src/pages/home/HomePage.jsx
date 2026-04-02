import Hero from "../../Hero";
import Stat from "../../Stat";
import Services from "../../Services";
import SeoTimeline from "../../SeoTimeline";
import TechStack from "../../TechStack";
import Scope from "../../Scope";
import SeoResult from "../../SeoResult";
import SeoGrowth from "../../SeoGrowth";
import Certificate from "../../Certificate";
import Contact from "../../Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      {/* <Stat /> */}
      {/* <Services /> */}
      <SeoTimeline />
      {/* <Scope /> */}
      <SeoResult />
      {/* <SeoGrowth /> */}
      <Certificate />
      <Contact />
    </>
  );
}
