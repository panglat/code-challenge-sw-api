/* eslint-disable no-self-compare */
export const replaceNAN = (n: number, replace: string) =>
  n !== n ? replace : n;
