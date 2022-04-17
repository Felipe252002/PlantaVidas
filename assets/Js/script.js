document.getElementById("btn-iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn-registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declaracion de variables
var contenedor_login_register = document.querySelector(".contenedor-login-register");
var formulario_login = document.querySelector(".form-login");
var formulario_register = document.querySelector(".form-register");
var box_login = document.querySelector(".box-login");
var box_register = document.querySelector(".box-register");

function anchoPage(){
    if(window.innerWidth > 850){
        box_login.style.display = "block";
        box_register.style.display = "block";
    }else{
        box_register.style.display = "block";
        box_register.style.opacity = "1";
        box_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

anchoPage();

function iniciarSesion(){

    if(window.innerWidth > 850){
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        box_register.style.opacity = "1";
        box_login.style.opacity = "0";
    }else{
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        box_register.style.display = "block";
        box_login.style.display = "none";
    }
}
function register(){
    if(window.innerWidth > 850){
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        box_register.style.opacity = "0";
        box_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        box_register.style.display = "none";
        box_login.style.display = "block";
        box_login.style.opacity = "1";
    }
}