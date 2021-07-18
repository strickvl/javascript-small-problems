const getProductOfAllOtherElements = (arr) => {
  let newArray = arr.slice();
  for (let i = 0; i < newArray.length; i += 1) {
    const productofOtherElements = getOtherElements(arr, i).reduce((acc, val) => {
      return acc * val;
    }, 1);
    newArray[i] = productofOtherElements;
  }

  return newArray;
};

const getOtherElements = (arr, removalIndex) => {
  return arr.filter((element, index) => {
    return index !== removalIndex;
  });
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 2, 1];
console.log(getProductOfAllOtherElements(arr1)) // should == [120, 60, 40, 30, 24]);
console.log(getProductOfAllOtherElements(arr2)) // should == [2, 3, 6]);
