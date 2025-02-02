import clsx from "clsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // TODO: change show logic using zustand to track current focus section
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (lastScrollY !== 0) setShow(!(window.scrollY > lastScrollY));
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = ["home", "about", "purchase", "contact"];

  // TODO: change to zustand
  const [currentContent, setCurrentContent] = useState<"ntc" | "neogang">(
    "ntc"
  );

  const navigator = useNavigate();

  const handleContentChange = () => {
    navigator(currentContent === "ntc" ? "/neogang" : "/");
    setCurrentContent(currentContent === "ntc" ? "neogang" : "ntc");
  };

  return (
    <div
      className={clsx(
        "primary fixed z-10 w-full backdrop-blur-md h-[3.5rem] bg-black text-white",
        show ? "animate-show" : "animate-hide"
      )}
    >
      <div className="flex h-full items-center justify-between">
        <div className="flex gap-2">
          <span>LOGO</span>
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => handleScroll(section)}
              className="primary hover:bg-white hover:text-black"
            >
              {section}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleContentChange}
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
