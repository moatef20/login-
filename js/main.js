// get all elements from HTML:
var uEmail = document.getElementById("emailInp");
var uName = document.getElementById("nameInp");
var uPassword = document.getElementById("passwordInp");
var userInc = document.getElementById("alertUserIncorrect");
var userExits = document.getElementById("alertUserExits");
var passwordInc = document.getElementById("alertPasswordIncorrect");
var loginBtn = document.getElementById("loginBtn");
var regBtn = document.getElementById("regBtn");
var signUp = document.getElementById("signUpNow");
var login = document.getElementById("loginNow");

//chaeck all elements:
// console.log(uEmail,uName,uPassword,userInc,userExits,passwordInc,loginBtn,regBtn,signUp,login);

// master array of users credentials:
var usersCredentials = [];

// get users cred in login:
if(localStorage.getItem("users credentials") != null){
    usersCredentials = JSON.parse(localStorage.getItem("users credentials"))
};

//function switch to sgin up =>
signUp.addEventListener("click" , showSignUpInp);

function showSignUpInp(){
    uName.classList.remove("d-none");
    login.classList.remove("d-none");
    signUp.classList.add("d-none");
    loginBtn.classList.add("d-none");
    regBtn.classList.remove("d-none");
    document.querySelector(".form-group i").classList.add("d-none")
    document.querySelector(".fa-unlock-keyhole").classList.add("d-none")
}

//function switch to login =>
login.addEventListener("click" , showLoginInp);

function showLoginInp(){
    uName.classList.add("d-none");
    login.classList.add("d-none");
    signUp.classList.remove("d-none");
    loginBtn.classList.remove("d-none");
    regBtn.classList.add("d-none");
    document.querySelector(".form-group i").classList.remove("d-none")
    document.querySelector(".fa-unlock-keyhole").classList.remove("d-none")
}

// add new user function =>
regBtn.addEventListener("click",signNewUsers)
function signNewUsers(){
    if(validatePassword()==true){
        var user = {
            user_name: uName.value,
            user_email: uEmail.value,
            user_password: uPassword.value,
        }
        usersCredentials.push(user);
        localStorage.setItem("users credentials" , JSON.stringify(usersCredentials) )
        clearForm ();
        showLoginInp(usersCredentials);
        // console.log(user)
        // console.log(usersCredentials)
    }
    else{
        alert("password is not valid")
    }
    
};

//password validate function =>
function validatePassword(){
    let regex = /^[a-z]{8,20}[A-Z]{1,20}[0-9]{0,10}$/;
    if (regex.test(uPassword.value)== true){
        return true;
    }
    else{
        return false;
    }
}

// clear signup form function =>
function clearForm (){
    uName.value="";
    uEmail.value="";
    uPassword.value="";
}