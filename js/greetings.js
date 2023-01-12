const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 로그인 폼
function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막아줌
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); // value에 값 저장(로그인 유지)
  paintGreetings(username);
}

// 로그아웃 버튼
const removeBtn = document.querySelector(".logout-button");

function removeStorage() {
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}

removeBtn.addEventListener("click", removeStorage);

// 환영 인사 띄우기
function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `Hello, ${username}`;
  removeBtn.classList.remove(HIDDEN_CLASSNAME);
}

// local storage에 유저 정보 유무를 확인한  뒤, 유저가 존재한다면 h1을 띄우고 존재하지 않는다면 form을 띄운다.
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintGreetings(savedUsername);
}
