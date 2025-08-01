import clsx from "clsx";
import { motion } from "framer-motion";
import placeholderImage from "@assets/content/placeholder.jpg";
import { movingArrow } from "@classStyle/hover";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const OurPartnerSection = () => {
  const partnerList: Partner[] = [
    {
      name: "PERKUMPULAN ORANG SANTAI",
      image: placeholderImage,
    },
    {
      name: "INVIOUS STUDI",
      image: placeholderImage,
    },
    {
      name: "NYXSTORIA",
      image: placeholderImage,
    },
    {
      name: "PONGO GAMING INDONESIA",
      image: placeholderImage,
    },
    {
      name: "GIRLS FRONTLINE INDONESIA COMMUNITY",
      image: placeholderImage,
    },
    {
      name: "SEPUTAR OTAKU",
      image: placeholderImage,
    },
    {
      name: "UNFAMOUS",
      image: placeholderImage,
    },
    {
      name: "MINECRAFT INDONESIA",
      image: placeholderImage,
    },
  ];

  const leftItems = partnerList.slice(0, 4);
  const rightItems = partnerList.length > 4 ? partnerList.slice(4, 8) : [];

  return (
    <div className="h-[100svh] w-full relative flex justify-center overflow-hidden md:pt-[20vh] pt-[12vh] bg-gray-100">
      <div className="w-full h-full flex flex-col lg:mx-[7vw] mx-4">
        <div className="flex sm:justify-between justify-center gap-4 lg:gap-0 pb-[2vh]">
          <h1 className="text-2xl sm:text-4xl lg:text-[5vh] font-bold text-center lg:text-left lg:w-[36rem]">
            OUR PARTNER
          </h1>
          <button className="items-center group mx-auto lg:mx-0 lg:flex hidden">
            <span className="text-base sm:text-xl lg:text-[2.3vh]">PARTNERSHIP PROGRAM</span>
            <FaArrowRight className={clsx("w-[2vw] h-[2vh] mt-0.5", movingArrow)} />
          </button>
        </div>

        <div className="h-[35rem] md:max-h-[70vh] max-h-[58vh] flex flex-col lg:flex-row lg:gap-6 py-4 sm:py-6 overflow-y-auto lg:overflow-visible">
          <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-2/5">
            {leftItems.map((item, index) => (
              <PartnerCard key={index} {...item} />
            ))}
          </div>

          {rightItems.length > 0 && (
            <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-2/5">
              {rightItems.map((item, index) => (
                <PartnerCard key={index} {...item} />
              ))}
            </div>
          )}
        </div>

        <button className="mt-auto mb-[9vh] gap-2 lg:gap-3 items-center group mx-auto lg:mx-0 md:hidden flex">
          <span className="text-base sm:text-xl lg:text-2xl">PARTNERSHIP PROGRAM</span>
          <FaArrowRight className={clsx("w-4 h-4 lg:w-5 lg:h-5 mt-0.5", movingArrow)} />
        </button>
      </div>
    </div>
  );
};

type Partner = {
  name: string;
  image: string;
};

const PartnerCard = (props: Partner) => {
  return (
    <motion.div
      className="group relative flex gap-3 sm:gap-4 items-center p-3 rounded-md overflow-hidden border border-transparent"
      whileHover="hover"
      initial="initial"
    >
      <img
        src={props.image}
        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-18 lg:h-18 xl:w-26 xl:h-26 rounded-md object-cover overflow-hidden"
      />

      <span className="font-semibold line-clamp-2 text-sm sm:text-lg lg:text-base xl:text-xl flex-1">{props.name}</span>

      <button className="p-1 sm:p-2 me-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0">
        <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-black/80"
        variants={{
          hover: { width: "100%", transition: { duration: 0.3 } },
          initial: { width: "0%" },
        }}
      />
      <motion.div
        className="absolute top-0 left-0 w-[2px] bg-black/80"
        variants={{
          hover: { height: "100%", transition: { duration: 0.3, delay: 0.2 } },
          initial: { height: "0%" },
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 h-[2px] bg-black/80"
        variants={{
          hover: { width: "100%", transition: { duration: 0.3, delay: 0.2 } },
          initial: { width: "0%" },
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[2px] bg-black/80"
        variants={{
          hover: { height: "100%", transition: { duration: 0.3 } },
          initial: { height: "0%" },
        }}
      />
    </motion.div>
  );
};

export default OurPartnerSection;
