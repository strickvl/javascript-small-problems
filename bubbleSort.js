/*
  input an arr to be sorted IN PLACE
  output, the same array, sorted following bubble sort algorithm

  algo:
  - init a counter to count how many swaps get made (set to 0)
  - set up an infinite loop (with a break condition if counter still 0)
  - inside the loop, iterate over it in pairs from beginning to end -1
  - if val1 is less than val2, swap them and iterate the counter
  - return the original array
*/

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr) {
  while (arr.length === arr.length) {
    counter = 0;
    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, (i + 1));
        counter += 1;
      }
    }
    if (counter === 0) break;
  }

  return arr;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
