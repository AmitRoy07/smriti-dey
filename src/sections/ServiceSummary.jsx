import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const SummaryWord = ({ icon, children, className = "" }) => (
  <span
    className={`inline-flex items-center gap-5 whitespace-nowrap leading-none ${className}`}
  >
    <Icon
      icon={icon}
      className="size-[0.48em] min-h-8 min-w-8 shrink-0 text-gold"
    />
    <span>{children}</span>
  </span>
);

const ServiceSummary = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        target: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        target: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 100,
      scrollTrigger: {
        target: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -100,
      scrollTrigger: {
        target: "#title-service-4",
        scrub: true,
      },
    });
  });

  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">
      <div id="title-service-1">
        <p>
          <SummaryWord icon="lucide:atom">React</SummaryWord>
        </p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p>
          <SummaryWord icon="lucide:panel-top" className="font-normal">
            WordPress
          </SummaryWord>
        </p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>
          <SummaryWord icon="lucide:shopping-bag">Shopify</SummaryWord>
        </p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-48"
      >
        <p>
          <SummaryWord icon="lucide:figma">Figma</SummaryWord>
        </p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>
          <SummaryWord icon="lucide:pen-tool" className="italic">
            UI/UX
          </SummaryWord>
        </p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>
          <SummaryWord icon="lucide:panel-top">CMS</SummaryWord>
        </p>
      </div>
      <div id="title-service-4" className="translate-x-48">
        <p>
          <SummaryWord icon="lucide:monitor-smartphone">
            Responsive Design
          </SummaryWord>
        </p>
      </div>
    </section>
  );
};

export default ServiceSummary;
