export type MonsterType = {
  id: string;
  userName: string;
  picSource: string;
};

export type PostType = {
  monsterUser: MonsterType;
  postedAt: Date;
  postedAtDate: string;
  postedAtTime: string;
  postImageUrl?: string;
  text: string;
};
export type RawPostData = {
  user: MonsterType;
  text: string;
  image: string;
};
