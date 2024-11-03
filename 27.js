function APICalls(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((err) => console.error("Error during api call:", err.message));
}

function handleData(data) {
  console.log("processed data", data);
}

function main() {
  const apiUrl1 = "https://jsonplaceholder.typicode.com/posts/1";
  const apiUrl2 = "https://jsonplaceholder.typicode.com/posts/2";

  APICalls(apiUrl1, handleData);
  APICalls(apiUrl2, handleData);
}

main();
