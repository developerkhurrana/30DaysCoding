function createCounter() {
  let count = 0;
  function inc() {
    count++;
    console.log("count:", count);
  }
  return {
    incrementCounter: function () {
      inc();
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.incrementCounter();
counter.incrementCounter();
counter.incrementCounter();
console.log(counter.getCount());
