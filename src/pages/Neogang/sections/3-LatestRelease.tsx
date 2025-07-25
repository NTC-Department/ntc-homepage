import { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "@assets/content/Neogang/sections/3-LatestRelease/image-1.png";
import image2 from "@assets/content/Neogang/sections/3-LatestRelease/image-2.png";
import image3 from "@assets/content/Neogang/sections/3-LatestRelease/image-3.png";
import logo2 from "@assets/content/Neogang/sections/3-LatestRelease/logo-2.png";
import logo3 from "@assets/content/Neogang/sections/3-LatestRelease/logo-3.png";
import logo4 from "@assets/content/Neogang/sections/3-LatestRelease/logo-4.png";
import { movingArrow } from "@classStyle/hover";
import { FaMusic, FaPlay } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const cards = [
  { image: image1, id: 1 },
  { image: image2, id: 2 },
  { image: image3, id: 3 },
];

const LatestReleaseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextCard = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const cardSwipeVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <div className="h-[100svh] w-full relative flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[100%] h-full flex flex-col items-center">
        {/* text: title */}
        <div className="h-[27%] sm:h-[30%] lg:h-[28%] flex md:justify-between justify-center w-full max-w-[100rem] px-5 lg:px-20">
          <div className="mt-auto mb-10 lg:mb-12 h-12 sm:h-16 lg:h-20 flex items-center gap-2 sm:gap-3 lg:gap-4">
            <FaMusic className="w-4 h-4 lg:w-8 lg:h-8 lg:mt-2" />
            <h1 className="text-2xl sm:text-2xl lg:text-[3rem] font-bold">LATEST RELEASE</h1>
          </div>
          <div className="mt-auto w-1/2 sm:block hidden">
            <BackgroundSticker />
          </div>
        </div>

        {/* component: content card with background */}
        <div className="w-full flex-1 relative bg-black/10 flex items-center justify-center py-8 lg:py-10 px-4 lg:px-20">
          <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full">
            <button className="group" onClick={prevCard}>
              <FaArrowLeft className={clsx("w-6 h-6 lg:w-8 lg:h-8", movingArrow)} />
            </button>

            {/* Mobile: Single card with animation */}
            <div className="sm:hidden flex-1 flex justify-center">
              <div className="relative w-full max-w-48">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    initial={cardSwipeVariants.enter(direction)}
                    animate={cardSwipeVariants.center}
                    exit={cardSwipeVariants.exit(direction)}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageCard image={cards[currentIndex].image} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop: All cards */}
            <div className="hidden sm:flex items-center justify-center gap-4 sm:gap-6 lg:gap-16 flex-1">
              <ImageCard image={image1} />
              <ImageCard image={image2} />
              <ImageCard image={image3} />
            </div>

            <button className="group" onClick={nextCard}>
              <FaArrowRight className={clsx("w-6 h-6 lg:w-8 lg:h-8", movingArrow)} />
            </button>
          </div>
        </div>

        {/* component: footer section */}
        <div className="max-w-[100rem] w-full h-[22%] sm:h-[30%] lg:h-[15%] flex flex-col sm:flex-row items-center sm:items-start xl:items-center sm:justify-between gap-2 sm:gap-0 px-5 lg:px-20 pt-6 sm:pt-10 lg:pt-0">
          <h4 className="font-semibold text-sm sm:text-lg lg:text-2xl text-center sm:text-left sm:w-2/5">
            {"HANDS UP - PROJECT"}
          </h4>
          <button className="flex gap-2 lg:gap-3 items-center group">
            <span className="text-base sm:text-lg lg:text-2xl">SHOW MORE</span>
            <FaArrowRight className={clsx("w-4 h-4 lg:w-5 lg:h-5 mt-0.5", movingArrow)} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ image }: { image: string }) => {
  return (
    <div className="w-full max-w-48 sm:max-w-56 lg:max-w-96 relative">
      <img src={image} className="w-full h-48 sm:h-56 lg:h-80 object-cover rounded-t-lg" />

      {/* text: image description */}
      <div className="bg-black text-white z-10 flex rounded-b-lg py-2 sm:py-3 lg:py-4">
        <div className="flex items-center justify-center px-2 sm:px-3 lg:px-4">
          <div className="rounded-full border border-white p-1.5">
            <FaPlay className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
          </div>
        </div>
        <div className="flex-1 pe-2 sm:pe-3 lg:pe-4">
          <h3 className="text-sm sm:text-lg lg:text-[1.2rem] font-semibold">Title</h3>
          <p className="text-xs sm:text-sm lg:text-[0.7rem] line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quaerat quisquam quidem
          </p>
        </div>
      </div>
    </div>
  );
};

const BackgroundSticker = () => {
  return (
    <div className="relative overflow-hidden h-20 lg:h-32 sm:block hidden">
      <div className="absolute bottom-[-3rem] right-60">
        <img src={logo4} className="w-32 h-32 object-cover" />
      </div>
      <div className="absolute bottom-[-1rem] right-36 z-10">
        <img src={logo3} className="w-32 h-32 object-cover" />
      </div>
      <div className="absolute bottom-[-1.5rem] right-12">
        <img src={logo2} className="w-32 h-32 object-cover" />
      </div>
    </div>
  );
};

export default LatestReleaseSection;
