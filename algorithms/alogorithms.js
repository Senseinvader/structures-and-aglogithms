

function binarySearch(array, number) {

  let arrayStart = 0;
  let arrayEnd = array.length-1;

  while (arrayEnd >= arrayStart) {
    let arrayMiddle = Math.floor((arrayEnd+arrayStart)/2);

    if (array[arrayMiddle] == number) {
      return true;
    } else if (array[arrayMiddle] > number) {
      arrayEnd = arrayMiddle-1;
    } else {
      arrayStart = arrayMiddle+1;
    }
  }
  return false;
}

let array = [1,3,5,6,10,22,33];
console.log(binarySearch(array, 22));


