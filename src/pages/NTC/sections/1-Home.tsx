import { useState, useEffect } from "react";
import cardImage from "@assets/content/NTC/sections/1-Home/card-image.png";
import background1 from "@assets/content/NTC/sections/1-Home/background-1.png";
import background2 from "@assets/content/NTC/sections/1-Home/background-2.png";
import background3 from "@assets/content/NTC/sections/1-Home/background-3.png";
import { FaArrowRight } from "react-icons/fa";
import clsx from "clsx";
import { movingArrow } from "@classStyle/hover";

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
      className="h-screen w-full relative flex items-center justify-center bg-black"
      style={{
        backgroundImage: `url(${backgrounds[currentBackground]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 50ms ease-in-out",
      }}
    >
      {/* component: content carousel card */}
      <div className="w-full max-w-[100rem] backdrop-blur-lg rounded-3xl shadow-xl relative p-4 text-white mt-16">
        <div className="grid grid-rows-[1fr_auto] grid-cols-5 h-full">
          {/* text: image description */}
          <div className="col-span-2 bg-black flex flex-col pt-40 ps-18 pe-4 rounded-tl-3xl">
            <h1 className="text-[4rem] h-20 font-schabo-condensed">NEOGANG</h1>
            <div className="text-lg mt-12 h-[10rem] font-helvetica-neue-roman">
              <p>
                Pushing Creativity Boundaries through Innovative Music and
                Visual! we commit to push the limits, blend any genres, break
                any barriers, and inspire others.
              </p>
              <br />
              <p>
                Neogang / Neoteric HQ are Creative Team <br />
                based in Indonesia.
              </p>
            </div>
            <div className="h-14 mt-28">
              <button className="border h-full w-[18.5rem] rounded-2xl flex items-center justify-center gap-2 group bg-white text-black cursor-pointer">
                <span className="font-helvetica-neue-medium text-[1.65rem]">
                  Learn More
                </span>
                <FaArrowRight className={clsx("w-5 h-5 mt-0.5", movingArrow)} />
              </button>
            </div>
          </div>

          {/* image: carousel */}
          <div className="col-span-3 relative overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-tr-3xl"
              src={cardImage}
            />

            {/* style: black gradient that mask images (left) */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-l from-transparent to-black/80" />
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-l from-transparent to-black/50" />

            {/* style: black gradient that mask images (bottom) */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent" />

            <div className="absolute bottom-20 right-16 w-[8.5rem] h-[2.3rem] flex border gap-1 justify-center items-center">
              <div className="border rounded-full w-8 h-8 " />
              <div className="border rounded-full w-8 h-8 bg-white" />
              <div className="border rounded-full w-8 h-8" />
              <div className="border rounded-full w-8 h-8" />
            </div>
          </div>

          {/* style: bottom black bar */}
          <div className="col-span-5 bg-black h-16 rounded-b-3xl" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
