export const getRandomReadTime = (min = 5, max = 20) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
