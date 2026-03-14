import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Agence = () => {
  const imageDivRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const images = [
    "/agence/agence-hero-1.jpg",
    "/agence/agence-hero-2.jpg",
    "/agence/agence-hero-3.jpg",
    "/agence/agence-hero-4.jpg",
    "/agence/agence-hero-5.jpg",
    "/agence/agence-hero-6.jpg",
    "/agence/agence-hero-7.jpg",
    "/agence/agence-hero-8.jpg",
    "/agence/agence-hero-9.jpg",
    "/agence/agence-hero-10.jpg",
    "/agence/agence-hero-11.jpg",
    "/agence/agence-hero-12.jpg",
    "/agence/agence-hero-13.jpg",
    "/agence/agence-hero-14.jpg",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 30%",
        end: "top -80%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        anticipatePin: 1,
        invalidateOnRefresh: true,
        scrub: 1,
        onUpdate: (self) => {
          const imgIdx = Math.min(
            Math.floor(self.progress * images.length),
            images.length - 1,
          );
          if (imageRef.current) imageRef.current.src = images[imgIdx];
        },
      },
    });
  });

  return (
    <section className="agence">
      <div id="agence-section-one" className="py-1">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden md:h-96 h-80 max-w-xs w-full lg:top-96 -top-80 md:left-[30vw] rounded-2xl"
        >
          <img
            ref={imageRef}
            className="h-full object-cover w-full"
            src="/agence/agence-hero-1.jpg"
            alt="agence-hero-image"
          />
        </div>

        <div className="relative font-[lausanne-500]">
          <div className="md:mt-[55vh] mt-[30vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              Soixan7e <br /> Douze
            </h1>
          </div>

          <div className="flex justify-end p-2 font-[lausanne-300]">
            <p className="md:text-6xl text-xl leading-tight tracking-tight md:max-w-2/3">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C'est pour ça qu'on s'engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div id="page2" className=" h-screen"></div>
    </section>
  );
};

export default Agence;
