import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "React",
    "WordPress",
    "Shopify",
    "Figma",
    "Tailwind CSS",
  ];
  const items2 = [
    "available now",
    "hybrid",
    "remote",
    "full-time",
    "available now",
  ];

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tween = gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
          markers: false,
        },
      });

      return () => tween.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          Let's craft <br />
          <span className="font-normal">pixel-perfect</span> &{" "}
          <span className="italic">accessible</span> <br />
          interfaces <span className="text-gold">together</span>
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
