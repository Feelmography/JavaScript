/**
 * 1. 이름, 주소, 전화번호를 입력한 후 추가 버튼을 클릭하면
 * 입력된 이름, 주소, 전화번호를 table 에 추가
 * 2. 화면의 UI를 각자 디자인
 */

const inputs = document.querySelectorAll("input");
const tbodyAddr = document.querySelector("tbody.addr");
const btn = document.querySelector("button");
const info = {};

btn.addEventListener("click", () => {
  info.이름 = inputs[0].value;
  info.주소 = inputs[1].value;
  info.전화번호 = inputs[2].value;

  const tr = document.createElement("TR");
  let td = document.createElement("TD");
  td.innerText = info.이름;
  tr.appendChild(td);

  td = document.createElement("TD");
  td.innerText = info.주소;
  tr.appendChild(td);

  td = document.createElement("TD");
  td.innerText = info.전화번호;
  tr.appendChild(td);

  tbodyAddr.appendChild(tr);
});
