var img="";
var status="";
objects=[];

function preload(){
    img=loadImage("caoegato.jpg");
}
function setup(){
    canvas =createCanvas(600,380);
    canvas.center();
    detector=ml5.objectDetector("cocossd",modelo);
    document.getElementById("status").innerHTML="detectando objetos";
}
function modelo(){
    console.log("carregado");
    status=true;
    detector.detect(img,resultado);

}
function resultado(error,results){
if(error){
    console.error(error);

}
console.log(results);
objects= results;
}
function draw(){
    image(img,0,0,600,380);
  
    /* fill("red");
    text("cat",230,36);
    noFill();
    stroke("red");
    rect(100,0,200,350);

    fill("yellow");
    text("dog",300,36);
    noFill();
    stroke("yellow");
    rect(200,20,300,350);*/
if(status !=""){
    for(i=0;i <objects.length;i++){
        document.getElementById("status").innerHTML="status:Objeto Detectado";
        fill("#FF0000");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label +" " + percent +"%", objects[i].x,objects[i].y);
        noFill();
stroke("#FF0000");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}
}