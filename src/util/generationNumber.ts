export const MAX_NUMBER = 100;

export const generationNumber = (): number => {
  return Math.floor(Math.random() * (MAX_NUMBER + 1));
};
