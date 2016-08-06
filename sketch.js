//las variables son lugares n el computadr donde podemos guardar datos
//las variabls deben ser declaradas
var diametro;
//la declaración se hace una sola vez. no puede haber dos cosas que se llamen igual
//el valor se asigna con el signo =

diametro = 10;
//xisten dos tipos de variables.
//las globales, que se declaran por fuera de las funciones
//las locales, que hace parte de la función
//desde la consola (explorador) no puedo accder al valor de variables locales
//todo en javascript es una variable
//las funciones también deben ser declaradas
function miFunciónDelDia(){
  //para llamar una función debo escribir su nombre, incluyendo los paréntesis
}


function setup() {
  createCanvas(800,600);
  background(0,255,0,100);
}

function draw() {
  //para que el fondo se defina constantemente, definimos background en el draw (evita que veamos estela de figuras dibujadas)
   background(0,255,0,100);
  //para definir estilo de la elipse
  //primero el ancho de la línea de la elipse

 
  //ellipse(500,100,50,50);
  //primer número es ubicación en x
  //segundo número es ubicación en Y
  //tercero es valor horizontal de figura
  //
    estilo();
  //llamo a la función estilo
  ellipse(mouseX, mouseY, diametro, diametro)
  diametro = diametro +1;
 if(mouseX>width/2){
   muchasElipses(100);
 }else{
   background(255,0,0);
   muchasElipses(1000);
 }
  
  
 
  //con mouseX y mouseY, la figura seguirá las coordenadas del puntero del mouse.
}

//escribiremos nuestra primera funcion, para definir estilo
//declaro la funcion estilo por fuera del draw y el setup, como una vriable global
function estilo(){
   strokeWeight(10);
  //para quitar el borde de la elipse
  noStroke();
  //para cambiar color de la línea
  stroke(0, 0, 255/2, 100);
  //para darle color de relleno a la figura
  fill(200, 230, 100, 70);
}


function muchasElipses(cantidad){
  //ahora haremos una iteración
  // la estructura es for (inicio;condición; refresco){ acción a repetir}
 for (var i = 0; i<cantidad; i=i+1){ 
   //acción a repetir
   fill(random(255), random(255), random(255), random(255) );
   ellipse(random(width), random(height), 50, 50)
 }
  //se dibujará una elipse con una ubicación aleatoria
  //ellipse(random(width), random(height), 50, 50)
  
}