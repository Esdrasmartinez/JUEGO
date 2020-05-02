
var x = document.getElementById("img_opcion");
var lienzo = x.getContext("2d");
////////////////////////////////////////////////////////////////
var y = document.getElementById("user_img");
var lienzo2 = y.getContext("2d");
//////////////////////////////////////////////////////////////////
var z = document.getElementById("vs");
var contra = z.getContext("2d");

var a = document.getElementById("canvas_resultado");
var result = a.getContext("2d");
//////////////////////////////////////////////////////////////////////////////////////////
var opciones = [];
opciones[0] = "nada";
opciones[1] = "Papel";
opciones[2] = "Tijeras";
opciones[3] = "Piedra";
var boton_piedra = document.getElementById("boton_piedra");

var resultado = {
    urlgood: "ganaste.png",
    urlbad: "perdiste.png",
    urlempate: "empate.png",
    cargaOk : false
};

var borrar = {

    url_tijeras: "tijeras.png",
    carga_tijeras : false,
    url_papel : "papel.png",
    carga_papel : false,
    url_piedras: "piedras.png",
    carga_piedra : false,
    borrar: "borrar.png",
    cargarBorrar : false
};
boton_piedra.addEventListener("click",pc_opcion1);


function pc_opcion1() {
  var vs = new Image();
  vs.src = "vs.png";
  vs.addEventListener("load",mostrarVs);
  function mostrarVs() {
    contra.drawImage(vs,0,0);
    resultado.cargaOk = true;
  }

/////////////////////////////////////////////////////////////////////////////////////////////
  var img_user = new Image();
  img_user.src = "piedra.png";
  img_user.addEventListener("load",dibujerUser);

  function dibujerUser() {

    lienzo2.drawImage(img_user,0,0);

  }
//////////////////////////////////////////////////////////////////////////////////////////////
  function random(min,maxi) {
    var num = Math.floor(Math.random()* (maxi - min + 1)) + min;
    return num;
  }
/////////////////////////////////////////////////////////////////////////////////////////////
  var opcion = random(1,3);

  console.log(opciones[opcion]);

  if ("Piedra" == opciones[opcion]){
    console.log("Empate")


//////////////////////////////////////////////////////////////////////////////////////////////////
    var img_piedra = new Image();
    img_piedra.src = "piedra.png";
    img_piedra.addEventListener("load",carga_piedra);

    function carga_piedra() {
          lienzo.drawImage(img_piedra,0,0);
}
    //////////////////////////////////////////////////////////////////////////////////////////////
      var empate = new Image();
      var fondo = new Image();
      empate.src = resultado.urlempate;
      fondo.src = "background.png";
      empate.addEventListener("load",dibujar);
      fondo.addEventListener("load",dibujar);

      function dibujar() {
            if(resultado.cargaOk){
              result.drawImage(fondo,0,0);
            }
            if(resultado.cargaOk){
            result.drawImage(empate,0,0);
            }
      }


}


  else if (opciones[opcion] != opciones[2] && opciones[opcion] != opciones[3]){
        console.log("Perdiste");
        var img_papel= new Image();
        img_papel.src = "papel.png";
        img_papel.addEventListener("load",mostrarPapel);
        function mostrarPapel() {
          lienzo.drawImage(img_papel,0,0);
        }

        var pierde = new Image();
        var fondo = new Image();
        pierde.src = "perdiste.png";
        fondo.src = "background.png";
        pierde.addEventListener("load",dibujar);
        fondo.addEventListener("load",dibujar);

        function dibujar() {
              if(resultado.cargaOk){
                result.drawImage(fondo,0,0);
              }
              if(resultado.cargaOk){
              result.drawImage(pierde,0,0);
              }
        }
      }
else if (opciones[opcion] != opciones[1] && opciones[opcion] != opciones[3]){
        console.log("Ganaste");
        var img_tijeras = new Image();
        img_tijeras.src = "tijeras.png";
        img_tijeras.addEventListener("load",mostrarTijeras);
        function mostrarTijeras() {
          lienzo.drawImage(img_tijeras,0,0);

          var gana = new Image();
          var fondo = new Image();
          gana.src = "ganaste.png";
          fondo.src = "purple.png";
          gana.addEventListener("load",dibujar);
          fondo.addEventListener("load",dibujar);

          function dibujar() {
                if(resultado.cargaOk){
                  result.drawImage(fondo,0,0);
                }
                if(resultado.cargaOk){
                result.drawImage(gana,0,0);
                }
          }
        }
      }
  }
