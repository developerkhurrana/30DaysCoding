let arr = [12, 34, 12, 1, 1, 1, 3, 2, 45, 35, 88, 23, 5, 6, 55, 43];

function largest(arr) {
  return arr.reduce((max, current) => (current > max ? current : max));
}

console.log(largest(arr));
