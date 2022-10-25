document.addEventListener("DOMContentLoaded", () => {
  const spanNumbs = document.querySelectorAll("div.number span");
  const btnReset = document.querySelector("div.btn_reset");

  const numDisp = () => {
    const nums = [];
    for (let i = 0; i < 10; i++) {
      const rndNum = Math.random() * 100 + 1;
      const intNum = Math.floor(rndNum);
      nums[i] = intNum;

      spanNumbs[i].textContent = intNum;
    }
  };

  btnReset.addEventListener("click", numDisp);
  numDisp();
});
