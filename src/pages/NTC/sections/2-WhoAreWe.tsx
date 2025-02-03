import placeholderImage from "@assets/content/placeholder.jpg";
import clsx from "clsx";

const WhoAreWeSection = () => {
  return (
    <div className="h-full w-full">
      <div className="h-full flex">
        {/* component: who are we */}
        <div className="w-1/2 border py-24 ps-20 pe-10 flex flex-col">
          <div className="border h-20 w-32">LOGO</div>
          <h1 className="text-3xl border mt-16">TITLE</h1>
          <p className="text-lg h-full border mt-8">Description</p>
          <div className="h-24 border">
            <button className="h-full border">About Us button</button>
          </div>
        </div>

        {/* image: showcase 8 grid */}
        <div className="w-1/2 border overflow-hidden relative px-20">
          <div className="grid grid-cols-2 grid-rows-4 gap-4 h-full">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className={clsx(
                  "w-full h-32 bg-gray-300 flex items-center justify-center overflow-hidden rounded-lg",
                  index % 2 === 0 ? "translate-y-4" : "-translate-y-4",
                  index === 2 || index === 5 ? "" : "opacity-60"
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
