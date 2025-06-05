import { createContext, useState } from "react";
import { MonsterType, PostType } from "../types";
import { monsterPosts, monsterUsers } from "../data/mockData";

type SocialContextType = {
  monsters: MonsterType[];
  setMonsters: React.Dispatch<React.SetStateAction<MonsterType[]>>;
  posts: PostType[];
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
  comments: { [key: string]: string[] };
  setComments: React.Dispatch<React.SetStateAction<{ [key: string]: string[] }>>;
  currentUser: MonsterType | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<MonsterType | null>>;
};

export const SocialContext = createContext<SocialContextType | null>(null);

const SocialContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [monsters, setMonsters] = useState<MonsterType[]>(monsterUsers);
  const [posts, setPosts] = useState<PostType[]>(monsterPosts);
  const [currentUser, setCurrentUser] = useState<MonsterType | null>(null);
  const [comments, setComments] = useState<{ [key: string]: string[] }>({});

  const contextValue = {
    monsters,
    setMonsters,
    posts,
    setPosts,
    comments,
    setComments,
    currentUser,
    setCurrentUser,
  };

  return (
    <SocialContext.Provider value={contextValue}>
      {children}
    </SocialContext.Provider>
  );
};

export default SocialContextProvider;
