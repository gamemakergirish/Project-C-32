const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour 
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
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format          
    if(hour>=12)
    { 
        text("Time : "+ hour%12 + " PM", 50,100);
    }
    else if(hour==0)
    { 
       text("Time : 12 AM",100,100);
    }
     else
    { 
       text("Time : "+ hour%12 + " AM", 50,100); 
    }    
}

async function getBackgroundImg(){
    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    console.log(response);
    //change the data in JSON format
    var responseJSON = await response.json(); 
    console.log(responseJSON);
    var datetime = responseJSON.datetime
    console.log(datetime);
    // write code slice the datetime
    hour = datetime.slice(11,13);
    console.log(hour); 
    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
       bg = "sunrise1.png" 
       text("Time : 5 AM",50,100)
    }
    else if(hour>=06 && hour<=08)
    {
        bg = "sunrise2.png" 
        text("Time : 7 AM",50,100)
    }
    else if(hour>=08 && hour<=10)
    {
        bg = "sunrise3.png" 
        text("Time : 9 AM",50,100)
    }
    else if(hour>=10 && hour<=12)
    {
        bg = "sunrise4.png" 
        text("Time : 11 AM",50,100)
    }
    else if(hour>=12 && hour<=15)
    {
        bg = "sunrise5.png" 
        text("Time : 13 PM",50,100)
    }
    else if(hour>=15 && hour<=18)
    {
        bg = "sunrise6.png" 
        text("Time : 16 PM",50,100)
    }
    else if(hour>=18 && hour<=19)
    {
        bg = "sunrise7.png"
        text("Time : 18 PM",50,100) 
    }
    else if(hour>=19 && hour<=20)
    {
        bg = "sunrise8.png" 
        text("Time : 19 PM",50,100)
    }
    else if(hour>=20 && hour<=21)
    {
        bg = "sunrise9.png" 
        text("Time : 20 PM",50,100)
    }
    else if(hour>=21 && hour<=22)
    {
        bg = "sunrise10.png" 
        text("Time : 21 PM",50,100)
    }
    else if(hour>=22 && hour<=23)
    {
        bg = "sunrise11.png"
        text("Time : 22 PM",50,100) 
    }
    else 
    {
        bg = "sunrise12.png" 
        text("Time : 2 AM",50,100)
    }
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg) 
    
}