const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour,datetime,ampm,time;
var response, responseJSON;

function preload() {
    // create getBackgroundImg( ) here
    backgroundImg = loadImage("sunrise1.png");
    getBackgroundImg();
}

function setup(){
    createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


}

function draw(){

    if(backgroundImg)   { 
        background(backgroundImg);
    }



    Engine.update(engine);

    if(hour < 12 && hour > 0){
        ampm = "AM";
    }
    else {
        ampm = "PM";
    }

    textSize(25);
    text("Time : " + hour + ampm,20,50);


}

async function getBackgroundImg()   {

    response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    responseJSON = await response.json();
    console.log(responseJSON);

    time = responseJSON.datetime;
    console.log(time);
    hour = time.slice(11,13);
    console.log(hour);

    if (hour>=04 && hour<=06) {
        bg = "sunrise1.png";
    }
    else if (hour >= 06 && hour <= 08) {
        bg = "sunrise2.png";
    }
    else if(hour >= 08 && hour <= 10){
        bg = "sunrise3.png";
    }
    else if(hour >= 10 && hour <= 12){
        bg = "sunrise4.png";
    }
    else if(hour >= 12 && hour <= 14){
        bg = "sunrise5.png";
    }
    else if(hour >= 14 && hour <= 16){
        bg = "sunrise6.png";
    }
    else if(hour >= 16 && hour <= 18){
        bg = "sunset7.png";
    }
    else if(hour >= 18 && hour <= 20){
        bg = "sunset8.png";
    }
    else if(hour >= 20 && hour <= 23){
        bg = "sunset9.png";
    }
    else if (hour >= 23 && hour == 0) {
        bg = "sunset10.png";
    }
    else if (hour == 0 && hour <= 03) {
        bg = "sunset11.png";
    }
    else {
        bg = "sunset12.png";
    }

    backgroundImg = loadImage(bg);

   // console.log(hour);

}
