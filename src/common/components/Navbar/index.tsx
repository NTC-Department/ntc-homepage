import useCoreStore from "@contexts/core/store";
import clsx from "clsx";
import useWebContent from "@hooks/useWebContent";
import useSection from "@hooks/useSection";
import { contentSection } from "@consts/contentSection";

const Navbar = () => {
  const { currentContent } = useCoreStore();
  const { switchWebContent } = useWebContent();
  const { scrollToSection, isFirstSection } = useSection();

  return (
    <div
      className={clsx(
        "primary fixed z-50 w-full backdrop-blur-md h-24 bg-black text-white",
        isFirstSection ? "animate-firstSection" : "animate-onSection"
      )}
    >
      <div className="flex h-full items-center justify-between">
        <div className="flex gap-2">
          {Object.values(contentSection[currentContent]).map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item)}
              className="primary hover:bg-white hover:text-black"
            >
              {item === "Home" ? (
                <div>
                  <span>LOGO</span>
                </div>
              ) : (
                <div>
                  <span>{item}</span>
                </div>
              )}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={switchWebContent}
            className="primary hover:bg-white hover:text-black rounded-md"
          >
            {currentContent}
          </button>
          <button className="primary hover:bg-white hover:text-black">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
