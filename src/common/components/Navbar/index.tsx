import clsx from "clsx";
import { contentSection } from "@consts/contentSection";
import useCoreStore from "@contexts/core/store";
import useSection from "@hooks/useSection";
import useWebContent from "@hooks/useWebContent";
import NTCLogo from "@public/images/NTCLogo.png";

const Navbar = () => {
  const { currentContent } = useCoreStore();
  const { switchWebContent } = useWebContent();
  const { scrollToSection, isFirstSection } = useSection();

  return (
    <div
      className={clsx(
        "fixed z-50 w-full backdrop-blur-md h-24 bg-black text-white px-44 flex items-center justify-between",
        isFirstSection ? "animate-firstSection" : "animate-onSection"
      )}
    >
      <nav className="flex gap-4">
        {/* component: NTC logo */}
        <img src={NTCLogo} alt="Logo NTC" onClick={() => scrollToSection("Home")} className="h-7 me-8 cursor-pointer" />

        {/* components: navigation items */}
        {Object.values(contentSection[currentContent])
          .slice(1)
          .map((item, index) => (
            <button key={index} onClick={() => scrollToSection(item)} className="font-helvetica-neue-roman">
              {item}
            </button>
          ))}
      </nav>
      <button
        onClick={switchWebContent}
        className="text-lg rounded-md p-1 px-3 capitalize text-primary font-helvetica-neue-bold"
      >
        {currentContent === "ntc" ? "Neogang" : "NTC"}
      </button>
    </div>
  );
};

export default Navbar;
