import { useContext } from "react";
import { SocialContext } from "../contexts/SocialContext";

export default function useSocialContext() {
  const context = useContext(SocialContext);
  if (!context) {
    throw new Error(
      "useSocialContext must be used within a SocialContextProvider"
    );
  }
  return context;
}
