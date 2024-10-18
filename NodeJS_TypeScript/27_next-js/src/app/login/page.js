"use server";
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts"); // запрос со стороны клиента
  const result = await res.json();
  return result;
}

const page = async () => {
  const test = await getData();
  console.log(test);

  return <div>{test[0].body}</div>;
};

export default page;
