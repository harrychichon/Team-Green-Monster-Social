export type MonsterType = {
  id: string;
  userName: string;
  picSource: string;
};

export type PostType = {
  id: string;
  monsterUser: MonsterType;
  postedAt: string;
  postImageUrl?: string;
  text: string;
};
