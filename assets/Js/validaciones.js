/*$(document).ready(function(){
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
*/

const expresiones = {
	//usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	pass: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}