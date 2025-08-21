/**
 * Converts a time value in seconds to a string in "MM:SS" format.
 *
 * @param timeInSeconds - The time in seconds to convert.
 * @returns A string representing the time in "MM:SS" format.
 *
 * @example
 * ```ts
 * secondsToMSS(40);      // returns "00:40"
 * secondsToMSS(125);     // returns "02:05"
 * secondsToMSS(3600);    // returns "60:00"
 * ```
 */
export function secondsToMMSS(timeInSeconds: number): string {
  const dateObject: Date = new Date(timeInSeconds * 1000);
  const minutes: number = dateObject.getUTCMinutes();
  const seconds: number = dateObject.getUTCSeconds();

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}
