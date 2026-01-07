/**
 * Splits an array into chunks of specified size
 * @param {Array} array - The array to chunk
 * @param {number} size - Size of each chunk
 * @returns {Array[]} Array of chunks
 */
export function chunk(array, size) {
  if (!Array.isArray(array)) {
    throw new TypeError('First argument must be an array');
  }

  if (size < 1) {
    throw new RangeError('Chunk size must be at least 1');
  }

  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }

  return chunks;
}

// Example usage:
// chunk([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]