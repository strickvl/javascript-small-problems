const findLeftBoundary = (arr) => {
  let left = 0;
  for (let i = 1; i < arr.length; i += 1) {
    const value = arr[i];
    if (arr[i - 1] > value) {
      return i - 1;
    }
  }
  return -1;
}

const findRightBoundary = (arr, leftBoundary) => {
  if (leftBoundary === -1) return -1;

  let right = arr.length - 1;
  for (let i = right; i > leftBoundary; i -= 1) {
    const value = arr[right];
    if (value > arr[leftBoundary]) {
      return i;
    }
  };
}

const smallestSortingWindow = (arr) => {
  const sorted = arr.slice();
  sorted.sort();

  let left = 0;
  let right = arr.length - 1;

  while (left <= Math.floor(arr.length / 2)) {
    if (sorted[left] !== arr[left] || sorted[right] !== arr[right]) {
      return
    }
  }

  return [left, right];
}


const arr = [3, 7, 5, 6, 9];
const arr2 = [1, 3, 5, 7, 2];
const arr3 = [1, 3, 5, 6];
console.log(smallestSortingWindow(arr)); // should return [1, 3];
console.log(smallestSortingWindow(arr2)); // should return [1, 4];
console.log(smallestSortingWindow(arr3)); // should return [-1, -1];
