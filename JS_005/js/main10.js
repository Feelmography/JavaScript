const tbodyAddr = document.querySelector("tbody.addr");

const 이름 = ["홍길동", "이몽룡", "성춘향", "임꺽정", "장녹수"];
for (let i = 0; i < 이름.length; i++) {
  // html에 없는 tag 를 script 에서 만들기
  const tr = document.createElement("TR");

  // 새로운 td를 만들고
  let td = document.createElement("TD");
  // text를 설정하고
  td.innerText = 이름[i];
  // 새로 만든 td를 tr에 추가하기
  tr.appendChild(td);

  td = document.createElement("TD");
  td.innerText = "주소 " + i;
  tr.appendChild(td);

  td = document.createElement("TD");
  td.innerText = "전화번호 " + i;
  tr.appendChild(td);

  tbodyAddr.appendChild(tr);
}
