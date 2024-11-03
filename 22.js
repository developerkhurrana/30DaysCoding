function fibonacci(nterm) {
  if (nterm <= 1) {
    return nterm;
  } else {
    return fibonacci(nterm - 1) + fibonacci(nterm - 2);
  }
}

console.log(fibonacci(6));
