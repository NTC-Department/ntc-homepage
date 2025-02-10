import placeholderImage from "@assets/content/placeholder.jpg";
import { movingArrow } from "@classStyle/hover";
import clsx from "clsx";
import { FaImage } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const FeaturedWorksSection = () => {
  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[100rem] h-full flex flex-col">
        {/* text: title */}
        <div className="h-[28%] flex">
          <div className="mx-auto mt-auto mb-12 h-20 w-[36rem] flex items-center gap-4 justify-center">
            <FaImage className="w-12 h-12" />
            <span className="text-[3rem] font-bold">FEATURED WORKS</span>
          </div>
        </div>

        {/* component: content card */}
        <div className="h-[57%] gap-4 relative">
          <div className="flex items-center mt-10 h-[30rem] gap-8">
            <ImageCard />
            <ImageCard />
          </div>
        </div>

        {/* component: footer section */}
        <div className="h-[15%] gap-4 flex items-center justify-between">
          <span className="font-semibold text-2xl">
            {"CREATIVE WORKS HANDPICKED BY OUR STAFF :)"}
          </span>
          <button className="flex gap-3 items-center cursor-pointer group">
            <span className="text-2xl">SUBMIT YOURS</span>
            <FaArrowRight className={clsx("w-5 h-5 mt-0.5", movingArrow)} />
          </button>
        </div>
      </div>

      {/* style: gray banner */}
      <div className="bg-black/10 h-[35rem] w-full absolute top-[28vh]" />
    </div>
  );
};

const ImageCard = () => {
  return (
    <div className="h-full w-full relative">
      <img
        src={placeholderImage}
        className="w-full h-full object-cover rounded-lg"
      />

      {/* text: image description */}
      <div className="absolute bottom-0 left-0 h-24 text-white z-10 flex">
        <div className="w-4/5 mx-8 mt-2">
          <h3 className="text-[1.4rem] w-fit">Title</h3>
          <p className="text-[0.7rem] line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            quaerat quisquam quidem Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nesciunt quaerat quisquam quidem
          </p>
        </div>

        {/* button: arrow right > redirect to content */}
        <div className="w-1/5 flex items-center justify-center">
          <button className="group py-2 px-4 cursor-pointer">
            <FaArrowRight className={clsx("w-5 h-5", movingArrow)} />
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
