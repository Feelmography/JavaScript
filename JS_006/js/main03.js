const inputs = document.querySelectorAll("input");
const tbodyScore = document.querySelector("tbody.score");
const btnAdd = document.querySelector("button.add");

/**
 * 국어, 영어, 수학 점수가 0 ~ 100점 범위를 벗어나면
 * 점수가 잘못 입력되었다는 alert을 띄우고
 * 다시 점수를 입력받기
 */
const scoreInput = () => {
  const tr = document.createElement("TR");

  inputs.forEach((input) => {
    const td = document.createElement("TD");
    td.textContent = input.value;
    tr.appendChild(td);
  });

  if (
    (inputs.name !== "sc_num" &&
      inputs.name !== "sc_name" &&
      Number(inputs.value) < 0) ||
    Number(inputs.value) > 100
  ) {
    alert("점수가 잘못 입력되었습니다\n점수를 다시 입력해주세요");
    inputs.value = "";
    inputs.focus();
    return false;
  }

  tbodyScore.appendChild(tr);
};

btnAdd?.addEventListener("click", scoreInput);
