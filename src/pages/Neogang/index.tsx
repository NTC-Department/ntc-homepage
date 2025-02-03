import Snapper from "@components/Snapper";
import { contentSection } from "@consts/contentSection";
import HomeSection from "./sections/1-Home";

const NeogangPage = () => {
  return (
    <div>
      <Snapper.Container>
        <Snapper.Section id={contentSection.neogang.home}>
          <HomeSection />
        </Snapper.Section>
        <Snapper.Section id={contentSection.neogang.shop} primaryColor="black">
          <h1>Shop Section</h1>
        </Snapper.Section>
        <Snapper.Section id={contentSection.neogang.latestRelease}>
          <h1>Partnership</h1>
        </Snapper.Section>
        <Snapper.Section id={contentSection.neogang.ourArtist}>
          <h1>Community</h1>
        </Snapper.Section>
        <Snapper.Section id={contentSection.neogang.aboutUs}>
          <h1>About Us</h1>
        </Snapper.Section>
      </Snapper.Container>
    </div>
  );
};

export default NeogangPage;
