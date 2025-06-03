import { MonsterType, PostType } from '../types';

export const monsterUsers: MonsterType[] = [
  {
    id: '1',
    userName: 'Tiger',
    picSource:
      'https://as2.ftcdn.net/v2/jpg/06/21/80/07/1000_F_621800785_uVUwvEMV6LZadwxNsB1y46j6yDplDCxc.jpg',
  },
  {
    id: '2',
    userName: 'Gorilla',
    picSource:
      'https://us.123rf.com/450wm/aihumnoi/aihumnoi2310/aihumnoi231025940/215387798-gorilla-silberr%C3%BCckengorilla.jpg',
  },
  {
    id: '3',
    userName: 'Panda',
    picSource:
      'https://img.freepik.com/premium-photo/image-panda_931878-704293.jpg?w=360',
  },
  {
    id: '4',
    userName: 'Elephant',
    picSource:
      'https://happypainting.se/cdn/shop/files/0212HQ-PortretVanOlifant.jpg?v=1703681370',
  },
];

export const monsterPosts: PostType[] = [
  {
    monsterUser: monsterUsers[0],
    postedAt: 'Just nu',
    postImageUrl:
      'https://static.bonniernews.se/gcs/bilder/epi-30-dn/UploadedImages/2020/3/24/2d3e50f5-5477-4f98-b26d-b15b448f746d/bigOriginal.jpg',
    text: 'Tiger här, nyvaken och hungrig! 🐯',
  },
  {
    monsterUser: monsterUsers[1],
    postedAt: '10 min sedan',
    postImageUrl:
      'https://media.istockphoto.com/id/178464507/sv/foto/big-hungry-gorilla-eating-a-snack-of-bananas-for-breakfast.jpg?s=612x612&w=0&k=20&c=knAstvlukzbyFWOaYIH_9DE1g8SuBSedn2KVqOIMLoE=',
    text: 'Krossade en bananrekord igen 💪🍌',
  },
  {
    monsterUser: monsterUsers[2],
    postedAt: '1 timme sedan',
    postImageUrl:
      'https://t3.ftcdn.net/jpg/13/17/02/74/360_F_1317027462_YZR1CCjwZmhH1B807YUwlGgM2oq6U4CM.jpg',
    text: 'Sovit i bambuskogen 🌿🐼',
  },
  {
    monsterUser: monsterUsers[3],
    postedAt: 'Igår',
    postImageUrl:
      'https://thumbor.junction.travel/0dmdg4dnCYnItY38TP2744q2BeM=/1092x0/smart/https%3A%2F%2Fcontent.res.se%2Fsites%2Fdefault%2Ffiles%2Ffield%2Fimage%2Felefant2.jpg',
    text: 'Gick 10 km med flocken 🐘',
  },
];
