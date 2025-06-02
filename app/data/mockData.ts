import { MonsterType, PostType } from "../types";

export const monsterUsers: MonsterType[] = [
  {
    id: "1",
    userName: "Jan-Olof",
    picSource: "23",
  },
];

export const monsterPosts: PostType[] = [
  {
    monsterUser: monsterUsers[0],
    postedAt: "nu",
    postImageUrl: "23",
    text: "jajaja",
  },
];
