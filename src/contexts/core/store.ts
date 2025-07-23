import { WebContent } from "@types";
import { create } from "zustand";
import { CoreStoreState } from "./type";

const useCoreStore = create<CoreStoreState>((set) => ({
  currentContent: "ntc",
  setContent: (value: WebContent) => set({ currentContent: value }),

  currentSection: "",
  setSection: (value: string) => set({ currentSection: value }),
}));

export default useCoreStore;
