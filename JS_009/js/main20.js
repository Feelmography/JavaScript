const numbers = [];

for (let i = 0; i < 10; i++) {
  const number = Math.floor(Math.random() * 100) + 1;
  numbers.push(number);
}

numbers.forEach((rndNum) => {
  document.writeln(rndNum);
});
