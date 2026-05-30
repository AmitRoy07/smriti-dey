import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const isTablet = useMediaQuery({ minWidth: 854, maxWidth: 1100 });
  const planetScale = isMobile ? 0.58 : isTablet ? 0.64 : 0.74;
  const cameraPosition = isMobile ? [0, 0, -12.2] : [0, 0, -11.5];
  const text = `I design and build responsive interfaces
with React, WordPress, Shopify, and modern UI systems
that feel polished, fast, and business-ready`;

  return (
    <section
      id="home"
      className="relative flex flex-col justify-end min-h-screen overflow-hidden"
    >
      <div className="relative z-10">
        <AnimatedHeaderSection
          subTitle={"UI/UX Developer | Frontend Engineer"}
          title={"Smriti Dey"}
          text={text}
          textColor={"text-black"}
        />
        <div className="px-5 sm:px-10 mt-10">
          <a
            href="/resume.pdf"
            download="Smriti-Dey-Resume.pdf"
            className="inline-flex items-center justify-center rounded-full border border-gold bg-black px-8 py-4 text-sm font-medium uppercase tracking-[0.35em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Download Resume
          </a>
        </div>
      </div>
      <figure
        className="absolute inset-x-0 -top-16 z-0 h-[42vh] pointer-events-none sm:-top-12 sm:h-[40vh] md:inset-0 md:h-auto"
        style={{ width: "100vw" }}
      >
        <Canvas
          shadows
          camera={{ position: cameraPosition, fov: 19, near: 1, far: 24 }}
        >
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            <Planet scale={planetScale} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
