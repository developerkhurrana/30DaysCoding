function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
let cnt = counter();

console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());
