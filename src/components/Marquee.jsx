import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from "gsap";
import { Observer } from "gsap/all";
import { useEffect, useMemo, useRef } from "react";

gsap.registerPlugin(Observer);

const Marquee = ({
  items = [],
  className = "text-white bg-black",
  icon = "mdi:star-four-points",
  iconClassName = "",
  reverse = false,
  scrollReactive = true,
}) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const itemsRef = useRef([]);
  const loopRef = useRef(null);
  const observerRef = useRef(null);
  const resizeObserverRef = useRef(null);

  const repeatedItems = useMemo(() => {
    // Duplicate items to prevent overlap on desktop/mobile when content width is small
    return [...items, ...items, ...items, ...items];
  }, [items]);

  function horizontalLoop(elements, config = {}) {
    elements = gsap.utils.toArray(elements);

    if (!elements.length) return null;

    const tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => {
        tl.totalTime(tl.rawTime() + tl.duration() * 100);
      },
    });

    const length = elements.length;
    const startX = elements[0].offsetLeft;
    const times = [];
    const widths = [];
    const xPercents = [];

    let curIndex = 0;
    const pixelsPerSecond = (config.speed || 1) * 100;
    const snap =
      config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1);

    gsap.set(elements, {
      xPercent: (i, el) => {
        const width = (widths[i] = parseFloat(
          gsap.getProperty(el, "width", "px")
        ));

        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px")) / width) * 100 +
            gsap.getProperty(el, "xPercent")
        );

        return xPercents[i];
      },
    });

    gsap.set(elements, { x: 0 });

    const totalWidth =
      elements[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      elements[length - 1].offsetWidth *
        gsap.getProperty(elements[length - 1], "scaleX") +
      (parseFloat(config.paddingRight) || 0);

    for (let i = 0; i < length; i++) {
      const item = elements[i];
      const curX = (xPercents[i] / 100) * widths[i];
      const distanceToStart = item.offsetLeft + curX - startX;
      const distanceToLoop =
        distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");

      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0
      ).fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      );

      times[i] = distanceToStart / pixelsPerSecond;
    }

    function toIndex(index, vars = {}) {
      if (Math.abs(index - curIndex) > length / 2) {
        index += index > curIndex ? -length : length;
      }

      const newIndex = gsap.utils.wrap(0, length, index);
      let time = times[newIndex];

      if (time > tl.time() !== index > curIndex) {
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }

      curIndex = newIndex;
      vars.overwrite = true;

      return tl.tweenTo(time, vars);
    }

    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;

    tl.progress(1, true).progress(0, true);

    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }

    return tl;
  }

  useEffect(() => {
    const container = containerRef.current;

    if (!container || !itemsRef.current.length) return;

    const cleanup = () => {
      observerRef.current?.kill?.();
      loopRef.current?.kill?.();

      observerRef.current = null;
      loopRef.current = null;

      const validItems = itemsRef.current.filter(Boolean);
      if (validItems.length) {
        gsap.killTweensOf(validItems);
        gsap.set(validItems, { clearProps: "x,xPercent" });
      }
    };

    const init = () => {
      cleanup();

      const validItems = itemsRef.current.filter(Boolean);

      if (!validItems.length) return;

      loopRef.current = horizontalLoop(validItems, {
        repeat: -1,
        paddingRight: 40,
        reversed: reverse,
        speed: 0.8,
      });

      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      // Important: only use wheel on desktop.
      // Do not observe touch/pointer, otherwise mobile scroll can break.
      if (scrollReactive && !isMobile && loopRef.current) {
        observerRef.current = Observer.create({
          target: window,
          type: "wheel",
          preventDefault: false,
          onChangeY(self) {
            let factor = 2.5;

            if ((!reverse && self.deltaY < 0) || (reverse && self.deltaY > 0)) {
              factor *= -1;
            }

            gsap
              .timeline({ defaults: { ease: "none" } })
              .to(loopRef.current, {
                timeScale: factor * 2.5,
                duration: 0.2,
                overwrite: true,
              })
              .to(
                loopRef.current,
                {
                  timeScale: factor / 2.5,
                  duration: 1,
                },
                "+=0.3"
              );
          },
        });
      }
    };

    const timer = requestAnimationFrame(init);

    resizeObserverRef.current = new ResizeObserver(() => {
      init();
    });

    resizeObserverRef.current.observe(container);

    return () => {
      cancelAnimationFrame(timer);
      resizeObserverRef.current?.disconnect();
      cleanup();
    };
  }, [repeatedItems, reverse, scrollReactive]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase ${className}`}
    >
      <div
        ref={trackRef}
        className="flex w-max min-w-max items-center whitespace-nowrap will-change-transform"
      >
        {repeatedItems.map((text, index) => (
          <span
            key={`${text}-${index}`}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className="flex shrink-0 items-center gap-x-5 px-6 leading-none sm:gap-x-10 sm:px-14 lg:px-18"
          >
            <Icon
              icon={icon}
              className={`size-[0.72em] shrink-0 ${iconClassName}`}
            />
            <span className="shrink-0">{text}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;