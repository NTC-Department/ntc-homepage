import clsx from "clsx";
import moment from "moment";
import placeholderImage from "@assets/content/placeholder.jpg";
import { movingArrow } from "@classStyle/hover";
import { FaArrowRight } from "react-icons/fa";

const JoinUsSection = () => {
  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[100rem] h-full flex flex-col">
        {/* text: title */}
        <div className="h-[28%] flex">
          <div className="w-full mt-auto mb-12 flex">
            <h1 className="text-[3rem] font-bold h-20 w-[36rem]">JOIN US!</h1>
          </div>
        </div>

        {/* component: community card */}

        <div className="h-[55%] gap-4 relative">
          <div className="flex items-center gap-8 h-[32.5rem]">
            <CommunityCard />
            <CommunityCard />
          </div>
        </div>

        {/* component: divider */}
        <div className="h-[5%] gap-3 flex">
          <hr className="w-full mt-auto border-t-2 border-black" />
        </div>

        {/* component: footer section */}
        <div className="h-[12%] flex items-center">
          <h4 className="font-semibold h-fit text-xl">
            {`2021 - ${moment.utc().format("YYYY")} © NTC DEPARTMENT, ALL RIGHTS RESERVED`}
          </h4>
        </div>
      </div>
    </div>
  );
};

const CommunityCard = () => {
  return (
    <div className="h-full w-full relative">
      <img src={placeholderImage} className="w-full h-full object-cover rounded-lg" />

      {/* text: image description */}
      <div className="absolute bottom-0 left-0 h-24 text-white z-10 flex">
        <div className="w-4/5 mx-8 mt-2">
          <h3 className="text-[1.4rem] w-fit">Title</h3>
          <p className="text-[0.7rem] line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quaerat quisquam quidem Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Nesciunt quaerat quisquam quidem
          </p>
        </div>

        {/* button: arrow right > redirect to content */}
        <div className="w-1/5 flex items-center justify-center">
          <button className="group py-2 px-4">
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

export default JoinUsSection;
