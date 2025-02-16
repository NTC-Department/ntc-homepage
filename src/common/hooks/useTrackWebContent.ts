import useCoreStore from "@contexts/core/store";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useTrackWebContent = () => {
  const { setContent } = useCoreStore();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setContent("ntc");
    } else if (location.pathname === "/neogang") {
      setContent("neogang");
    }
  }, [location.pathname]);
};

export default useTrackWebContent;
