import { useState, useEffect } from "react";
import clsx from "clsx";
import background1 from "@assets/content/NTC/sections/1-Home/background-1.png";
import background2 from "@assets/content/NTC/sections/1-Home/background-2.png";
import background3 from "@assets/content/NTC/sections/1-Home/background-3.png";
import cardImage from "@assets/content/NTC/sections/1-Home/card-image.png";
import { movingArrow } from "@classStyle/hover";
import { FaArrowRight } from "react-icons/fa";

const backgrounds = [background1, background2, background3];

const HomeSection = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const sequence = async () => {
      while (isMounted) {
        for (let i = 0; i < backgrounds.length; i++) {
          if (!isMounted) return;
          setCurrentBackground(i);
          await new Promise((resolve) => setTimeout(resolve, 70));
        }
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    };

    sequence();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div
      className="h-[100svh] w-full relative flex items-center justify-center bg-black px-4"
      style={{
        backgroundImage: `url(${backgrounds[currentBackground]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 50ms ease-in-out",
      }}
    >
      {/* component: content carousel card */}
      <div className="w-full max-w-[100rem] backdrop-blur-lg rounded-3xl shadow-xl relative p-2 sm:p-4 text-white mt-8 sm:mt-16">
        <div className="grid grid-rows-[1fr_auto] lg:grid-cols-5 h-full">
          {/* text: image description */}
          <div className="lg:col-span-2 bg-black flex flex-col pt-8 sm:pt-20 lg:pt-40 px-4 sm:px-8 lg:ps-18 lg:pe-4 rounded-t-3xl lg:rounded-tl-3xl lg:rounded-tr-none">
            <h1 className="text-3xl sm:text-5xl lg:text-[4rem] h-auto lg:h-20 font-schabo-condensed leading-tight">
              NEOGANG
            </h1>
            <div className="text-sm sm:text-base lg:text-lg mt-6 sm:mt-8 lg:mt-12 h-auto lg:h-[10rem] font-helvetica-neue-roman">
              <p className="mb-4">
                Pushing Creativity Boundaries through Innovative Music and Visual! we commit to push the limits, blend
                any genres, break any barriers, and inspire others.
              </p>
              <p>
                Neogang / Neoteric HQ are Creative Team <br className="hidden sm:block" />
                based in Indonesia.
              </p>
            </div>
            <div className="h-12 sm:h-14 mt-8 sm:mt-16 lg:mt-28 mb-6 lg:mb-0">
              <button className="border h-full w-full sm:w-[18.5rem] rounded-2xl flex items-center justify-center gap-2 group bg-white text-black">
                <span className="font-helvetica-neue-medium text-lg sm:text-xl lg:text-[1.65rem]">Learn More</span>
                <FaArrowRight className={clsx("w-4 h-4 sm:w-5 sm:h-5 mt-0.5", movingArrow)} />
              </button>
            </div>
          </div>

          {/* image: carousel */}
          <div className="lg:col-span-3 relative overflow-hidden h-64 sm:h-80 lg:h-auto">
            <img
              className="w-full h-full object-cover rounded-tr-3xl lg:rounded-tr-3xl rounded-tl-3xl lg:rounded-tl-none"
              src={cardImage}
            />

            {/* style: black gradient that mask images (left) */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-l from-transparent to-black/80" />
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-l from-transparent to-black/50" />

            {/* style: black gradient that mask images (bottom) */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent" />

            <div className="absolute bottom-4 sm:bottom-8 lg:bottom-20 right-4 sm:right-8 lg:right-16 w-24 sm:w-32 lg:w-[8.5rem] h-8 sm:h-9 lg:h-[2.3rem] flex border gap-1 justify-center items-center">
              <div className="border rounded-full w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              <div className="border rounded-full w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-white" />
              <div className="border rounded-full w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              <div className="border rounded-full w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            </div>
          </div>

          {/* style: bottom black bar */}
          <div className="lg:col-span-5 bg-black h-12 sm:h-16 rounded-b-3xl" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
