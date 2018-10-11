

function mergeSort(array) {

  if (array.length < 2) {
    return array;
  }
  let middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);

}

function merge(left, right) {
  const sorted = [];
  while(left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  while(left.length) {
    sorted.push(left.shift());
  }
  while(right.length) {
    sorted.push(right.shift());
  }
  return sorted;
}

const newArray = [22,40,3,46,5,20];
const result = mergeSort(newArray);
console.log(result);