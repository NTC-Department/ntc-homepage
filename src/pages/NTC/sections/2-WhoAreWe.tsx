import { useEffect, useState } from "react";
import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";
import nindy1 from "@assets/content/NTC/sections/2-WhoAreWe/nindy-1.jpg";
import nindy2 from "@assets/content/NTC/sections/2-WhoAreWe/nindy-2.jpg";
import nindy3 from "@assets/content/NTC/sections/2-WhoAreWe/nindy-3.jpg";
import nindy4 from "@assets/content/NTC/sections/2-WhoAreWe/nindy-4.jpg";
import nindy5 from "@assets/content/NTC/sections/2-WhoAreWe/nindy-5.jpg";
import { movingArrow } from "@classStyle/hover";
import { FaArrowRight } from "react-icons/fa";
import NTCLogo from "@public/images/NTCLogo.png";

const WhoAreWeSection = () => {
  const imagesA = [nindy1, nindy2, nindy3, nindy4, nindy5];
  const imagesB = [nindy3, nindy4, nindy5, nindy2, nindy1];

  const imageListLeft = [...imagesA, ...imagesA, ...imagesA];

  const imageListRight = [...imagesB, ...imagesB, ...imagesB];

  const animationFrameLeft = [
    {
      initial: { y: "-7%" },
      animate: { y: "-62%" },
      duration: 1.2,
      ease: [0, 0, 0.6, 1.2],
      delay: 0,
    },
    {
      initial: { y: "-62%" },
      animate: { y: "-76%" },
      duration: 1.2,
      ease: [0, 0, 0.6, 1.2],
      delay: 3,
    },
    {
      initial: { y: "-76%" },
      animate: { y: "-37%" },
      duration: 1.2,
      ease: [0, 0, 0.6, 1.2],
      delay: 3,
    },
    {
      initial: { y: "-37%" },
      animate: { y: "-7%" },
      duration: 1.2,
      ease: [0, 0, 0.6, 1.2],
      delay: 3,
    },
  ];

  const animationFrameRight = [
    {
      initial: { y: "-10%" },
      animate: { y: "-40%" },
      duration: 1.2,
      ease: [0, 0, 0.6, 1.2],
      delay: 0,
    },
    {
      initial: { y: "-40%" },
      animate: { y: "-20%" },
      duration: 1.2,
      ease: [0, 0, 0.6, 1.2],
      delay: 3,
    },
    {
      initial: { y: "-20%" },
      animate: { y: "-74%" },
      duration: 1.2,
      ease: [0, 0, 0.6, 1.2],
      delay: 3,
    },
    {
      initial: { y: "-74%" },
      animate: { y: "-10%" },
      duration: 1.2,
      ease: [0, 0, 0.6, 1.2],
      delay: 3,
    },
  ];

  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[100rem] flex gap-5 justify-center">
        {/* component: who are we */}
        <div className="w-full max-w-[50rem] h-[45rem] my-auto flex grow flex-col ps-4">
          <div className="h-18 w-60 mt-10">
            <img className="m-auto" src={NTCLogo} alt="Logo NTC" />
          </div>
          <h1 className="text-[4rem] mt-24 h-20 w-fit font-schabo-condensed">
            WHO ARE WE?
          </h1>
          <div className="font-helvetica-neue-roman">
            <p className="mt-14 h-28 line-clamp-4 max-w-[30rem]">
              Create, Inspire, Innovate. NTC Deparment is a dynamic creative
              community specializing in gaming, and pop culture content with a
              talented team of designers, editors, and creators, we bring ideas
              to life through visuals.
            </p>
          </div>
          <div className="mt-[7.5rem] h-16 w-62">
            <button className="h-full border w-full rounded-2xl flex items-center justify-center gap-2 group">
              <span className="font-helvetica-neue-medium text-[1.65rem]">
                About Us
              </span>
              <FaArrowRight className={clsx("w-5 h-5 mt-0.5", movingArrow)} />
            </button>
          </div>
        </div>
        {/* image: showcase 8 grid */}
        <div className="w-[40rem] relative flex justify-between">
          <ImageList
            key={1}
            images={imageListLeft}
            frameAnimation={animationFrameLeft}
          />
          <ImageList
            key={2}
            images={imageListRight}
            frameAnimation={animationFrameRight}
          />
        </div>
      </div>
    </div>
  );
};

const ImageList = ({
  images,
  frameAnimation,
}: {
  images: string[];
  frameAnimation: FrameAnimation[];
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

      const percentage = Number(
        frameAnimation[0].initial.y.slice(0, -1).slice(1)
      );
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
  }, []);

  return (
    <div className={clsx("relative w-[18rem]")}>
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
              alt={`Nindy ${index + 1}`}
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
  ease: number[];
  delay: number;
};

export default WhoAreWeSection;
