function APICalls(url) {
  return fetch(url).then((response) => response.json());
}

function handleData(data) {
  console.log("processed data", data);
}

function main() {
  const apiUrl1 = "https://jsonplaceholder.typicode.com/posts/1";
  const apiUrl2 = "https://jsonplaceholder.typicode.com/posts/2";

  APICalls(apiUrl1)
    .then(handleData)
    .catch((err) => console.error("error"));
  APICalls(apiUrl2)
    .then(handleData)
    .catch((err) => console.error("error"));
}

main();
