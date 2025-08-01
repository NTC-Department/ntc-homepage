import { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { contentSection } from "@consts/contentSection";
import useCoreStore from "@contexts/core/store";
import useSection from "@hooks/useSection";
import useWebContent from "@hooks/useWebContent";
import { FaBars, FaTimes } from "react-icons/fa";
import NeogangLogo from "@public/images/NeogangLogo.png";
import NTCLogo from "@public/images/NTCLogo.png";

const Navbar = () => {
  const { currentContent } = useCoreStore();
  const { switchWebContent } = useWebContent();
  const { scrollToSection, isFirstSection } = useSection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  document.title = currentContent === "ntc" ? "NTC Department" : "Neogang";
  document
    .querySelector("link[rel='icon']")
    ?.setAttribute("href", currentContent === "ntc" ? "/ntc.ico" : "/neogang.ico");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (item: string) => {
    scrollToSection(item);
    setIsMobileMenuOpen(false);
  };

  const isNTC = currentContent === "ntc";

  return (
    <>
      <div
        className={clsx(
          "fixed z-[80] w-full h-[10vh] bg-black text-white md:px-[10vw] px-6 flex items-center justify-between",
          isFirstSection ? "animate-firstSection" : "animate-onSection"
        )}
      >
        <div className="flex items-center gap-4 lg:gap-0">
          <img
            src={isNTC ? NTCLogo : NeogangLogo}
            alt="Logo NTC"
            onClick={() => handleNavClick("Home")}
            className={clsx("cursor-pointer", isNTC ? "w-28 lg:w-32" : "w-28 lg:w-32")}
          />

          <nav className="hidden lg:flex gap-4 lg:ml-8">
            {Object.values(contentSection[currentContent])
              .slice(1)
              .map((item, index) => (
                <button key={index} onClick={() => scrollToSection(item)} className="font-helvetica-neue-roman">
                  {item}
                </button>
              ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={switchWebContent}
            className="text-sm sm:text-base lg:text-lg rounded-md p-1 px-2 sm:px-3 capitalize text-primary font-helvetica-neue-bold"
          >
            {isNTC ? "Neogang" : "NTC Department"}
          </button>

          <button onClick={toggleMobileMenu} className="lg:hidden text-white p-2">
            {isMobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="lg:hidden fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
              onClick={toggleMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              className="lg:hidden fixed top-16 sm:top-20 left-0 right-0 z-[70] bg-black text-white p-4 sm:p-6 shadow-lg border-t border-white/10"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <nav className="flex flex-col gap-4">
                {Object.values(contentSection[currentContent])
                  .slice(1)
                  .map((item, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleNavClick(item)}
                      className="font-helvetica-neue-roman text-left py-2 hover:text-primary transition-colors"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                    </motion.button>
                  ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
