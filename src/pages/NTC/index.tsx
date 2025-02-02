import Snapper from "@components/Snapper";
import NTCLayout from "./Layout";
import { contentSection } from "@consts/contentSection";

const NTCPage = () => {
  return (
    <NTCLayout>
      <Snapper.Container>
        <Snapper.Section id={contentSection.ntc.home} primaryColor="white">
          <h1>Home Section</h1>
        </Snapper.Section>
        <Snapper.Section id={contentSection.ntc.shop} primaryColor="white">
          <h1>Shop Section</h1>
        </Snapper.Section>
        <Snapper.Section
          id={contentSection.ntc.partnership}
          primaryColor="white"
        >
          <h1>Partnership</h1>
        </Snapper.Section>
        <Snapper.Section id={contentSection.ntc.community} primaryColor="white">
          <h1>Community</h1>
        </Snapper.Section>
        <Snapper.Section id={contentSection.ntc.aboutUs} primaryColor="white">
          <h1>About Us</h1>
        </Snapper.Section>
      </Snapper.Container>
    </NTCLayout>
  );
};

export default NTCPage;
