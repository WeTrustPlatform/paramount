export const useSpring = obj => {
  return obj;
};
export const useTrail = (num, config) =>
  [...Array(num).keys()].map((n, i) => config.from);
export const animated = View => View;
