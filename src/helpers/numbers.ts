// eslint-disable-next-line no-self-compare
export const replaceNAN = (n: number, replace: string) =>
  n !== n ? replace : n;
