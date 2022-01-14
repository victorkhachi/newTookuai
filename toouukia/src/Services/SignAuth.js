export function getData() {
  return fetch("http://localhost:3333/signUp").then((data) => data.json());
}

export function setData(item) {
  return fetch("http://localhost:3333/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item }),
  }).then((data) => data.json());
}
