import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";
import { Icon } from "@iconify/react";

const Contact = () => {
  const text = `Open to UI/UX developer and frontend roles
    across hybrid, remote, and full-time teams.`;
  const items = [
    "design to frontend",
    "react and angular",
    "responsive UI",
    "email HTML",
    "design to frontend",
  ];

  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"Kolkata | Immediate availability"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          icon="lucide:send"
          withScrollTrigger={true}
        />
        <div className="flex px-5 font-light text-white uppercase sm:px-10 lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2 className="flex items-center gap-3">
                <Icon icon="lucide:mail" className="size-7 text-gold" />
                E-mail
              </h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <a
                href="mailto:smritidey998@gmail.com"
                className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl hover:text-white/80 transition-colors duration-200"
              >
                smritidey998@gmail.com
              </a>
            </div>
            <div className="social-link">
              <h2 className="flex items-center gap-3">
                <Icon icon="lucide:phone" className="size-7 text-gold" />
                Phone
              </h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <a
                href="tel:+916289750400"
                className="text-xl lowercase md:text-2xl lg:text-3xl hover:text-white/80 transition-colors duration-200"
              >
                +91 6289750400
              </a>
            </div>
            <div className="social-link">
              <h2 className="flex items-center gap-3">
                <Icon icon="lucide:map-pin" className="size-7 text-gold" />
                Location
              </h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl md:text-2xl lg:text-3xl">
                Kolkata, West Bengal
              </p>
            </div>
            <div className="social-link">
              <h2 className="flex items-center gap-3">
                <Icon icon="lucide:share-2" className="size-7 text-gold" />
                Social Media
              </h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex items-center gap-2 text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    <Icon icon={social.icon} className="size-4 text-gold" />
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
};

export default Contact;
