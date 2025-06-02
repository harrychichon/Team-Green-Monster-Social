export interface PostProps {
  profileImage: string;
  name: string;
  postedAt: string;
  postImageUrl?: string;
  text: string;
}

export type MonsterType = {
  id: string;
  userName: string;
  picSource: string;
};
