import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const isTablet = useMediaQuery({ minWidth: 854, maxWidth: 1100 });
  const planetScale = isMobile ? 0.42 : isTablet ? 0.58 : 0.74;
  const cameraPosition = isMobile ? [0, 0, -13] : [0, 0, -11.5];
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
      </div>
      <figure
        className="absolute inset-x-0 top-0 z-0 h-[34vh] pointer-events-none md:inset-0 md:h-auto"
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
