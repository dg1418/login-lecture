"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", register);

function register() {
  console.log(id.value);
  if (!id.value) return alert("아이디를 입력해주십시오.");
  if (psword.value !== confirmPsword.value)
    return alert("비밀번호가 다릅니다.");

  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
  };
  console.log(req);

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("회원가입 중 에러 발생");
    });
}
