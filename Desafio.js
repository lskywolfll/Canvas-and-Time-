var estado = 0;          // estado del click
var colorLinea = "blue";    // color a la linea

var area = document.getElementById('dibujito');
var papel = area.getContext("2d");
var x;                      // guardar coordenada en X
var y;                      // guardar coordenada en Y
document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse
// dibujo del borde

dibujarLinea("red", 0, 0, 300, 0, papel)
dibujarLinea("red", 300, 0, 300, 300, papel)
dibujarLinea("red", 300, 300, 0, 300, papel)
dibujarLinea("red", 0, 300, 0, 0, papel)

function presionarMouse(evento){
   estado = 1;
   x = evento.layerX;
   y = evento.layerY;
 }

function soltarMouse(evento){
  estado = 0;
  x = evento.layerX;
  y = evento.layerY;
}
function dibujarMouse(evento){
 if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
   dibujarLinea(colorLinea, x, y, evento.layerY, evento.layerX, papel); // cambiando el layer(Capa) y por x y viceversa podemos tener diversas estructuras
 }
 x = evento.layerX;
 y = evento.layerY;
}


// function tiempo(evento)
// {
//   displayTime
// }
var usuario = prompt("Limite de Tiempo ? ");
var limite = parseInt(usuario);
var tiempo_final = parseInt(prompt("Elige tu tiempo de actualizacion automatica para limpiar \n ej:1000 es un segundo"));
var cronometro;

    function detenerse()
    {
        clearInterval(cronometro);
    }

    function carga()
    {

        contador_s =0;

        contador_m =0;

        s = document.getElementById("segundos");

        m = document.getElementById("minutos");

        cronometro = setInterval(

            function(){

                if(contador_s == limite)
                {

                    contador_s = 0;

                    contador_m++;

                    m.innerHTML = contador_m;

                    if(contador_m == limite)

                    {

                        contador_m = 0;

                    }

                }
                s.innerHTML = contador_s;
                contador_s++;
            }

            ,1000);
    }

    //esta funcion permite la actualizacion automatica cada tiempo deseemos darle, creamos un bucle infinito

    function actualizar(){location.reload(true);}
     //Función para actualizar cada 4 segundos
      setInterval("actualizar()", tiempo_final);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();                  // Inicia el trazo
  lienzo.strokeStyle = color;          // Estilo de trazo (color)
  lienzo.lineWidth = 2;                // Ancho de la linea
  lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
  lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
  lienzo.stroke();                     // Dibuja con el estio de trazo
  lienzo.closePath();                  // Cierra el dibujo
}
