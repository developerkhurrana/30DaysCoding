function display(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i].join(" "));
  }
}
function reverseDisplay(arr) {
  for (i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i].reverse().join(" "));
  }
}

function createMultiDArray(rows, columns) {
  let arr = [];
  for (let i = 0; i < rows; i++) {
    arr.push(new Array(columns));
    for (let j = 0; j < columns; j++) {
      arr[i][j] = i + j;
    }
  }
  return arr;
}

const rows = 6;
const columns = 6;
const multiArray = createMultiDArray(rows, columns);

console.log("Original Array");
display(multiArray);

console.log("Reverse Array");
reverseDisplay(multiArray);
