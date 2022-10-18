/**
 * 회원가입 버튼을 클릭하면
 * 1. 아이디, 비번, 비번확인을 입력했는지 확인하고
 * 입력하지 않았으면 입력하도록 focus() 지정
 * 2. 비밀번호와 비밀번호 확인 데이터가 다르면
 * 비밀번호 부터 다시 입력받도록 하기
 */
const btnSubmit = document.querySelector(".btn_submit");
const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputRe_password = document.querySelector("#re_password");

btnSubmit.addEventListener("click", () => {
  const txtUsername = inputUsername.value;
  const txtPassword = inputPassword.value;
  const txtRe_password = inputRe_password.value;
  if (txtUsername === "") {
    alert("아이디를 입력하세요");
    inputUsername.focus();
    return;
  }

  if (txtPassword === "") {
    alert("비밀번호를 입력하세요");
    inputPassword.focus();
    return;
  }

  if (txtRe_password === "") {
    alert("비밀번호 확인을 입력하세요");
    inputRe_password.focus();
    return;
  }

  if (txtPassword !== txtRe_password) {
    alert("비밀번호를 다시 입력하세요");
    inputPassword.focus();
    return;
  }
});
