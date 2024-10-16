const delay = (ms: number): Promise<number> => {
  return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
};

async function waitResolveAllPromises() {
  const promises = [
    delay(1000 + Math.random() * 2000),
    delay(1000 + Math.random() * 2000),
    delay(1000 + Math.random() * 2000),
  ];

  try {
    const result = await Promise.all(promises);
    console.log(result);
  } catch (error) {
    console.log("Promise error: " + error);
  }
}

waitResolveAllPromises();
