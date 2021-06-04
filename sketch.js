const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    
}

function draw(){

    // add condition to check if any background image is there to add
     if(bg){
         background(backgroundImg);
     }


    Engine.update(engine);

    // write code to display time in correct format here
    



}

async function getBackgroundImg(){

    // writing code to fetch time from API
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //changing the data in JSON format
    var responseJSON=await response.json();
    
    var time=responseJSON.datetime;
    
// writing code to slice the datetime
    var hour=time.slice(11,13);
    console.log(hour);
    

    
// adding conditions to change the background images from sunrise to sunset

if(0<=hour<=2){
    bg="sunrise1.png"
}
if(2<hour<=4){
    bg="sunrise2.png"
}
if(4<hour<=6){
    bg="sunrise3.png"
}
if(6<hour<=8){
    bg="sunrise4.png"
}
if(8<hour<=10){
    bg="sunrise5.png"
}
if(10<hour<=12){
    bg="sunrise6.png"
}
if(12<hour<=14){
    bg="sunset7.png"
}
if(14<hour<=16){
    bg="sunset8.png"
}
if(16<hour<=18){
    bg="sunset9.png"
}
if(18<hour<=20){
    bg="sunset10.png"
}
if(20<hour<=22){
    bg="sunset11.png"
}
if(22<hour<=24){
    bg="sunset12.png"
}






    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);

}

