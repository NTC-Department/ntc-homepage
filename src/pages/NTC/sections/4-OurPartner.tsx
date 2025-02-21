import placeholderImage from "@assets/content/placeholder.jpg";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import clsx from "clsx";
import { movingArrow } from "@classStyle/hover";

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
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[100rem] h-full flex flex-col">
        {/* text: title */}

        <div className="h-[28%] flex">
          <div className="w-full mt-auto mb-6 h-20 flex justify-between items-baseline">
            <h1 className="text-[3rem] font-bold w-[36rem]">OUR PARTNER</h1>
            <button className="flex gap-3 items-center group">
              <span className="text-2xl">PARNERSHIP PROGRAM</span>
              <FaArrowRight className={clsx("w-5 h-5 mt-0.5", movingArrow)} />
            </button>
          </div>
        </div>

        {/* component: content card */}
        <div className="h-[72%] flex gap-6 py-12">
          <div className="flex flex-col gap-4 w-2/5">
            {leftItems.map((item, index) => (
              <PartnerCard key={index} {...item} />
            ))}
          </div>

          {rightItems.length > 0 && (
            <div className="flex flex-col gap-4 w-2/5">
              {rightItems.map((item, index) => (
                <PartnerCard key={index} {...item} />
              ))}
            </div>
          )}
        </div>
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
      className="group relative flex gap-4 items-center p-4 rounded-md overflow-hidden border border-transparent"
      whileHover="hover"
      initial="initial"
    >
      {/* Image */}
      <img src={props.image} className="w-26 h-26 rounded-md object-cover" />

      {/* Text */}
      <span className="font-semibold line-clamp-2 text-xl">{props.name}</span>

      {/* Animated Arrow Button (Now appears on hover) */}
      <button className="p-2 me-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ms-auto">
        <FaChevronRight className="w-5 h-5" />
      </button>

      {/* Left-Top to Right & Bottom */}
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

      {/* Right-Bottom to Left & Top */}
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
