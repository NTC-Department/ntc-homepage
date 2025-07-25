import clsx from "clsx";
import moment from "moment";
import placeholderImage from "@assets/content/placeholder.jpg";
import { movingArrow } from "@classStyle/hover";
import { FaArrowRight } from "react-icons/fa";

const JoinUsSection = () => {
  return (
    <div className="h-[100svh] w-full relative flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[100rem] h-full flex flex-col px-4 sm:px-6 lg:px-0">
        <div className="h-[18%] sm:h-[25%] lg:h-[28%] flex">
          <div className="w-full mt-auto mb-6 md:mb-0 flex">
            <h1 className="text-2xl sm:text-4xl lg:text-[3rem] font-bold h-auto lg:h-20 w-full lg:w-[36rem] text-center lg:text-left">
              JOIN US!
            </h1>
          </div>
        </div>

        <div className="h-[64%] sm:h-[55%] lg:h-[55%] gap-3 sm:gap-4 lg:gap-4 relative">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 h-full">
            <CommunityCard />
            <CommunityCard />
          </div>
        </div>

        <div className="h-[5%] sm:h-[6%] gap-3 flex">
          <hr className="w-full mt-auto border-t-2 border-black" />
        </div>

        <div className="h-[13%] sm:h-[14%] lg:h-[12%] flex sm:items-center sm:pt-0 pt-6">
          <h4 className="font-semibold h-fit text-xs sm:text-lg lg:text-xl text-center lg:text-left w-full">
            {`2021 - ${moment.utc().format("YYYY")} © NTC DEPARTMENT, ALL RIGHTS RESERVED`}
          </h4>
        </div>
      </div>
    </div>
  );
};

const CommunityCard = () => {
  return (
    <div className="h-56 sm:h-60 lg:h-[32.5rem] w-full relative">
      <img src={placeholderImage} className="w-full h-full object-cover rounded-lg" />

      <div className="absolute bottom-0 left-0 h-16 sm:h-20 lg:h-24 text-white z-10 flex">
        <div className="w-4/5 mx-4 sm:mx-6 lg:mx-8 mt-1 sm:mt-1.5 lg:mt-2">
          <h3 className="text-sm sm:text-lg lg:text-[1.4rem] w-fit font-semibold">Title</h3>
          <p className="text-xs sm:text-sm lg:text-[0.7rem] line-clamp-2 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quaerat quisquam quidem Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Nesciunt quaerat quisquam quidem
          </p>
        </div>

        <div className="w-1/5 flex items-center justify-center">
          <button className="group py-1 sm:py-2 px-2 sm:px-4">
            <FaArrowRight className={clsx("w-4 h-4 lg:w-5 lg:h-5", movingArrow)} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg" />
      <div className="absolute bottom-4 left-0 w-full h-1/2 bg-gradient-to-t from-black/85 to-transparent rounded-b-lg" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/95 to-transparent rounded-b-lg" />
      <div className="absolute bottom-0 left-0 w-full h-5 bg-black rounded-b-lg" />
    </div>
  );
};

export default JoinUsSection;
