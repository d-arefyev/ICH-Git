async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error");
    // return error;
  } finally {
    console.log("Завершение операции");
  }
  console.log("Test 1");
  return 0;
}
console.log(fetchData());
