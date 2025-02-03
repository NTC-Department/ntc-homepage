import placeholderImage from "@assets/content/placeholder.jpg";

const FeaturedWorksSection = () => {
  return (
    <div className="h-full w-full">
      <div className="h-full flex flex-col">
        {/* text: title */}
        <div className="h-[25%] flex">
          <span className="text-3xl font-bold border mx-auto mt-auto mb-8">
            FEATURED WORKS
          </span>
        </div>

        {/* component: content card */}
        <div className="h-[60%] bg-black/10 flex items-center px-20 gap-4">
          <div className="w-1/2">
            <ImageCard />
          </div>
          <div className="w-1/2">
            <ImageCard />
          </div>
        </div>

        {/* component: footer section */}
        <div className="h-[15%] px-20 gap-4 flex items-center justify-between">
          <span className="font-semibold border">
            {"CREATIVE WORKS HANDPICKED BY OUR STAFF :)"}
          </span>
          <button className="border">{"SUBMIT YOURS ->"}</button>
        </div>
      </div>
    </div>
  );
};

const ImageCard = () => {
  return (
    <div className="h-[17.5rem] relative">
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

export default FeaturedWorksSection;
