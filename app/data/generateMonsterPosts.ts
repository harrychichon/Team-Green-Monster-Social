import { PostType, RawPostData } from "../types";
import removeTimezoneOffset from "../utils/removeTimezoneOffset";
import createChronologicalDates from "../utils/createChronologicalDates";

export function generateMonsterPosts(data: RawPostData[]): PostType[] {
  const dates = createChronologicalDates(
    data.length,
    new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // 30 dagar sen
  );

  return data.map((entry, index) => {
    const date = dates[index];
    return {
      monsterUser: entry.user,
      postImageUrl: entry.image,
      text: entry.text,
      postedAt: date,
      postedAtDate: date.toDateString(),
      postedAtTime: removeTimezoneOffset(date.toTimeString()),
    };
  });
}
