// get all elements from HTML:
var uEmail = document.getElementById("email");
var uName = document.getElementById("name");
var uPassword = document.getElementById("password");
var userInc = document.getElementById("alertUserIncorrect");
var userExits = document.getElementById("alertUserExits");
var passwordInc = document.getElementById("alertPasswordIncorrect");
var loginBtn = document.getElementById("loginBtn");
var regBtn = document.getElementById("regBtn");
var signUp = document.getElementById("signUpNow");
var login = document.getElementById("loginNow");

//chaeck all elements:
// console.log(uEmail,uName,uPassword,userInc,userExits,passwordInc,loginBtn,regBtn,signUp,login);

//function switch to sgin up =>
signUp.addEventListener("click" , showSignUpInp);

function showSignUpInp(){
    uName.classList.remove("d-none");
    login.classList.remove("d-none");
    signUp.classList.add("d-none");
    loginBtn.innerHTML= "Sign up now";
    document.querySelector(".form-group i").classList.add("d-none")
    document.querySelector(".fa-unlock-keyhole").classList.add("d-none")

}

//function switch to login =>
login.addEventListener("click" , showLoginInp);

function showLoginInp(){
    uName.classList.add("d-none");
    login.classList.add("d-none");
    signUp.classList.remove("d-none");
    loginBtn.innerHTML= "Login";
    document.querySelector(".form-group i").classList.remove("d-none")
    document.querySelector(".fa-unlock-keyhole").classList.remove("d-none")
}