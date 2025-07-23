import { filterMap } from './filterMap.js';

const users = [];
const n = 1_000_000;
for (let i = 0; i < n; i++) {
  users.push({
    name: `user${i}`,
    active: Math.random() > 0.5
  });
}

// filter + map
function filterMapNative(arr) {
  return arr.filter(u => u.active).map(u => u.name);
}

// reduce
function reduceMethod(arr) {
  return arr.reduce((acc, u) => {
    if (u.active) acc.push(u.name);
    return acc;
  }, []);
}

// for loop
function forLoop(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].active) res.push(arr[i].name);
  }
  return res;
}

// benchmark helper
function benchmark(fn, label) {
  const start = performance.now();
  const result = fn(users);
  const end = performance.now();
  console.log(`${label}: ${(end - start).toFixed(2)} ms, result length: ${result.length}`);
  return result;
}

benchmark(filterMapNative, 'filter + map');
benchmark(reduceMethod, 'reduce');
benchmark(forLoop, 'for loop');
benchmark(() => filterMap(users, u => u.active ? u.name : undefined), 'filterMap (custom)');

