var canvas = new fabric.Canvas('myCanvas');

playerX= 10;
playerY= 10;

blockImageWidth= 30;
blockImageHeight= 30;

var playerObject= "";
var blockImageObject= "";

function playerUpdate(){
 fabric.Image.fromURL("player.png", function(Img){
    playerObject= Img;

    playerObject.scaleToWidth(150);
    playerObject.scaleToHeight(140);
   playerObject.set({
    top: playerY,
    left:playerX
   });
   canvas.add(playerObject);
 });

}
function newImage(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        blockImageObject= Img;
   
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
       top: playerY,
       left:playerX
      });
      canvas.add(blockImageObject);
    });
   
   }

   window.addEventListener("keydown", myKeyDown);

   function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey==true && keyPressed=='80'){
      blockImageWidth= blockImageWidth+10;
      blockImageHeight=blockImageHeight+10;
      document.getElementById("currentWidth").innerHTML=blockImageWidth;      
      document.getElementById("currentHeight").innerHTML=blockImageHeight;      
    }
    
    if(e.shiftKey==true && keyPressed=='77'){
      blockImageWidth= blockImageWidth-10;
      blockImageHeight=blockImageHeight-10;
      document.getElementById("currentWidth").innerHTML=blockImageWidth;      
      document.getElementById("currentHeight").innerHTML=blockImageHeight;      
    }
  
      if(keyPressed=='38'){
        console.log("cima");
        up();
      }

      if(keyPressed=='40'){
        console.log("baixo");
        down();
      }
      if(keyPressed=='37'){
        console.log("esquerda");
        left();
      }
      if(keyPressed=='39'){
        console.log("direita");
        right();
      }
      if(keyPressed=='87'){
        newImage('wall.jpg');
        console.log("w");
       
      }
      
      if(keyPressed=='71'){
        newImage('ground.png');
        console.log("g");
       
      }
      if(keyPressed=='76'){
        newImage('light_green.png');
        console.log("l");
       
      }
      if(keyPressed=='84'){
        newImage('trunk.jpg');
        console.log("t");
       
      }
      if(keyPressed=='82'){
        newImage('roof.jpg');
        console.log("r");
       
      }
      if(keyPressed=='89'){
        newImage('yellow_wall.png');
        console.log("y");
       
      }
      if(keyPressed=='68'){
        newImage('dark_green.png');
        console.log("d");
       
      }
      if(keyPressed=='85'){
        newImage('unique.png');
        console.log("u");
       
      }
      if(keyPressed=='67'){
        newImage('cloud.jpg');
        console.log("c");
       
      }

   }










   