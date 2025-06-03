export default function removeTimezoneOffset(timeStr: string): string {
  const gmtIndex = timeStr.indexOf(" GMT");
  if (gmtIndex === -1) return timeStr;
  return timeStr.slice(0, gmtIndex);
}
