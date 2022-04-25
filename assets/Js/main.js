const enlaces = document.getElementsByClassName("enlaces")[0];
const hamburguesa = document.getElementsByClassName("hamburguesa")[0];
const menuHamburguesa = document.getElementById("hamburguesa");
let abierto = false;

$(document).ready(function(){
    $("#error").hide();
    $("#back-form").submit(function(){
        var msg="";
        if($("#nombre").val().trim().length==0){
            msg="El nombre está en blanco!!";
            //$("error").html("El nombre está en blanco!!");
        }
        if($("#apellido").val().trim().length==0){
            msg=msg+"   El apellido está en blanco!!";
            //$("error").html("El nombre está en blanco");
        }
        //if($("#edad"<0)){
        //    msg=msg+"   La edad debe ser valida";
        //}
        if($("#edad").val()<=0){
            msg=msg+"   La edad debe ser valida!!";
        }
        if(msg!=""){
            $("#error").html(msg);
            $("#error").show();
            event.preventDefault();
        }
    });
});

const toggleMenu = () =>{
    enlaces.classList.toggle("enlaces2");
    enlaces.style.transition = "transform 0.5s ease-in-out"
}

hamburguesa.addEventListener("click", function(){
    toggleMenu();
    if(document.querySelector(".enlaces.enlaces2")){
        abierto=true;
    }else{
        abierto=false;
    }
})

window.addEventListener("click", function(e){
        this.console.log(e.target)
        if(abierto){
            if(e.target !== menuHamburguesa){
                toggleMenu();
                abierto=false;
            }
        }
})

window.addEventListener("resize", function(){
    if(screen.width >800){
        if(abierto){
            toggleMenu();
            enlaces.style.transition = "none";
            abierto=false;
        }
    }
})