function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++ ) {
    if (array[i] !=== stopValue) {
      array[i] = changeValue;
    } else if (array[i] === stopValue){
      break;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {}
