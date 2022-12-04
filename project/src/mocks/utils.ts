export function getRandomNumber(min: number, max: number): number {
  return Math.round(Math.random() * max + min);
}

export function getRandomItem<T>(array: T[]): T {
  return array[getRandomNumber(0, array.length - 1)];
}
