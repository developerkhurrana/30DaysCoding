let arr = [12, 34, 12, 45, 35, 23, 5, 6, 55, 43];

function double(arr) {
  return arr.map((num) => (num += num));
}

console.log(double(arr));
