export default function createChronologicalDates(
  count: number,
  startDate?: Date
): Date[] {
  const dates: Date[] = [];
  let lastDate = startDate ?? new Date();

  for (let i = 0; i < count; i++) {
    const delay = Math.floor(Math.random() * (2 * 24 * 60 * 60 * 1000)) + 1000; // 1s – 2d
    const currentDate = new Date(lastDate.getTime() + delay);
    dates.push(currentDate);
    lastDate = currentDate;
  }

  return dates;
}
