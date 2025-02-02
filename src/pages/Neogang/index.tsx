import Snapper from "@components/Snapper";
import { contentSection } from "@consts/contentSection";

const NeogangPage = () => {
  return (
    <div>
      <Snapper.Container>
        <Snapper.Section id={contentSection.neogang.home} primaryColor="white">
          <h1>Home Section</h1>
        </Snapper.Section>
        <Snapper.Section id={contentSection.neogang.shop} primaryColor="white">
          <h1>Shop Section</h1>
        </Snapper.Section>
        <Snapper.Section
          id={contentSection.neogang.latestRelease}
          primaryColor="white"
        >
          <h1>Partnership</h1>
        </Snapper.Section>
        <Snapper.Section
          id={contentSection.neogang.ourArtist}
          primaryColor="white"
        >
          <h1>Community</h1>
        </Snapper.Section>
        <Snapper.Section
          id={contentSection.neogang.aboutUs}
          primaryColor="white"
        >
          <h1>About Us</h1>
        </Snapper.Section>
      </Snapper.Container>
    </div>
  );
};

export default NeogangPage;
