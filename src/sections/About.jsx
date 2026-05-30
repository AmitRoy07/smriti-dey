import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

const aboutHighlights = [
  { label: "Pixel-perfect UI", icon: "lucide:scan-eye" },
  { label: "CMS friendly", icon: "lucide:panel-top" },
  { label: "Responsive builds", icon: "lucide:monitor-smartphone" },
  { label: "Email HTML", icon: "lucide:mail-check" },
];

const About = () => {
  const text = `4+ years of crafting responsive web interfaces
    across React, WordPress, Shopify, JavaScript, and UI systems
    from design handoff to polished delivery`;
  const aboutText = `I am a UI/UX Developer and Frontend Engineer based in Kolkata, currently working at SentientGeeks. I build high-quality responsive interfaces with React, Next.js, WordPress, Shopify, JavaScript, Tailwind CSS, SCSS, Bootstrap, and modern design systems. I can also support basic Angular UI work when a project needs it.

My work spans Figma-to-frontend implementation, PSD-to-HTML conversion, reusable component architecture, REST API integration, WordPress and Shopify customization, SEO-friendly markup, accessibility-aware UI, and inbox-ready email/newsletter HTML.

I enjoy collaborating with designers, backend teams, and stakeholders to turn ideas into clean, cross-browser experiences that are easy to use and reliable in production.`;
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Pixel-perfect, accessible, production-ready"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        icon="lucide:user-round-check"
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-5 pb-16 text-xl font-light tracking-wide sm:px-10 lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="/assets/backgrounds/smriti.jpg"
          alt="Smriti Dey"
          className="object-cover w-md h-[600px] rounded-3xl"
        />
        <div className="flex w-full flex-col gap-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 border border-white/15 px-4 py-3 text-sm uppercase tracking-[0.18rem] text-white/75"
              >
                <Icon icon={item.icon} className="size-5 shrink-0 text-gold" />
                {item.label}
              </div>
            ))}
          </div>
          <AnimatedTextLines text={aboutText} className={"w-full"} />
        </div>
      </div>
    </section>
  );
};

export default About;
