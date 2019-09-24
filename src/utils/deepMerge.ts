// Credit to https://github.com/uber-web/baseui/blob/master/src/utils/deep-merge.js

export const deepMerge = <TResult = any>(
  // @ts-ignore
  target: TResult = {},
  ...sources: Array<null | {}>
): TResult => {
  const len = sources.length;
  let obj: any;
  let value: any;

  for (let i = 0; i < len; i++) {
    obj = sources[i] || {};
    for (const key in obj) {
      if (typeof obj[key] !== undefined) {
        value = obj[key];
        if (isCloneable(value)) {
          // @ts-ignore
          target[key] = deepMerge(
            // @ts-ignore
            target[key] || (Array.isArray(value) && []) || {},
            value,
          );
        } else {
          // @ts-ignore
          target[key] = value;
        }
      }
    }
  }
  return target;
};

export const isCloneable = (obj: object) => {
  return Array.isArray(obj) || {}.toString.call(obj) === '[object Object]';
};
