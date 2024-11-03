async function fetchData(url) {
  try {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error("Request failed:" + res.status);
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData("https://jsonplaceholder.typicode.com/posts").then((data) =>
  console.log(data)
);
