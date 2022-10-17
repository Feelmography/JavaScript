const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");

const result = document.querySelector("#result");

const btn = document.querySelector("button");

/**
 * 본문에 button tag 가 한개만 있기 떄문에
 * 별도의 id 를 부착하지 않고 직접 tag를 가져와서 변수에 보관
 */

btn.addEventListener("click", () => {
  const intNum1 = Number(inputNum1.value);
  const intNum2 = Number(inputNum2.value);

  result.innerHTML =
    intNum1 +
    " + " +
    intNum2 +
    " = " +
    (intNum1 + intNum2) +
    "<br/>" +
    intNum1 +
    " - " +
    intNum2 +
    " = " +
    (intNum1 - intNum2) +
    "<br/>" +
    intNum1 +
    " x " +
    intNum2 +
    " = " +
    intNum1 * intNum2 +
    "<br/>" +
    intNum1 +
    " ÷ " +
    intNum2 +
    " = " +
    intNum1 / intNum2 +
    "<br/>";
});
