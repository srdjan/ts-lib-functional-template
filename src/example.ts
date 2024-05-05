async function fetchData(url: string) {
  const response = await fetch(url);
  return await response.json() as string;
}

const url = 'https://api.example.com/data';
const data = await fetchData(url);

/* eslint-disable */
console.log(data);

export {};