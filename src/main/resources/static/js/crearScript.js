function validarFormulario() {
    
    var contrasena = $("#password").val();
    var confirm = $("#passwordrepeat").val();
    var form = $("#login-form");
    form.validate();
    var validation = form.valid();
    console.log(validation);
    if (confirm != contrasena){
        alert("Contraseña/confirmación no coincidentes");
    }else{
        if(validation==true){
                comprobarEmail();
        } 
    }   
}

function comprobarEmail() {
    var email =$("#useremail").val()
    //Petición Ajax
    $.ajax({
        url:"http://localhost:8080/api/user/"+email,
        type:'GET',
        dataType:'json',

        success:function(respuesta){
            console.log(respuesta);
            if(respuesta){
                window.alert("Email ya existe");
            }
            else{
                save();
            }
        },

        error:function(xhr, status){
            console.log(status);
        }
    });  
}

function save(){
//Capturar valores de los campos del documento html en
var datos={
    email:$("#useremail").val(),
    password:$("#password").val(),
    name:$("#username").val()
}

  //Convertir a JSON
  let datosPeticion=JSON.stringify(datos);

  //Petición Ajax
  $.ajax({
      url:"http://localhost:8080/api/user/new",
      data:datosPeticion,
      type:'POST',
      contentType:"application/JSON",
      
      success:function(respuesta){
        window.alert("Usuario creado correctamente");
      },

      error:function(xhr, status){
          console.log(status);
      }
  });
}