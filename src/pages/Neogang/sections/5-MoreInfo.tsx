import moment from "moment";
import placeholderImage from "@assets/content/placeholder.jpg";

const MoreInfoSection = () => {
  return (
    <div className="h-full w-full">
      <div className="h-full flex flex-col">
        {/* text: title */}
        <div className="h-[35%] flex">
          <div className="border w-full mt-auto mb-12 px-20">
            <span className="text-3xl font-bold border">MORE INFO!</span>
          </div>
        </div>

        {/* component: community card */}
        <div className="h-[45%] flex gap-3 px-20 border">
          <CommunityCard />
          <CommunityCard />
        </div>

        {/* component: divider */}
        <div className="h-[7%] gap-3 px-20 flex">
          <hr className="border w-full mt-auto" />
        </div>

        {/* component: footer section */}
        <div className="h-[13%] px-20 flex items-center justify-between">
          <span className="font-semibold border h-fit">
            {`2021 - ${moment.utc().format("YYYY")} © NEOTERIC HQ, ALL RIGHTS RESERVED`}
          </span>
          <div className="border w-1/4 flex gap-4 justify-evenly">
            <span className="border w-full text-center">A</span>
            <span className="border w-full text-center">B</span>
            <span className="border w-full text-center">C</span>
            <span className="border w-full text-center">D</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CommunityCard = () => {
  return (
    <div className="h-full relative">
      <img
        src={placeholderImage}
        className="w-full h-full object-cover rounded-lg"
      />

      {/* text: image description */}
      <div className="absolute bottom-0 left-0 h-24 text-white z-10 border flex">
        <div className="w-4/5 mx-8 mt-2">
          <h3 className="text-xl border w-fit">Title</h3>
          <p className="text-[0.6rem] border line-clamp-2">
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

export default MoreInfoSection;
