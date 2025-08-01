import clsx from "clsx";
import placeholderImage from "@assets/content/placeholder.jpg";
import { movingArrow } from "@classStyle/hover";
import { FaImage } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const FeaturedWorksSection = () => {
  const desktopContent = () => (
    <div className="hidden sm:flex flex-col w-full h-full items-center pt-[13vh]">
      {/* Title */}
      <div className="mx-auto mb-auto h-fit w-full flex items-center gap-[1vw] justify-center pb-[1vh]">
        <FaImage className="w-[5vh] h-[5vh]" />
        <h1 className="text-[5vh] font-bold">FEATURED WORKS</h1>
      </div>

      {/* Content */}
      <div className="w-full max-h-[65vh] flex-1 bg-black/10 flex items-center justify-center py-10 px-4">
        <div className="flex flex-row items-center justify-center gap-8">
          <ImageCard />
          <ImageCard />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full px-[7vw] h-[15%] flex flex-row items-center justify-between">
        <h4 className="font-semibold xl:text-2xl lg:text-xl text-xs text-left w-2/5">
          {"CREATIVE WORKS HANDPICKED BY OUR STAFF :)"}
        </h4>
        <button className="flex gap-3 items-center group">
          <span className="xl:text-2xl lg:text-xl text-xs">SUBMIT YOURS</span>
          <FaArrowRight className={clsx("w-5 h-5 mt-0.5", movingArrow)} />
        </button>
      </div>
    </div>
  );

  const mobileContent = () => (
    <div className="flex flex-col sm:hidden w-full h-full pt-[12svh]">
      {/* Title */}
      <div className="mx-auto mt-auto mb-8 h-12 w-full max-w-[36rem] flex items-center gap-2 justify-center">
        <FaImage className="w-6 h-6" />
        <h1 className="text-2xl font-bold">FEATURED WORKS</h1>
      </div>

      {/* Content */}
      <div className="w-full flex-1 bg-black/10 flex items-center justify-center py-8 px-4">
        <div className="flex flex-col items-center gap-4">
          <ImageCard />
          <ImageCard />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full h-[30%] flex flex-col items-center justify-start gap-2 px-5 pt-6">
        <h4 className="font-semibold text-sm text-center w-full">{"CREATIVE WORKS HANDPICKED BY OUR STAFF :)"}</h4>
        <button className="flex gap-2 items-center group">
          <span className="text-base">SUBMIT YOURS</span>
          <FaArrowRight className={clsx("w-4 h-4 mt-0.5", movingArrow)} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="h-[100svh] w-full relative flex overflow-hidden bg-gray-100">
      <div className="w-full max-w-[100%] h-full">
        {mobileContent()}
        {desktopContent()}
      </div>
    </div>
  );
};

const ImageCard = () => {
  return (
    <div className="h-48 sm:h-60 lg:h-[30rem] max-h-[60vh] w-full max-w-sm sm:max-w-none relative">
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
      <div className="absolute bottom-4 left-0 w-full h-1/5 bg-gradient-to-t from-black/85 to-transparent rounded-b-lg" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/95 to-transparent rounded-b-lg" />
      <div className="absolute bottom-0 left-0 w-full h-5 bg-black rounded-b-lg" />
    </div>
  );
};

export default FeaturedWorksSection;
