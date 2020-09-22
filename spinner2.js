let delay = 100;
const characterToPrint = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
for (const character of characterToPrint) {
  setTimeout(() => {
    process.stdout.write(character);
  }, delay);
  delay += 200;
};