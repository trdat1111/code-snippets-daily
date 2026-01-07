/**
 * Sleep for a specified duration
 * @param {number} ms - Duration in milliseconds
 * @returns {Promise<void>}
 */
export function sleep(ms) {
  if (typeof ms !== 'number' || ms < 0) {
    throw new TypeError('Argument must be a positive number');
  }

  return new Promise(resolve => setTimeout(resolve, ms));
}

// Example usage:
// await sleep(1000); // Sleep for 1 second