import { useEffect, useState } from "react";
import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";
import image1 from "@assets/content/NEOGANG/sections/2-WhoAreWe/image-1.png";
import image2 from "@assets/content/NEOGANG/sections/2-WhoAreWe/image-2.png";
import image3 from "@assets/content/NEOGANG/sections/2-WhoAreWe/image-3.png";
import image4 from "@assets/content/NEOGANG/sections/2-WhoAreWe/image-4.png";
import image5 from "@assets/content/NEOGANG/sections/2-WhoAreWe/image-5.png";
import { movingArrow } from "@classStyle/hover";
import useWindowSize from "@hooks/useWindowSize";
import { FaArrowRight } from "react-icons/fa";
import NeogangLogo from "@public/images/NeogangLogo.png";

const WhoAreWeSection = () => {
  const { isMobile } = useWindowSize();

  const imagesA = [image1, image2, image3, image4, image5];
  const imagesB = [image3, image4, image5, image2, image1];

  const imageListLeft = [...imagesA, ...imagesA, ...imagesA];
  const imageListRight = [...imagesB, ...imagesB, ...imagesB];

  // Responsive animation frames - different values for mobile vs desktop
  const getAnimationFrames = (isMobile: boolean) => {
    const leftFrames = [
      {
        initial: { y: isMobile ? "-10%" : "-7%" },
        animate: { y: isMobile ? "-65%" : "-62%" },
        duration: 1.2,
        ease: [0, 0, 0.6, 1.2] as const,
        delay: 0,
      },
      {
        initial: { y: isMobile ? "-65%" : "-62%" },
        animate: { y: isMobile ? "-78%" : "-76%" },
        duration: 1.2,
        ease: [0, 0, 0.6, 1.2] as const,
        delay: 3,
      },
      {
        initial: { y: isMobile ? "-78%" : "-76%" },
        animate: { y: isMobile ? "-40%" : "-37%" },
        duration: 1.2,
        ease: [0, 0, 0.6, 1.2] as const,
        delay: 3,
      },
      {
        initial: { y: isMobile ? "-40%" : "-37%" },
        animate: { y: isMobile ? "-10%" : "-7%" },
        duration: 1.2,
        ease: [0, 0, 0.6, 1.2] as const,
        delay: 3,
      },
    ];

    const rightFrames = [
      {
        initial: { y: isMobile ? "-12%" : "-10%" },
        animate: { y: isMobile ? "-42%" : "-40%" },
        duration: 1.2,
        ease: [0, 0, 0.6, 1.2] as const,
        delay: 0,
      },
      {
        initial: { y: isMobile ? "-42%" : "-40%" },
        animate: { y: isMobile ? "-22%" : "-20%" },
        duration: 1.2,
        ease: [0, 0, 0.6, 1.2] as const,
        delay: 3,
      },
      {
        initial: { y: isMobile ? "-22%" : "-20%" },
        animate: { y: isMobile ? "-76%" : "-74%" },
        duration: 1.2,
        ease: [0, 0, 0.6, 1.2] as const,
        delay: 3,
      },
      {
        initial: { y: isMobile ? "-76%" : "-74%" },
        animate: { y: isMobile ? "-12%" : "-10%" },
        duration: 1.2,
        ease: [0, 0, 0.6, 1.2] as const,
        delay: 3,
      },
    ];

    return { leftFrames, rightFrames };
  };

  const { leftFrames, rightFrames } = getAnimationFrames(isMobile);

  return (
    <div className="h-[100svh] w-full relative flex items-center justify-center overflow-hidden">
      {/* Desktop Layout - Original Structure */}
      <div className="hidden lg:flex w-full max-w-[100rem] gap-5 justify-center items-start">
        {/* Desktop Content */}
        <div className="w-full max-w-[50rem] h-[45rem] my-auto flex flex-col ps-4 text-left">
          <div className="h-12 sm:h-16 lg:h-18 w-48 sm:w-56 lg:w-60 mt-4 sm:mt-6 lg:mt-10">
            <img className="h-full w-auto" src={NeogangLogo} alt="Logo Neogang" />
          </div>
          <h1 className="text-[4rem] mt-24 h-20 w-fit font-schabo-condensed">WHO ARE WE?</h1>
          <div className="font-helvetica-neue-roman mt-14 h-28 flex flex-col gap-4">
            <p className="line-clamp-4 max-w-[30rem] text-base">
              Pushing Creativity Boundaries through Innovative Music and Visual! we commit to push the limits, blend any
              genres, break any barriers, and inspire others.
            </p>
            <p className="line-clamp-4 max-w-[30rem] text-base">
              Neogang/ Neoteric HQ are Music Collective based in Indonesia.
            </p>
          </div>
          <div className="mt-[7.5rem] h-16 w-62">
            <button className="h-full border w-full rounded-2xl flex items-center justify-center gap-2 group">
              <span className="font-helvetica-neue-medium text-[1.65rem]">About Us</span>
              <FaArrowRight className={clsx("w-5 h-5 mt-0.5", movingArrow)} />
            </button>
          </div>
        </div>

        {/* Desktop Image Gallery */}
        <div className="w-[40rem] relative flex justify-between gap-4">
          <ImageList images={imageListLeft} frameAnimation={leftFrames} isMobile={false} />
          <ImageList images={imageListRight} frameAnimation={rightFrames} isMobile={false} />
        </div>
      </div>

      {/* Mobile Layout - Images as Background with Overlay Content */}
      <div className="lg:hidden w-full h-full relative">
        {/* Background Images */}
        <div className="absolute inset-0 flex justify-center items-center gap-2 sm:gap-4">
          <ImageList images={imageListLeft} frameAnimation={leftFrames} isMobile={true} />
          <ImageList images={imageListRight} frameAnimation={rightFrames} isMobile={true} />
        </div>

        {/* Overlay Content with Glassmorphism */}
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 shadow-xl text-center max-w-md w-full">
            {/* Logo */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <img className="h-12 sm:h-16 w-auto" src={NeogangLogo} alt="Logo NTC" />
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-schabo-condensed leading-tight mb-6 sm:mb-8">WHO ARE WE?</h1>

            {/* Description */}
            <div className="font-helvetica-neue-roman mb-8 sm:mb-10">
              <p className="text-sm sm:text-base leading-relaxed">
                Create, Inspire, Innovate. NTC Department is a dynamic creative community specializing in gaming, and
                pop culture content with a talented team of designers, editors, and creators, we bring ideas to life
                through visuals.
              </p>
            </div>

            {/* Button */}
            <button className="h-12 sm:h-14 w-full border rounded-2xl flex items-center justify-center gap-2 group hover:bg-white hover:text-black transition-colors duration-300">
              <span className="font-helvetica-neue-medium text-lg sm:text-xl">About Us</span>
              <FaArrowRight className={clsx("w-4 h-4 sm:w-5 sm:h-5 mt-0.5", movingArrow)} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageList = ({
  images,
  frameAnimation,
  isMobile,
}: {
  images: string[];
  frameAnimation: FrameAnimation[];
  isMobile: boolean;
}) => {
  const controls = useAnimation();
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const runAnimation = async () => {
    while (true) {
      for (const frame of frameAnimation) {
        const percentage = Number(frame.initial.y.slice(0, -1).slice(1));
        const imageIndex = Math.floor((percentage / 100) * images.length);
        setHighlightIndex(imageIndex + 1);

        await controls.start({
          y: frame.animate.y,
          transition: {
            duration: frame.duration,
            ease: frame.ease,
            delay: frame.delay,
          },
        });
      }

      const percentage = Number(frameAnimation[0].initial.y.slice(0, -1).slice(1));
      const imageIndex = Math.floor((percentage / 100) * images.length);
      setHighlightIndex(imageIndex + 1);

      await new Promise((resolve) => setTimeout(resolve, 3000));
      await controls.start({
        y: frameAnimation[0].initial.y,
        transition: { duration: 0 },
      });
    }
  };

  useEffect(() => {
    runAnimation();
  }, [frameAnimation]);

  if (isMobile) {
    // Mobile: Smaller images as background
    return (
      <div className="relative w-28 sm:w-32 opacity-50">
        <motion.div
          animate={controls}
          className="flex flex-col gap-1 sm:gap-2 absolute"
          initial={{ y: frameAnimation[0].initial.y }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className={clsx(
                "w-full bg-transparent flex items-center justify-center transition-opacity",
                index === highlightIndex ? "opacity-100" : "opacity-40 blur-[1px]"
              )}
            >
              <img
                src={img}
                className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-lg"
                alt={`Character ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
  }

  // Desktop: Original full-size layout
  return (
    <div className="relative w-[18rem]">
      <motion.div animate={controls} className="flex flex-col gap-4 absolute">
        {images.map((img, index) => (
          <div
            key={index}
            className={clsx(
              "w-full h-fit bg-transparent flex items-center justify-center transition-opacity",
              index === highlightIndex ? "opacity-100" : "opacity-40 blur-[1px]"
            )}
          >
            <img
              src={img}
              className="max-w-[18rem] max-h-[18rem] object-cover rounded-xl"
              alt={`Character ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

type FrameAnimation = {
  initial: { y: string };
  animate: { y: string };
  duration: number;
  ease: readonly number[];
  delay: number;
};

export default WhoAreWeSection;
