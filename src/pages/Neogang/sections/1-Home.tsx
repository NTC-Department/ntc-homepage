import background1 from "@assets/content/Neogang/sections/1-Home/background-1.png";
import background2 from "@assets/content/Neogang/sections/1-Home/background-2.png";

const backgrounds = [background1, background2];

const HomeSection = () => {
  return (
    <div
      className="h-screen w-full relative flex flex-col items-center justify-center bg-black"
      style={{
        backgroundImage: `url(${backgrounds[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 50ms ease-in-out",
      }}
    >
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className="text-6xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-schabo-condensed leading-[0.85] mb-6 lg:mb-8 tracking-tight">
          CREATE, INSPIRE, INNOVATE.
        </h1>
        <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-helvetica-neue-roman tracking-[0.15em] mb-20 lg:mb-24 opacity-90 max-w-[40rem] mx-auto leading-relaxed">
          YOU LAY BESIDE ME AND I FEEL SO RIGHT WHEN YOU HOLD MY BODY TIGHT
        </p>
      </div>

      <div className="h-[10rem] flex z-10 justify-between items-center w-full mx-auto bg-black absolute bottom-0 px-6 lg:px-42 pb-14 sm:pb-0">
        <div className="text-left text-white md:flex gap-10 items-center h-fit">
          <p className="text-sm sm:text-base lg:text-2xl font-helvetica-neue-roman tracking-wider">
            BOUND BY <span className="text-green-400">CREATIVITY</span>
          </p>
          <p className="text-sm sm:text-base lg:text-2xl font-helvetica-neue-roman tracking-wide">
            HOME OF <strong>50</strong> NEOGANG MEMBERS
          </p>
        </div>

        <div className="text-right text-white">
          <p className="text-sm sm:text-base lg:text-2xl font-helvetica-neue-roman tracking-widest opacity-90">
            NEOTERIC HQ 2025
          </p>
        </div>
      </div>

      {/* style: background overlay */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default HomeSection;
