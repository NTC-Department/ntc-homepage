import { useEffect, useState } from "react";
import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";
import nindy1 from "@assets/content/NTC/sections/2-WhoAreWe/nindy-1.jpg";
import nindy2 from "@assets/content/NTC/sections/2-WhoAreWe/nindy-2.jpg";
import nindy3 from "@assets/content/NTC/sections/2-WhoAreWe/nindy-3.jpg";
import nindy4 from "@assets/content/NTC/sections/2-WhoAreWe/nindy-4.jpg";
import nindy5 from "@assets/content/NTC/sections/2-WhoAreWe/nindy-5.jpg";
import { movingArrow } from "@classStyle/hover";
import useWindowSize from "@hooks/useWindowSize";
import { FaArrowRight } from "react-icons/fa";
import NTCLogo from "@public/images/NTCLogo.png";

const WhoAreWeSection = () => {
  const { isMobile } = useWindowSize();

  const imagesA = [nindy1, nindy2, nindy3, nindy4, nindy5];
  const imagesB = [nindy3, nindy4, nindy5, nindy2, nindy1];

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

  const desktopContent = () => (
    <div className="hidden lg:flex w-full max-w-[100rem] gap-5 justify-center items-start">
      {/* desktop Content */}
      <div className="w-full max-w-[50rem] h-[62vh] my-auto grid grid-rows-[auto_0.40fr_auto_0.15fr_auto_0.45fr_auto] ps-4 text-left ">
        <div className="h-12 lg:-16 xl:h-18">
          <img className="h-full w-auto max-h-16" src={NTCLogo} alt="Logo NTC" />
        </div>
        <div />
        <h1 className="xl:text-7xl text-5xl w-fit font-schabo-condensed">WHO ARE WE?</h1>
        <div />
        <div className="font-helvetica-neue-roman max-w-[30rem]">
          <p className="xl:text-base text-sm">
            Create, Inspire, Innovate. NTC Department is a dynamic creative community specializing in gaming and pop
            culture content. With a talented team of designers, editors, and creators, we bring ideas to life through
            visuals.
          </p>
        </div>
        <div />
        <div className="xl:h-16 xl:w-62 h-12 w-50">
          <button className="h-full w-full border rounded-2xl flex items-center justify-center gap-2 group">
            <span className="font-helvetica-neue-medium xl:text-2xl text-xl">About Us</span>
            <FaArrowRight className={clsx("w-5 h-5 mt-0.5", movingArrow)} />
          </button>
        </div>
      </div>

      {/* component: right side images */}
      <div className="w-[40rem] relative flex justify-between gap-4">
        <ImageList images={imageListLeft} frameAnimation={leftFrames} isMobile={false} />
        <ImageList images={imageListRight} frameAnimation={rightFrames} isMobile={false} />
      </div>
    </div>
  );

  const mobileContent = () => (
    <div className="lg:hidden w-full h-full relative">
      {/* component: background images */}
      <div className="absolute inset-0 flex justify-center items-center gap-2 sm:gap-4">
        <ImageList images={imageListLeft} frameAnimation={leftFrames} isMobile={true} />
        <ImageList images={imageListRight} frameAnimation={rightFrames} isMobile={true} />
      </div>

      {/* container: glassmorphism effect */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 shadow-xl text-center max-w-md w-full">
          <div className="flex justify-center mb-6 sm:mb-8">
            <img className="h-12 sm:h-16 w-auto" src={NTCLogo} alt="Logo NTC" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-schabo-condensed leading-tight mb-6 sm:mb-8">WHO ARE WE?</h1>

          <div className="font-helvetica-neue-roman mb-8 sm:mb-10">
            <p className="text-sm sm:text-base leading-relaxed">
              Create, Inspire, Innovate. NTC Department is a dynamic creative community specializing in gaming, and pop
              culture content with a talented team of designers, editors, and creators, we bring ideas to life through
              visuals.
            </p>
          </div>

          <button className="h-12 sm:h-14 w-full border rounded-2xl flex items-center justify-center gap-2 group hover:bg-white hover:text-black transition-colors duration-300">
            <span className="font-helvetica-neue-medium text-lg sm:text-xl">About Us</span>
            <FaArrowRight className={clsx("w-4 h-4 sm:w-5 sm:h-5 mt-0.5", movingArrow)} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-[100svh] w-full lg:max-w-screen relative flex items-center justify-center overflow-hidden">
      {/* Desktop Layout */}
      {desktopContent()}

      {/* Mobile Layout */}
      {mobileContent()}
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
    <div className="relative w-[12rem] lg:w-[14rem] xl:w-[18rem]">
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
              className="max-w-[12rem] max-h-[12rem] lg:max-w-[14rem] lg:max-h-[14rem] xl:max-w-[18rem] xl:max-h-[18rem] object-cover rounded-xl"
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
