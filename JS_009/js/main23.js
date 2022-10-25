const mainSection = document.querySelector("section.main");
const mainSection1 = document.querySelector("section.main1");
const mainSection2 = document.querySelector("section.main2");
const btnRefresh = document.querySelector("button");
const nums = [];

const makeNums = () => {
  for (let i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.random() * 100) + 1;
  }
};

const viewNums = () => {
  mainSection.textContent = "";
  nums.forEach((num) => {
    const div = document.createElement("DIV");
    div.textContent = num;
    mainSection.appendChild(div);
  });
};

// 짝수만 나오게 하기
const viewNums1 = () => {
  mainSection1.textContent = "";
  const h1 = document.createElement("h1");
  h1.textContent = "짝수";
  mainSection1.appendChild(h1);
  nums.forEach((num1) => {
    const div = document.createElement("DIV");

    if (num1 % 2 == 0) {
      div.textContent = num1;
      mainSection1.appendChild(div);
    }
  });
};

// 홀수만 나오게 하기
const viewNums2 = () => {
  mainSection2.textContent = "";
  const h1 = document.createElement("h1");
  h1.textContent = "홀수";
  mainSection2.appendChild(h1);
  nums.forEach((num2) => {
    const div = document.createElement("DIV");

    if (num2 % 2 !== 0) {
      div.textContent = num2;
      mainSection2.appendChild(div);
    }
  });
};

const init = () => {
  makeNums();
  viewNums();
  viewNums1();
  viewNums2();
};

init();
btnRefresh?.addEventListener("click", init);
