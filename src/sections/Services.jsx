import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

const Services = () => {
  const text = `I turn designs into production-ready frontends
    with responsive layouts, clean components,
    and user experiences that perform.`;
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" });

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);

  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <div className="sticky top-0 z-20 bg-black rounded-t-4xl">
        <AnimatedHeaderSection
          subTitle={"Design precision, frontend discipline"}
          title={"Services"}
          text={text}
          textColor={"text-white"}
          icon="lucide:wand-sparkles"
          withScrollTrigger={true}
        />
      </div>
      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={service.title}
          className="sticky z-30 px-5 pt-6 pb-12 text-white bg-black border-t-2 border-white/30 sm:px-10"
          style={
            isDesktop
              ? {
                  top: `calc(22vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="flex items-center gap-4 text-4xl lg:text-5xl">
                <span className="grid rounded-full size-14 place-items-center bg-white/10 text-gold">
                  <Icon icon={service.icon} className="size-7" />
                </span>
                {service.title}
              </h2>
              <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex items-center">
                      <span className="mr-12 text-lg text-white/30">
                        0{itemIndex + 1}
                      </span>
                      <Icon
                        icon={item.icon}
                        className="mr-4 size-7 shrink-0 text-gold"
                      />
                      {item.title}
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
