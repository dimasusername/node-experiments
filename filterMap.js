// filterMap.js
export function filterMap(arr, fn) {
  const result = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    const mapped = fn(arr[i], i, arr);
    if (mapped !== undefined) {
      result.push(mapped);
    }
  }
  return result;
}

