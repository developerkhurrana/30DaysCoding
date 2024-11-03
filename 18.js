function removeElement(arr, target) {
  return arr.filter((itm) => itm !== target);
}
let arr = [12, 5, 34, 5, 12, 45, 35, 23, 5, 5, 6, 55, 43];
let target = 5;
let filtered = removeElement(arr, target);

console.log(filtered);
