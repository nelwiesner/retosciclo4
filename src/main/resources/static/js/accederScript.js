function acceder() {
    var correo =$("#useremail").val()
    var contrasena =$("#password").val()
    if (contrasena == ""){
        alert("Escriba la contraseña");
    }else{
        //Petición Ajax
    $.ajax({
        url:"http://localhost:8080/api/user/"+correo+"/"+contrasena,
        type:'GET',
        dataType:'json',

        success:function(respuesta){
            console.log(respuesta);
            comprobarRespuesta(respuesta);
        },

        error:function(xhr, status){
            console.log(status);
        }
    });
    }
}
  
function comprobarRespuesta(respuesta){

var nombre = respuesta.name;
    if (nombre == "NO DEFINIDO"){
    alert("combinación de usuario y contraseña herradas");        
    }else{
        alert("Bienvenido "+nombre);
    }     
}