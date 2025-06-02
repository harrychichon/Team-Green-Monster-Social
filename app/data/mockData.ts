import { MonsterType, PostType } from "../types";

//mockdata med users
export const monsterUsers: MonsterType[] = [
  {
    id: "1",
    userName: "Jan-Olof",
    picSource: "23",
  },
];

//mockdata med inlägg
export const monsterPosts: PostType[] = [
  {
    monsterUser: monsterUsers[0],
    postedAt: Date(),
    postImageUrl: "23",
    text: "jajaja",
  },
];
