var serve = 0
var play = 1
var gameState = serve;
var ant,antimage;
var forest,forestimage;
var rock,rockimage;
var pangolin,pangolinimage;
var spyder,spyderimage;
var webofspyder,webofspyderimage;
var start,startimg;



function preload(){
antimage=loadImage("Ant.png")
forestimage=loadImage("jungle.jpg")
pangolinimage=loadImage("pangolin.png")
rockimage=loadImage("rock.png")
spyderimage=loadImage("spyder.png")
webofspyderimage=loadImage("web of spyder.png")
startimage=loadImage("start-button.png")
Q1img=loadImage("q1.PNG")
A1img=loadImage("a1.PNG")
A2img=loadImage("a2.PNG")
Q2img=loadImage("q2.PNG")
A3img=loadImage("a3.PNG")
A4img=loadImage("a4.PNG")
Q3img=loadImage("q3.PNG")
A5img=loadImage("a5.PNG")
A6img=loadImage("a6.PNG")
}

function setup() {
  createCanvas(displayWidth*1.5, 600);

  Q1=createSprite(displayWidth+90,450,50,50)
  Q1.addImage("q1",Q1img)
  Q1.scale=0.3
  Q1.visible=false

   A1=createSprite(displayWidth+50,480,50,50)
  A1.addImage("a1",A1img)
  A1.scale=0.3
  A1.visible=false

  A2=createSprite(displayWidth+140,480,50,50)
  A2.addImage("a2",A2img)
  A2.scale=0.3
  A2.visible=false

  Q2=createSprite(displayWidth+90,450,50,50)
  Q2.addImage("q1",Q1img)
  Q2.scale=0.3
  Q2.visible=false

   A3=createSprite(displayWidth+50,480,50,50)
  A3.addImage("a1",A1img)
  A3.scale=0.3
  A3.visible=false

  Q3=createSprite(150,530,50,50)
  Q3.addImage("q3",Q3img)
  Q3.scale=0.3
  Q3.visible=false

  A4=createSprite(displayWidth+140,480,50,50)
  A4.addImage("a2",A2img)
  A4.scale=0.3
  A4.visible=false

   A5=createSprite(160,560,50,50)
  A5.addImage("a5",A5img)
  A5.scale=0.3
  A5.visible=false

  ant=createSprite(displayWidth*1.5-20,530,50,50)
 ant.addImage("ant",antimage)
 ant.scale=0.1


 rock=createSprite(25,530,50,50)
 rock.addImage("rock",rockimage)
 rock.scale=0.4

 spyder=createSprite(displayWidth+90,530,50,50)
 spyder.addImage("spyder",spyderimage)
 spyder.scale=0.2
 spyder.visible=false

 webofspyder=createSprite(displayWidth/2+80,510,50,50)
 webofspyder.addImage("webofspyder",webofspyderimage)
 webofspyder.scale=0.3
 webofspyder.visible=false

 pangolin=createSprite(150,530,50,50)
 pangolin.addImage("pangolin",pangolinimage)
 pangolin.scale=0.3
 pangolin.visible=false

 start=createSprite(displayWidth/2,130,50,50)
 start.addImage("move",startimage)
 start.scale=0.4


}

function draw() {
  if(gameState===serve)
  {
    background("black")
    textSize(20)
    fill ("yellow")
    text("ANT AND MAZE",displayWidth/2-80,40)
    text("Click To Start",displayWidth/2-60,250)
    text("NOTE:",displayWidth/7-4,360)
    text("Ant will reches the home in the way the animals will come infront of",displayWidth/5-4,400)
   text (" it then question will come u will choose answer u move to the next are",displayWidth/5-4,440)
    text (" you tell incorrect answer you will come back.",displayWidth/5-4,480)
    if(mousePressedOver(start)){
      gameState=play
    }
  }
 
if(gameState===play){
  start.visible=false
  background(forestimage)
 if(mousePressedOver(ant)){
   ant.velocityX=-3
 }
console.log(spyder.x)
//spyder code
if(ant.x===1450){
  spyder.visible=true
  ant.velocityX=0
  Q1.visible=true
  A1.visible=true
  A2.visible=true

  if(mousePressedOver(A1)){
 

   Q1.destroy()
   A1.destroy()
   A2.destroy()
   textSize(10)
   fill("yellow")
   text("YOU CAN GO AHEAD",displayWidth+90,450)
ant.velocityX=-3
  spyder.visible=false
  }
  else if(mousePressedOver(A2)){
    
    ant.x=displayWidth*1.5-20
    Q1.destroy()
    A1.destroy()
    A2.destroy()
    textSize(10)
   fill("yellow")
   spyder.visible=false
    text("WORNG ANSWER",displayWidth+90,450)
  }
}
//end of the spyder code

//web of spyder code

else if(ant.x===1600){
  webofspyder.visible=true
  ant.velocityX=-20
  Q2.visible=true
  A3.visible=true
  A4.visible=true

  if(mousePressedOver(A4)){
 

   Q2.destroy()
   A3.destroy()
   A4.destroy()
   textSize(10)
   fill("yellow")
   text("YOU CAN GO AHEAD",displayWidth/2+80,510)
ant.velocityX=-6
  webofspyder.visible=false
  }
  else if(mousePressedOver(A3)){
    
    ant.x=displayWidth*15-20
    Q2.destroy()
    A3.destroy()
    A4.destroy()
    textSize(10)
   fill("yellow")
   text("WORNG ANSWER",displayWidth/2+80,510)
   webofspyder.visible=false
    
   //end of the web of spyder code

  }
}
//pangolin code
else if(ant.x===1800){
  pangolin.visible=true
  ant.velocityX=10
  Q3.visible=true
  A5.visible=true
  A6.visible=true

  if(mousePressedOver(A5)){
 

   Q3.destroy()
   A5.destroy()
   A6.destroy()
   textSize(10)
   fill("yellow")
   text("YOU CAN GO AHEAD",displayWidth/2+80,510)
ant.velocityX=-3
  pangolin.visible=false
  }
  else if(mousePressedOver(A6)){
    
    ant.x=displayWidth*1.5-20
    Q3.destroy()
    A5.destroy()
    A6.destroy()
    textSize(10)
   fill("yellow")
   text("WORNG ANSWER",displayWidth/2+80,510)
   pangolin.visible=false
  }
}


//end of pangolin code

if(ant.x===0){
  text ("gameover")
  text("CONGRATULATIONS")
}
  




  }
drawSprites();

}