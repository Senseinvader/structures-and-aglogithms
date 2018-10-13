
function quickSort(array) {

  quickSort1(array, 0, array.length-1);
}

function quickSort1(array, left, right) {
  if (left >= right) {
    return;
  }
  let pivot = array[Math.floor((left+right)/2)];
  let index = divide(array, left, right, pivot);
  left = quickSort1(array, left, index-1);
  right = quickSort1(array, index, right);
}

function divide(array, left, right, pivot) {
  while(left <= right) {
    while(array[left] < pivot) {
      left++;
    }
    while(array[right] > pivot) {
      right--;
    }
    if (left <= right) {
      array.swap(left, right);
      left++;
      right--;
    }
  }
  
  return left;
}

Array.prototype.swap = function(first, second) {
  let t = this[first];
  this[first] = this[second];
  this[second] = t;
  return this;
}


let array = [2, -55, 8, 99, 25, -3];
quickSort(array);
console.log(array);