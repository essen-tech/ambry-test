/**
 * @param  {string|string[]} key
 * @param  {{[key:string]:any}} lastObject
 * @param  {{[key:string]:any}} nextObject
 *
 * @returns boolean True if lastObject[key] === nextObject[key] for all keys, else False
 */
export const isKeyValuesEqual = (
  key: string | string[],
  lastObject: { [key: string]: any },
  nextObject: { [key: string]: any }
): boolean => {
  if (Array.isArray(key)) {
    for (let i = 0; i < key.length; i++) {
      if (lastObject[key[i]] !== nextObject[key[i]]) {
        return false;
      }
    }
    return true;
  }

  return lastObject[key] === nextObject[key];
};

/**
 *
 * @param  {string|string[]} key
 * @param  {{[key:string]:any}} lastObject
 * @param  {{[key:string]:any}} nextObject
 *
 * @returns boolean True if lastObject[key] === false and nextObject[key] === true for any key, else False
 */
export const isNextObjectTrue = (
  key: string | string[],
  lastObject: { [key: string]: any },
  nextObject: { [key: string]: any }
): boolean => {
  if (Array.isArray(key)) {
    for (let i = 0; i < key.length; i++) {
      if (!lastObject[key[i]] && nextObject[key[i]]) {
        return true;
      }
    }
    return false;
  }

  return !lastObject[key] && nextObject[key];
};

/**
 *
 * @param  {string|string[]} key
 * @param  {{[key:string]:any}} lastObject
 * @param  {{[key:string]:any}} nextObject
 *
 * @returns boolean True if lastObject[key] === true and nextObject[key] === false for any key, else False
 */
export const isNextObjectFalse = (
  key: string | string[],
  lastObject: { [key: string]: any },
  nextObject: { [key: string]: any }
): boolean => {
  if (Array.isArray(key)) {
    for (let i = 0; i < key.length; i++) {
      if (lastObject[key[i]] && !nextObject[key[i]]) {
        return true;
      }
    }
    return false;
  }

  return lastObject[key] && !nextObject[key];
};
