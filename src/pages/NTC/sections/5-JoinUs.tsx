import placeholderImage from "@assets/content/placeholder.jpg";
import moment from "moment";

const JoinUsSection = () => {
  return (
    <div className="h-full w-full">
      <div className="h-full flex flex-col">
        {/* text: title */}
        <div className="h-[35%] px-44 flex">
          <div className="w-full mt-auto pb-24 flex">
            <span className="text-[3rem] font-bold border h-20 w-[36rem]">
              JOIN US!
            </span>
          </div>
        </div>

        {/* component: community card */}
        <div className="h-[45%] flex gap-8 px-44 border">
          <CommunityCard />
          <CommunityCard />
        </div>

        {/* component: divider */}
        <div className="h-[7%] gap-3 px-44 flex">
          <hr className="border w-full mt-auto" />
        </div>

        {/* component: footer section */}
        <div className="h-[13%] px-44 flex items-center">
          <span className="font-semibold border h-fit text-2xl">
            {`2021 - ${moment.utc().format("YYYY")} © NTC DEPARTMENT, ALL RIGHTS RESERVED`}
          </span>
        </div>
      </div>
    </div>
  );
};

const CommunityCard = () => {
  return (
    <div className="h-full w-full relative">
      <img
        src={placeholderImage}
        className="w-full h-full object-cover rounded-lg"
      />

      {/* text: image description */}
      <div className="absolute bottom-0 left-0 h-28 text-white z-10 border flex">
        <div className="w-4/5 mx-8 mt-2">
          <h3 className="text-3xl border w-fit">Title</h3>
          <p className="text-sm border line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            quaerat quisquam quidem Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nesciunt quaerat quisquam quidem
          </p>
        </div>

        {/* button: arrow right > redirect to content */}
        <div className="w-1/5 border flex items-center justify-center">
          <button className="text-3xl border">{"->"}</button>
        </div>
      </div>

      {/* style: black bottom gradient */}
      <div className="absolute bottom-4 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg" />
      <div className="absolute bottom-4 left-0 w-full h-1/2 bg-gradient-to-t from-black/85 to-transparent rounded-b-lg" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/95 to-transparent rounded-b-lg" />
    </div>
  );
};

export default JoinUsSection;
