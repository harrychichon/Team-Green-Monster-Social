import { createContext, useState } from "react";
import { PostProps } from "../types";

type MonsterType = {
  id: string;
  userName: string;
  picSource: string;
};

type SocialContextType = {
  monsters: MonsterType[];
  setMonsters: React.Dispatch<React.SetStateAction<MonsterType[]>>;
  posts: PostProps[];
  setPosts: React.Dispatch<React.SetStateAction<PostProps[]>>;
};

export const SocialContext = createContext<SocialContextType | null>(null);

const SocialContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [monsters, setMonsters] = useState<MonsterType[]>([]);
  const [posts, setPosts] = useState<PostProps[]>([]);

  const contextValue = { monsters, setMonsters, posts, setPosts };

  return (
    <SocialContext.Provider value={contextValue}>
      {children}
    </SocialContext.Provider>
  );
};

export default SocialContextProvider;
