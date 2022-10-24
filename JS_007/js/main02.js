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

btnAdd?.addEventListener("click", () => {
  if (scoreCheck()) {
    scoreInput();
  }
});
