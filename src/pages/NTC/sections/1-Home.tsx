import placeholderImage from "@assets/content/placeholder.jpg";

const HomeSection = () => {
  return (
    <div className="h-full w-full pt-20 pb-16 px-24">
      {/* component: content carousel card */}
      <div className="w-full h-full relative text-white">
        <div className="grid grid-rows-[1fr_auto] grid-cols-5 h-full">
          {/* text: image description */}
          <div className="col-span-2 bg-black flex flex-col pt-16 ps-10 pe-4 rounded-tl-3xl">
            <h1 className="text-3xl border">TITLE</h1>
            <p className="text-lg h-full border">Description</p>
            <div className="h-16 border pt-2">
              <button className="border h-full">Learn More button</button>
            </div>
          </div>

          {/* image: carousel */}
          <div className="col-span-3 bg-green-500 relative overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-tr-lg"
              src={placeholderImage}
            />

            {/* style: black gradient that mask images (left) */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-l from-transparent to-black/80" />
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-l from-transparent to-black/50" />

            {/* style: black gradient that mask images (bottom) */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent" />

            <div className="absolute bottom-3 right-6">
              <div className="border">Carousel Button</div>
            </div>
          </div>

          {/* style: bottom black bar */}
          <div className="col-span-5 bg-black h-16 rounded-b-2xl" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
