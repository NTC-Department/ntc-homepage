import Snapper from "@components/Snapper";
import NTCLayout from "./Layout";
import { contentSection } from "@consts/contentSection";
import HomeSection from "./sections/1-Home";
import WhoAreWeSection from "./sections/2-WhoAreWe";
import FeaturedWorksSection from "./sections/3-FeaturedWorks";
import OurPartnerSection from "./sections/4-OutPartner";

const NTCPage = () => {
  const sections = contentSection.ntc;

  return (
    <NTCLayout>
      <Snapper.Container>
        <Snapper.Section id={sections.home}>
          <HomeSection />
        </Snapper.Section>
        <Snapper.Section id={sections.shop} primaryColor="black">
          <WhoAreWeSection />
        </Snapper.Section>
        <Snapper.Section id={sections.partnership}>
          <FeaturedWorksSection />
        </Snapper.Section>
        <Snapper.Section id={sections.community}>
          <OurPartnerSection />
        </Snapper.Section>
        <Snapper.Section id={sections.aboutUs}>
          <h1>About Us</h1>
        </Snapper.Section>
      </Snapper.Container>
    </NTCLayout>
  );
};

export default NTCPage;
