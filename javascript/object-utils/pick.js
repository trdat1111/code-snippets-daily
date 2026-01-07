/**
 * Pick specified properties from an object
 * @param {Object} obj - The source object
 * @param {string[]} keys - Keys to pick
 * @returns {Object} New object with picked properties
 */
export function pick(obj, keys) {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('First argument must be an object');
  }

  if (!Array.isArray(keys)) {
    throw new TypeError('Second argument must be an array');
  }

  const result = {};

  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }

  return result;
}

// Example usage:
// pick({ a: 1, b: 2, c: 3 }, ['a', 'c']) => { a: 1, c: 3 }