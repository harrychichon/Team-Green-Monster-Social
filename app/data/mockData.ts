import { MonsterType, RawPostData } from "../types";

export const monsterUsers: MonsterType[] = [
  {
    id: "1",
    userName: "Tigger",
    picSource:
      "https://media.istockphoto.com/id/1445781372/sv/foto/tiger-looking-at-the-camera-on-a-black-background.jpg?s=2048x2048&w=is&k=20&c=GmfhJXx7HYuxo1vPk8dS0vntF42J_sQ14deAKn7Gc_E=",
  },
];

export const rawPostData: RawPostData[] = [
  {
    user: monsterUsers[0],
    text: "Chillin with Jan-Olof...",
    image:
      "https://focus.independent.ie/thumbor/hw8MRpqWDc-IKK3L7nvbTf3egzY=/0x0:2500x1665/960x640/prod-mh-ireland/1ea19a34-c468-11ed-a8bd-0210609a3fe2",
  },
  {
    user: monsterUsers[0],
    text: "Exploring new territories 🐾",
    image: "https://example.com/post2.jpg",
  },
  {
    user: monsterUsers[0],
    text: "Time for a nap 😴",
    image: "https://example.com/post3.jpg",
  },
];
