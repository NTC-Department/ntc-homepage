interface Props {
  children: React.ReactNode;
}
const NTCLayout = (props: Props) => {
  const { children } = props;

  // TODO: add transition animation
  return children;
};

export default NTCLayout;
