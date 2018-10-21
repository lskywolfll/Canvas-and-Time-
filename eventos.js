var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado); //evento escuchador de Teclas del teclado
var cuadrito = document.getElementById('area_de_dibujo') // usar el id que pusimos en nuestro canvas
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarlinea("red", 149, 149, 151, 151, papel); //Cordenada principal donde todo comienza

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
  // if(evento.keyCode == teclas.UP){
  //   console.log("Vamos pa arriva");
  //
var colorsito = "green"; //elegir el color que escogi para la Linea
var movimiento = 5; // Cuanto se traslada o desplaza la linea dibujando
  switch (evento.keyCode) {
    case teclas.UP:
    dibujarlinea(colorsito, x, y, x, y - movimiento, papel);
    y = y - movimiento;
    break;
    case teclas.DOWN:
    dibujarlinea(colorsito, x, y, x, y + movimiento, papel);
    y = y + movimiento;
    break;
    case teclas.LEFT:
    dibujarlinea(colorsito, x, y, x - movimiento, y, papel);
    x = x - movimiento;
    break;
    case teclas.RIGHT:
    dibujarlinea(colorsito, x, y, x + movimiento, y, papel);
    x = x + movimiento;
    break;
    default:
    console.log("otra tecla");
    break;
  }
}
