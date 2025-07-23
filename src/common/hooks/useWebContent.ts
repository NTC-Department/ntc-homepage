import { useNavigate } from "react-router-dom";
import useCoreStore from "@contexts/core/store";

interface HookReturn {
  isNTC: boolean;
  isNeogang: boolean;
  switchWebContent: () => void;
}

const useWebContent = (): HookReturn => {
  const { currentContent, setContent } = useCoreStore();
  const navigator = useNavigate();

  const isNTC = currentContent === "ntc";
  const isNeogang = currentContent === "neogang";

  const switchWebContent = () => {
    navigator(currentContent === "ntc" ? "/neogang" : "/");
    setContent(currentContent === "ntc" ? "neogang" : "ntc");
  };

  return {
    isNTC,
    isNeogang,
    switchWebContent,
  };
};

export default useWebContent;
