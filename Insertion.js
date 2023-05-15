function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

let randomIndexArray = []
for (i = 0; i < 20; i++) {
  randomNum = Math.floor(Math.random() * 100);
  randomIndexArray.push(randomNum);
}

insertionSort(randomIndexArray);