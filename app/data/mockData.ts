import { MonsterType, PostType } from "../types";

//mockdata med users
export const monsterUsers: MonsterType[] = [
  {
    id: "1",
    userName: "Jan-Olof",
    picSource:
      "https://media.istockphoto.com/id/1445781372/sv/foto/tiger-looking-at-the-camera-on-a-black-background.jpg?s=2048x2048&w=is&k=20&c=GmfhJXx7HYuxo1vPk8dS0vntF42J_sQ14deAKn7Gc_E=",
  },
];

//mockdata med inlägg
export const monsterPosts: PostType[] = [
  {
    monsterUser: monsterUsers[0],
    postedAt: Date(),
    postImageUrl:
      "https://focus.independent.ie/thumbor/hw8MRpqWDc-IKK3L7nvbTf3egzY=/0x0:2500x1665/960x640/prod-mh-ireland/1ea19a34-c468-11ed-a8bd-0210609a3fe2",
    text: "jajaja",
  },
];
