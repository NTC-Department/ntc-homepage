import Snapper from "@components/Snapper";

const NTCPage = () => {
  const handleOnFocus = (id: string) => {
    console.log("focus: ", id);
  };
  return (
    <div>
      <Snapper.Container>
        <Snapper.Section onFocus={handleOnFocus} id="home" primaryColor="white">
          <h1>Home</h1>
        </Snapper.Section>
        <Snapper.Section
          onFocus={handleOnFocus}
          id="about"
          primaryColor="white"
        >
          <h1>About us</h1>
        </Snapper.Section>
        <Snapper.Section
          onFocus={handleOnFocus}
          id="purchase"
          primaryColor="white"
        >
          <h1>Purchase</h1>
        </Snapper.Section>
        <Snapper.Section
          onFocus={handleOnFocus}
          id="contact"
          primaryColor="white"
        >
          <h1>Contact</h1>
        </Snapper.Section>
      </Snapper.Container>
    </div>
  );
};

export default NTCPage;
