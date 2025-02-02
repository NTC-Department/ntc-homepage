import useCoreStore from "@contexts/core/store";

interface HookReturn {
  isFirstSection: boolean;
  scrollToSection: (id: string) => void;
  onSectionChange: (section: string) => void;
}

const useSection = (): HookReturn => {
  const { currentSection, setSection } = useCoreStore();

  const scrollToSection = (id: string) => {
    setSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onSectionChange = (section: string) => {
    setSection(section);
  };

  const isFirstSection = currentSection === "home";

  return {
    isFirstSection,
    scrollToSection,
    onSectionChange,
  };
};

export default useSection;
