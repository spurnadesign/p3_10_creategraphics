let pg1, pg2; //pg3;
let img;
function setup() {
  var c= createCanvas(600, 600);
  c.parent("canvasWrapper");
  img = loadImage("img/relato_2_un invierno.png");
  pg1 = createGraphics(600,600);
  //pg2 = createGraphics (600, 600);
  pg2 = createGraphics (600, 600);
  //pg3 = createGraphics (100, 600);
}

function draw() {
//pg2.background(img);
//pg3.background(0,0,255);
//pg2.image(img,0,0); //si quiero la imagen por los lados en vez del fondo
//pg2.image(img,mouseX,mouseY);
//pg1.ellipse(width/2, height/2, 300, 300); dibuja elipse grande y captura esa elipse
//image(pg3, 0, 0);
var c= pg2.get(mouseX, mouseY);
var dis = dist(mouseX, mouseY, pmouseX, pmouseY);
var mdis = map (dis,0, 190, 5, 80);
print(dis);
pg2.background(img);
pg1.noStroke();
pg1.fill(c);
if (mouseIsPressed === true){ //se puede desactivar para que funcione sin apretar
pg1.ellipse(mouseX, mouseY, mdis, dis); //y ahora dibujas con el raton pequeñas imagenes
}
image(pg2, 0, 0); //si desactivas no la ves pero coge el color
image(pg1, 0, 0);
}
function saveIMG(){
  clear(); //sin clear coge fondo e imagen y con clear coge solo el circulo
  image(pg1,0,0);
  save("cercle.png");
}
function keyPressed(){
  if (key === "s" || key === "S");
    saveIMG();
}