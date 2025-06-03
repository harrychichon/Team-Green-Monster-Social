import { createContext, useState } from "react";
import { MonsterType, PostType } from "../types";
import { monsterPosts, monsterUsers } from "../data/mockData";

type SocialContextType = {
  monsters: MonsterType[];
  setMonsters: React.Dispatch<React.SetStateAction<MonsterType[]>>;
  posts: PostType[];
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
};

export const SocialContext = createContext<SocialContextType | null>(null);

const SocialContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [monsters, setMonsters] = useState<MonsterType[]>(monsterUsers);
  const [posts, setPosts] = useState<PostType[]>(monsterPosts);

  const contextValue = { monsters, setMonsters, posts, setPosts };

  return (
    <SocialContext.Provider value={contextValue}>
      {children}
    </SocialContext.Provider>
  );
};

export default SocialContextProvider;
