let arr = [12, 34, 12, 45, 35, 23, 5, 6, 55, 43];

function filterEvenNumber(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumber(arr));
