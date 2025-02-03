import placeholderImage from "@assets/content/placeholder.jpg";
import clsx from "clsx";

const WhoAreWeSection = () => {
  return (
    <div className="h-full w-full">
      <div className="h-full flex">
        {/* component: who are we */}
        <div className="w-1/2 border py-24 ps-20 pe-10 flex flex-col">
          <div className="border h-20 w-32">LOGO</div>
          <h1 className="text-3xl border mt-16">WHO ARE WE?</h1>
          <p className="h-full border mt-8 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            suscipit eligendi totam veritatis dignissimos voluptatibus, aliquam
            nisi. Placeat maxime minima libero sed, officia totam odio! Deleniti
            nam nesciunt harum.
          </p>
          <div className="h-28 border">
            <button className="h-full border">About Us button</button>
          </div>
        </div>

        {/* image: showcase 8 grid */}
        <div className="w-1/2 border overflow-hidden relative px-20 flex gap-4 justify-center">
          {/* imagelist: left */}
          <div className="flex flex-col gap-4 -mt-6 mb-6 border">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className={clsx(
                  "w-32 h-32 bg-gray-300 flex items-center justify-center overflow-hidden rounded-lg opacity-60",
                  index === 2 && "opacity-100"
                )}
              >
                <img
                  src={placeholderImage}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* imagelist: right */}
          <div className="flex flex-col gap-4 mt-6 -mb-6 border">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index + 4}
                className={clsx(
                  "w-32 h-32 bg-gray-300 flex items-center justify-center overflow-hidden rounded-lg opacity-60",
                  index === 1 && "opacity-100"
                )}
              >
                <img
                  src={placeholderImage}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWeSection;
