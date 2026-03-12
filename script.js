const form = document.getElementById("login-form");
const loginContainer = document.getElementById("login-container");
const helloContainer = document.getElementById("hello-container");
const error = document.getElementById("login-error");

form.addEventListener("submit", function(e){

e.preventDefault();

let usuario = document.getElementById("username").value;
let contraseña = document.getElementById("password").value;

if(usuario === "admin" && contraseña === "1234"){

loginContainer.style.display = "none";
helloContainer.style.display = "block";

}else{

error.style.display = "block";

}

});