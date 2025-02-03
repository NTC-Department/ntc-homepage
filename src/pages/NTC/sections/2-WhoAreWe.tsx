import placeholderImage from "@assets/content/placeholder.jpg";
import clsx from "clsx";

const WhoAreWeSection = () => {
  return (
    <div className="h-full w-full">
      <div className="h-full flex">
        {/* component: who are we */}
        <div className="w-1/2 border py-48 ps-60 pe-10 flex flex-col">
          <div className="border h-18 w-60">LOGO</div>
          <h1 className="text-3xl border mt-32 h-20 w-[22.5rem]">
            WHO ARE WE?
          </h1>
          <p className="border mt-14 w-[35rem] h-28 line-clamp-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            suscipit eligendi totam veritatis dignissimos voluptatibus, aliquam
            nisi. Placeat maxime minima libero sed, officia totam odio! Deleniti
            nam nesciunt harum quas quidem, voluptates, quos, quae.
          </p>
          <div className="mt-[7.5rem] h-16 w-62">
            <button className="h-full border w-full rounded-2xl">
              About Us button
            </button>
          </div>
        </div>

        {/* image: showcase 8 grid */}
        <div className="w-1/2 border overflow-hidden relative flex gap-6 justify-center">
          {/* imagelist: left */}
          <div className="flex flex-col gap-4 -mt-16 mb-16 border border-blue-700 w-[19rem]">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className={clsx(
                  "w-full h-full bg-gray-300 flex items-center justify-center overflow-hidden rounded-lg opacity-60",
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
          <div className="flex flex-col gap-4 mt-16 -mb-16 border border-yellow-600 w-[19rem]">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index + 4}
                className={clsx(
                  "w-full h-full bg-gray-300 flex items-center justify-center overflow-hidden rounded-lg opacity-60",
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
