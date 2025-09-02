
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let cycleCompleted=false
let textPositionx=500
let textPositiony=600
let wordSize=15
let butterflyPosx=100
let butterflyPosy=100
let butterflySize=40
let butterflyColor=[]


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(240, 250, 249,25)
  
  //let wordSize=map(vocal,0,100,50,100)
let midx=canvasWidth/2
let midy=canvasHeight/2

  
  
   // please use CSS safe fonts
   textSize(26)
  textFont('Papyrus');
  stroke('black')
text('INU', 1220,660)
text('JC-T', 1200,700)
  textSize(wordSize)
  textFont('Papyrus');
  if(!cycleCompleted){ 
  text('I N U', textPositionx, textPositiony);

   textPositiony +=2;
   wordSize +=0.4;


 if (textPositiony>canvasHeight*2/3) {
   textPositiony=0
     }
 if(wordSize>100){
   wordSize=100; 
   cycleCompleted=true
   }
  }

  
  //draw circle
  let xPos=600
  let yPos=600
  let size=frameCount*0.6
  let insideSize=frameCount*0.5
  let innerSize=frameCount*0.3
  let inSize=frameCount*0.2
  let Tmap = map(size, 0,1000, 50,0)
for(let yPos=-100; yPos<700;yPos++){
  yPos=yPos+150
for(let xPos=-200; xPos<1200;xPos++){
  xPos=xPos+200
  stroke(87, 168, 212, Tmap)
  strokeWeight(random(0.7,1))
  noFill()
  ellipse(xPos,yPos,size,size/2)
  if (size>150){
  strokeWeight(random(0.8,1))
  noFill()
  ellipse(xPos,yPos,insideSize,insideSize/2)
  }
  if (insideSize>100){
  strokeWeight(random(0.8,1))
  noFill()
  ellipse(xPos,yPos,innerSize,innerSize/2)
  }
  if (innerSize>100){
  strokeWeight(random(0.8,1))
  noFill()
  ellipse(xPos,yPos,inSize,inSize/2)
  }
}
  }


//draw butterfly

//for(i=4.5; i<20;i++){


colorMode(RGB)
let c1=color(245, 243, 144)
let c2=color(144, 210, 232)
let c3=color(250, 192, 236)
butterflyColor=[c1,c2,c3]
let randomColor=random(butterflyColor)
//
if (Tmap=0){
beginShape()
stroke(48, 54, 53)
strokeWeight(1)
let linePos=330
vertex()
line(0,linePos,1280,linePos)
line(0,linePos+20,1280,linePos+20)
line(0,linePos+40,1280,linePos+40)
line(0,linePos+60,1280,linePos+60)
line(0,linePos+80,1280,linePos+80)

endShape()
}
// push()
// angleMode(DEGREES)
// noStroke()
// fill(randomColor)

// pop()
// let outMap=map(bass,0,100,150,600)
// push();
// angleMode(DEGREES)
// noStroke()
// fill(randomColor)
// translate(0,720)
// ellipse(0,outMap,butterflySize/2,butterflySize);
// rotate(45)
// ellipse(0,outMap,butterflySize/2,butterflySize)


// pop()


//}
// function drawButterfly(){
//   push();
// angleMode(DEGREES)
// let outMap = map(bass, 0, 100, -100,-900)
// ellipse(0,outMap,butterflySize/2,butterflySize);
// rotate(45)
// ellipse(0,outMap,butterflySize/2,butterflySize);



// pop();}



// // guitar
// stroke(200,170,120)
// strokeWeight(1)
// noFill()

// drawGuitarBody()
// //drawGuitarNeck()
// //drawGuitarHead()
// //drawSoundHole()
// function drawGuitarBody(){
// line(0,midy,2*midx,midy)
// line(midx,0,midx,midy*2)


// push()
//   stroke(139,90,43)
//   strokeWeight(1)
//   noFill()
//   beginShape()
//   vertex(-320,180)
//   //up
//   quadraticVertex(-320, 0, 0, 150);
//   quadraticVertex(0, 0, 108, 0);
//   Vertex(108, 0);
//   Vertex(320, -170);
//   //down
  
//   endShape(CLOSE);
//   pop();
//         }
// }




















}
