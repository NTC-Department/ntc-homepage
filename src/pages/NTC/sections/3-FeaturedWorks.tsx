import clsx from "clsx";
import placeholderImage from "@assets/content/placeholder.jpg";
import { movingArrow } from "@classStyle/hover";
import { FaImage } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const FeaturedWorksSection = () => {
  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[100%] h-full flex flex-col border items-center">
        {/* text: title */}
        <div className="h-[27%] sm:h-[30%] lg:h-[28%] flex">
          <div className="mx-auto mt-auto mb-6 sm:mb-8 lg:mb-12 h-12 sm:h-16 lg:h-20 w-full max-w-[36rem] flex items-center gap-2 sm:gap-3 lg:gap-4 justify-center">
            <FaImage className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12" />
            <h1 className="text-xl sm:text-2xl lg:text-[3rem] font-bold">FEATURED WORKS</h1>
          </div>
        </div>

        {/* component: content card with background */}
        <div className="w-full flex-1 relative bg-black/10 flex items-center justify-center py-8 lg:py-10 px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <ImageCard />
            <ImageCard />
          </div>
        </div>

        {/* component: footer section */}
        <div className="max-w-[100rem] w-full h-[22%] sm:h-[30%] lg:h-[15%] flex flex-col sm:flex-row items-center sm:items-start xl:items-center sm:justify-between gap-4 sm:gap-0 px-5 lg:px-0 pt-8 sm:pt-10 lg:pt-0">
          <h4 className="font-semibold text-sm sm:text-lg lg:text-2xl text-center sm:text-left sm:w-2/5">
            {"CREATIVE WORKS HANDPICKED BY OUR STAFF :)"}
          </h4>
          <button className="flex gap-2 lg:gap-3 items-center group">
            <span className="text-base sm:text-lg lg:text-2xl">SUBMIT YOURS</span>
            <FaArrowRight className={clsx("w-4 h-4 lg:w-5 lg:h-5 mt-0.5", movingArrow)} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ImageCard = () => {
  return (
    <div className="h-48 sm:h-60 lg:h-[30rem] w-full max-w-sm sm:max-w-none relative">
      <img src={placeholderImage} className="w-full h-full object-cover rounded-lg" />

      {/* text: image description */}
      <div className="absolute bottom-0 left-0 h-16 sm:h-20 lg:h-24 text-white z-10 flex">
        <div className="w-4/5 mx-4 sm:mx-6 lg:mx-8 mt-1 sm:mt-1.5 lg:mt-2">
          <h3 className="text-sm sm:text-lg lg:text-[1.4rem] w-fit font-semibold">Title</h3>
          <p className="text-xs sm:text-sm lg:text-[0.7rem] line-clamp-2 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quaerat quisquam quidem Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Nesciunt quaerat quisquam quidem
          </p>
        </div>

        {/* button: arrow right > redirect to content */}
        <div className="w-1/5 flex items-center justify-center">
          <button className="group py-1 sm:py-2 px-2 sm:px-4">
            <FaArrowRight className={clsx("w-4 h-4 lg:w-5 lg:h-5", movingArrow)} />
          </button>
        </div>
      </div>

      {/* style: black bottom gradient */}
      <div className="absolute bottom-4 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg" />
      <div className="absolute bottom-4 left-0 w-full h-1/2 bg-gradient-to-t from-black/85 to-transparent rounded-b-lg" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/95 to-transparent rounded-b-lg" />
      <div className="absolute bottom-0 left-0 w-full h-5 bg-black rounded-b-lg" />
    </div>
  );
};

export default FeaturedWorksSection;
