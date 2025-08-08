 /* eslint-disable */
 import { SpotlightPreview } from "../../components/ui/SpotlightPreview";
import { GlowingEffectDemoSecond } from "../ui/glowingeffectPreview";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";
import { VortexDemoSecond } from "../../components/ui/vortexFull";
import FooterReveal from "../../components/ui/FooterReveal";
const Home = () => {
  return (
    <div style={{ background: "#191919ff" }}>
      {/* <Boxes /> */}
      <div className="min-h-screen">
        <SpotlightPreview />
      </div>
      <div className="min-h-screen p-16">
        <GlowingEffectDemoSecond />
      </div>
      <div className="min-h-screen p-16">
        <InfiniteMovingCards
          items={[
            {
              quote: "Aceternity UI made animations super easy.",
              name: "Sohail Aslam",
              title: "Frontend Developer",
            },
            {
              quote: "The components are beautiful and fast to use.",
              name: "Alex Kim",
              title: "UI Designer",
            },
            {
              quote: "Perfect for building modern landing pages.",
              name: "Jane Smith",
              title: "Product Manager",
            },
          ]}
          direction="left"
          speed="slow"
          pauseOnHover={true}
          className="max-w-4xl mx-auto"
        />
      </div>
      <div className="min-h-screen p-16">
        <VortexDemoSecond />
      </div>
      <div>
        <FooterReveal />
      </div>
    </div>
  );
};
export default Home;
