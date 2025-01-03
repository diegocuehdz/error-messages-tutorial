const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Oh dear!");
  }
};

try {
  somethingDangerous();
} catch (error) {
  if (!(error instanceof Error)) throw new Error("Unhandled");
  console.log(error.message);
}
