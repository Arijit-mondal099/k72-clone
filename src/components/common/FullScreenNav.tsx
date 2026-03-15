import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useAppContext } from "../../context/app-context";

const navLinks = ["projects", "agence", "contact", "blogue"];

const MarqueeContent = () => (
  <>
    <h2 className="lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase px-6">
      Pour Tout voir
    </h2>
    <img
      className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover mx-4"
      src="/nav/img-1.jpg"
      alt=""
    />
    <h2 className="lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase px-6">
      Pour Tout voir
    </h2>
    <img
      className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover mx-4"
      src="/nav/img-2.jpg"
      alt=""
    />
  </>
);

const FullScreenNav = () => {
  const [currDate, setCurrDate] = useState("");
  const [hovered, setHovered] = useState<number | null>(null);
  const stairContainerRaf = useRef<HTMLDivElement | null>(null);
  const { toggleNavbar, isNavbarOpen } = useAppContext();
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    gsap.set(stairContainerRaf.current, { display: "flex" });

    tl.current = gsap.timeline({ paused: true });

    tl.current
      .from(".stair", {
        height: 0,
        ease: "power1.inOut",
        stagger: { amount: -0.4 },
      })
      .to(".stair", {
        y: "100%",
        ease: "power1.inOut",
        stagger: { amount: -0.4 },
      })
      .from(".closeBtn", { x: 150 })
      .from(".link", { rotateX: 90, stagger: 0.2 })
      .set(stairContainerRaf.current, { display: "none" });

    gsap.from("#full-screen-nav", { opacity: 0, delay: 0.9 });
  });

  useEffect(() => {
    if (!tl.current) return;

    if (isNavbarOpen) {
      gsap.set(stairContainerRaf.current, { display: "flex" });
      tl.current.play();
    } else {
      gsap.set(stairContainerRaf.current, { display: "flex" });
      tl.current.reverse();
    }
  }, [isNavbarOpen]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrDate(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        id="full-screen-nav"
        className="min-h-screen w-full absolute z-99 bg-black overflow-hidden flex flex-col justify-between"
      >
        <div className="flex gap-8 justify-between p-3">
          <div className="flex gap-8">
            <Link to={"/"} className="md:w-36 w-28 md:h-36 h-28 relative z-999">
              <svg
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill={"white"}
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                />
              </svg>
            </Link>

            <div className="flex items-start gap-2 text-gray-600 font-bold">
              <button className="text-white">FR</button>
              <div className="w-px h-4 bg-gray-600 mt-1" />
              <button>EN</button>
            </div>
          </div>

          <div
            className="closeBtn lg:h-32 h-20 w-20 lg:w-32 relative cursor-pointer group"
            onClick={toggleNavbar}
          >
            <div className="lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-white group-hover:bg-[#D3FD50]" />
            <div className="lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-white group-hover:bg-[#D3FD50]" />
          </div>
        </div>

        <nav className="flex flex-col items-center justify-center w-full">
          {navLinks.map((label, i) => (
            <Link
              key={label}
              to={"/"}
              className="w-full relative overflow-hidden block"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <h1
                className={`relative z-10 link origin-top w-full border-b ${i === 0 && "border-t"} border-gray-600 text-white text-center uppercase text-[14vw] md:text-[8vw] leading-[13vw] md:leading-[8vw] font-semibold pointer-events-none`}
              >
                {label}
              </h1>

              <div
                className={`nav-overlay absolute z-10 inset-0 bg-[#D3FD50] flex items-center overflow-hidden ${hovered === i && "is-visible"}`}
              >
                <div className="marquee-track text-black font-[lausanne-500] whitespace-nowrap items-center">
                  <MarqueeContent />
                  <MarqueeContent />
                </div>
              </div>
            </Link>
          ))}
        </nav>

        <div className="text-white flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6 p-2">
          <div className="items-center gap-2 hidden md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <div className="text-xl font-bold">MONTREAL_{currDate}</div>
          </div>

          <div className="flex flex-col md:flex-row uppercase md:items-center gap-1 md:gap-3 text-xs font-semibold">
            <Link to={"/"} className="hover:text-[#D3FD50] transition-colors">
              Politique de confidentialité
            </Link>
            <Link to={"/"} className="hover:text-[#D3FD50] transition-colors">
              Avis de confidentialité
            </Link>
            <Link to={"/"} className="hover:text-[#D3FD50] transition-colors">
              Rapport éthique
            </Link>
            <Link to={"/"} className="hover:text-[#D3FD50] transition-colors">
              Options de consentement
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {["FB", "IG", "IN", "BE"].map((s) => (
              <button
                key={s}
                className="px-3 border-2 border-white rounded-full text-3xl font-bold hover:text-[#D3FD50] hover:border-[#D3FD50]"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        className="min-h-screen w-full fixed inset-0 z-99"
        ref={stairContainerRaf}
      >
        <div className="stair h-full w-1/5 bg-black" />
        <div className="stair h-full w-1/5 bg-black" />
        <div className="stair h-full w-1/5 bg-black" />
        <div className="stair h-full w-1/5 bg-black" />
        <div className="stair h-full w-1/5 bg-black" />
      </div>
    </>
  );
};

export default FullScreenNav;
