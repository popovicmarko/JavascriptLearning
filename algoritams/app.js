function findLargestNumber(array) {
    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
    return largest;
  }
  
  let numbers = [4, 2, 9, 1, 3, 6];
  let largest = findLargestNumber(numbers);
  console.log(largest);
  
