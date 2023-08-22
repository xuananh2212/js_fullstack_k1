const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal-overlay");
const btnRegister = document.querySelector(".btn-regsiter");
const btnLogin = document.querySelector(".btn-login");
const modalRegister = document.querySelector(".modal-register");
const modalLogin = document.querySelector(".modal-login");
const modalLoginRegister = document.querySelector(".modal-login-register");
var inputPasswd = document.querySelector(".form-group__wrap  #passwd");
const eye = document.querySelector(".form-login-register .fa-regular.fa-eye");
const modalText = document.querySelector(".modal-text");
const modalSocial = document.querySelector(".modal-social");
const btnForget = document.querySelector(".btn-forget");
const formGroupName = document.querySelector("#full-name").parentElement;
const formGroupDesc = document.querySelector(".form-group .desc");
const inputAll = [...document.querySelectorAll(".form-login-register input")];
var spanPasswd = document.querySelector(".error-passwd");
var spanEmail = document.querySelector(".error-email");
function handlShowModal() {
  if (modal) {
    modal.classList.toggle("is-show");
  }
}
if (btn) {
  btn.addEventListener("click", handlShowModal);
}

if (overlay) {
  overlay.addEventListener("click", handlShowModal);
}

if (btnLogin) {
  btnLogin.addEventListener("click", function (e) {
    btnLogin.classList.add("active");
    btnRegister.classList.remove("active");
    modalText.innerHTML = "với các tài khoản mạng xã hội";
    modalSocial.classList.remove("hidden");
    modalSocial.nextElementSibling.classList.remove("hidden");
    formGroupName.classList.add("hidden");
    btnForget.classList.remove("hidden");
    formGroupDesc.classList.add("hidden");
    inputAll.forEach((input) => (input.value = ""));
  });
}
if (btnRegister) {
  btnRegister.addEventListener("click", function (e) {
    btnRegister.classList.add("active");
    btnLogin.classList.remove("active");
    modalText.innerHTML = "Hoàn thành đăng ký, và bắt đầu trải nghiệm ngay!";
    modalSocial.classList.add("hidden");
    modalSocial.nextElementSibling.classList.add("hidden");
    btnForget.classList.add("hidden");
    formGroupName.classList.remove("hidden");
    formGroupDesc.classList.remove("hidden");
    inputAll.forEach((input) => {
      input.value = "";
      input.classList.remove("error");
      spanPasswd.innerHTML = "";
      spanEmail.innerHTML = "";
    });
  });
}

if (eye) {
  eye.addEventListener("click", function (e) {
    if (eye.classList.contains("fa-eye")) {
      eye.classList.remove("fa-eye");
      eye.classList.add("fa-eye-slash");
      inputPasswd.setAttribute("type", "text");
    } else {
      eye.classList.remove("fa-eye-slash");
      eye.classList.add("fa-eye");
      inputPasswd.setAttribute("type", "password");
    }
  });
}

function checkErrorAll() {
  if (this.value === null || this.value === "") {
    spanEmail.textContent = "vui lòng nhập thông tin";
    email.classList.add("error");

    spanPasswd.textContent = "vui lòng nhập thông tin";
    passwd.classList.add("error");
  }
  inputAll.forEach((input) => {
    if (this.value === null || this.value === "") {
    }
  });
}

// check email
const email = document.querySelector("input#email");
const passwd = document.querySelector("input#passwd");
console.log(email);
if (email) {
  var regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  email.addEventListener("blur", checkErrorAll);
  email.addEventListener("input", function (e) {
    if (this.value === null || this.value === "") {
      spanEmail.textContent = "vui lòng nhập thông tin";
    } else if (regex.test(this.value)) {
      spanEmail.textContent = "";
      email.classList.remove("error");
      console.log("dm");
    } else {
      spanEmail.textContent = "Vui lòng nhập đúng định dạng email";
      spanPasswd.textContent = "vui lòng nhập thông tin";
    }
  });
}
