import { WebContent } from "@types";

export interface CoreStoreState {
  currentContent: WebContent;
  setContent: (value: WebContent) => void;

  currentSection: string;
  setSection: (value: string) => void;
}
