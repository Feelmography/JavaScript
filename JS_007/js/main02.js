const inputs = document.querySelectorAll("input");
const tBodyScore = document.querySelector("tbody.score");
const btnAdd = document.querySelector("button.add");

let scoreList = [];

const scoreLoad = () => {
  const strScore = localStorage.getItem("myScore");

  scoreList = JSON.parse(strScore);
  console.log("가져온 데이터 확인");
  console.table(scoreList);

  if (!scoreList) {
    scoreList = [];
    return false;
  }

  for (let i = 0; i < scoreList.length; i++) {
    const tr = document.createElement("TR");
    let td = document.createElement("TD");
    td.textContent = scoreList[i].num;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = scoreList[i].name;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = scoreList[i].kor;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = scoreList[i].math;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = scoreList[i].eng;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = scoreList[i].sum;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = scoreList[i].average;
    tr.appendChild(td);

    tBodyScore.appendChild(tr);
  }
};

scoreLoad();

const scoreCheck = () => {
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];

    if (!input.value) {
      alert(`${input.placeholder} 를(을) 입력하세요`);
      input.focus();
      return false;
    }
  }
  return true;
};

const addrInput = () => {
  const tr = document.createElement("TR");
  for (let i = 0; i < inputs.length; i++) {
    const td = document.createElement("TD");
    td.textContent = inputs[i].value;
    tr.appendChild(td);
  }
  tBodyScore.appendChild(tr);
};

const scoreInput = () => {
  const tr = document.createElement("TR");
  let sum = 0;
  for (let i = 0; i < inputs.length; i++) {
    const td = document.createElement("TD");

    td.textContent = inputs[i].value;
    tr.appendChild(td);

    if (i > 1) {
      sum += Number(inputs[i].value);
    }
  }

  let td = document.createElement("TD");
  td.textContent = sum;
  tr.appendChild(td);

  td = document.createElement("TD");

  td.textContent = Math.round(sum / 3);
  tr.appendChild(td);

  tBodyScore.appendChild(tr);

  const score = {
    num: inputs[0].value,
    name: inputs[1].value,
    kor: inputs[2].value,
    math: inputs[3].value,
    eng: inputs[4].value,
    sum: sum,
    average: Math.round(sum / 3),
  };

  scoreList.push(score);
  console.table(scoreList);

  localStorage.setItem("myScore", JSON.stringify(scoreList));
};

// click event 가 발생하면 미리 선언해둔
// scoreInput 함수를  실행하라

btnAdd?.addEventListener("click", () => {
  // addrCheck 함수에서 모든 유효성 검사가 완료되면
  // return true 를 하기 때문에 if() 비교하여
  // addrCheck() 실행결과가 true 이면...
  if (scoreCheck()) {
    scoreInput();
  }
});
