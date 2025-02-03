import placeholderImage from "@assets/content/placeholder.jpg";

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
    <div className="h-full w-full">
      <div className="h-full flex flex-col">
        {/* text: title */}

        <div className="h-[35%] px-44 flex">
          <div className="w-full mt-auto pb-24 flex justify-between items-baseline">
            <span className="text-[3rem] font-bold border h-20 w-[36rem]">
              OUR PARTNER
            </span>
            <button className="border h-fit text-2xl">
              {"PARNERSHIP PROGRAM ->"}
            </button>
          </div>
        </div>

        {/* component: content card */}
        <div className="h-[65%] flex gap-6 px-44 border py-12">
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
    <div className="flex gap-4 items-center border">
      <img src={props.image} className="w-26 h-26 rounded-md object-cover" />
      <span className="font-semibold line-clamp-2 text-xl">{props.name}</span>
    </div>
  );
};

export default OurPartnerSection;
