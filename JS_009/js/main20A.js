const nums = []; // length 가 0 인 배열
const h1 = document.querySelector("h1");

for (let i = 0; i < 10; i++) {
  const rndNum = Math.random() * 100 + 1;
  const intNum = Math.floor(rndNum);
  // nums 배열에 intNum에 담긴 값을 담기
  nums[i] = intNum;
}

nums.forEach((num) => {
  document.writeln(num);
});

nums.forEach((num) => {
  // h1.textContent = h1.textContent + num
  h1.textContent += `${num}`;
});
