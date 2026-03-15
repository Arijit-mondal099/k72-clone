import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

const Stair = ({ children }: { children?: ReactNode }) => {
  const stairContainerRaf = useRef<HTMLDivElement | null>(null);
  const childrenRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();

  useGSAP(() => {
    gsap.set(".stair", { y: 0, height: "100%" });
    gsap.set(stairContainerRaf.current, { display: "flex" });

    const tl = gsap.timeline();

    tl.from(".stair", {
      height: 0,
      ease: "power1.inOut",
      stagger: { amount: -0.2 },
    });

    tl.to(".stair", {
      y: "100%",
      ease: "power1.inOut",
      stagger: { amount: -0.2 },
    });

    tl.to(stairContainerRaf.current, {
      display: "none",
    });

    gsap.from(childrenRef.current, {
      opacity: 0,
      delay: 1,
      scale: 1.2,
    });
  }, [pathname]);

  return (
    <div>
      <div className="fixed inset-0 z-50" ref={stairContainerRaf}>
        <div className="stair h-full w-1/5 bg-black" />
        <div className="stair h-full w-1/5 bg-black" />
        <div className="stair h-full w-1/5 bg-black" />
        <div className="stair h-full w-1/5 bg-black" />
        <div className="stair h-full w-1/5 bg-black" />
      </div>

      <div ref={childrenRef}>{children}</div>
    </div>
  );
};

export default Stair;
