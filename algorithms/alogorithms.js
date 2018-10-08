

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


function flatteningList(list) {
  let newArray = [];
  flattenList (list, newArray);
  return newArray;
}

function flattenList(list, newArray) {
  for(element of list) {
    if (Array.isArray(element)) {
      flattenList(element, newArray);
    } else {
      newArray.push(element);
    }
  }
}

let multiArray = [ 1, 3, ["age", 5], "Kraków", [1, [3, [4, 5], "codecool"], 6, 7]];
console.log(flatteningList(multiArray));
