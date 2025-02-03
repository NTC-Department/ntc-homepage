import placeholderImage from "@assets/content/placeholder.jpg";

const LatestReleaseSection = () => {
  return (
    <div className="h-full w-full">
      <div className="h-full flex flex-col">
        {/* text: title */}
        <div className="h-[35%] ps-20 flex justify-between">
          <span className="text-3xl font-bold border mt-auto mb-8 w-fit">
            LATEST RELEASE
          </span>
          <div className="mt-auto w-1/2">
            <BackgroundSticker />
          </div>
        </div>

        {/* component: content card */}
        <div className="h-[50%] bg-black/10 px-20 flex items-center justify-between">
          {/* [placeholder] component: arrow left */}
          <div className="text-xl border">{"<-"}</div>
          <div className="w-[80%] flex gap-2 justify-evenly">
            <div className="">
              <ImageCard />
            </div>
            <div className="">
              <ImageCard />
            </div>
            <div className="">
              <ImageCard />
            </div>
          </div>
          {/* [placeholder] component: arrow right */}
          <div className="text-xl border">{"->"}</div>
        </div>

        {/* component: footer section */}
        <div className="h-[15%] px-20 gap-4 flex items-center justify-between">
          <span className="font-semibold border">{"HANDS UP - PROJECT"}</span>
          <button className="border">{"SHOW MORE ->"}</button>
        </div>
      </div>
    </div>
  );
};

const ImageCard = () => {
  return (
    <div className="h-56 flex flex-col">
      <img
        src={placeholderImage}
        className="w-full h-full object-cover rounded-t-sm"
      />

      {/* text: image description */}
      <div className="bg-black h-24 text-white z-10 py-2 px-4 flex gap-2 rounded-b-sm">
        <div className="flex items-center justify-center">
          {/* [placeholder] component: logo */}
          <span className="border rounded-full w-5 h-5 flex items-center justify-center">
            {">"}
          </span>
        </div>
        <div className="">
          <h3 className="text-lg border w-fit">Title</h3>
          <p className="text-[0.6rem] border line-clamp-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            quaerat quisquam quidem Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nesciunt quaerat quisquam quidem
          </p>
        </div>
      </div>
    </div>
  );
};

const BackgroundSticker = () => {
  return (
    <div className="relative border z-0 overflow-hidden h-32">
      <div className="border absolute bottom-[-3rem] left-10">
        <img src={placeholderImage} className="rounded-full w-32 h-32" />
      </div>
      <div className="border absolute bottom-[-1rem] left-32 z-10">
        <img src={placeholderImage} className="rounded-full w-32 h-32" />
      </div>
      <div className="border absolute bottom-[-1.5rem] left-60">
        <img src={placeholderImage} className="rounded-full w-32 h-32" />
      </div>
    </div>
  );
};

export default LatestReleaseSection;
