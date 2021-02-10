function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++ ) {
    if (array[i] === stopValue) {
      break;
    } else {
      changeValue(array[i])
    }
    return array;
  }
}
