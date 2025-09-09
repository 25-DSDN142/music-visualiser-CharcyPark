// vocal, drum, bass, and other are volumes ranging from 0 to 100

let cycleCompleted=false
let textPositionx=500
let textPositiony=600
let wordSize=15
let butterflyColor=[]
let butterflyDis=[]
let pointStarx1=0
let pointStarx2=0 
let pointStarx3=0 
let pointStarx4=0 
let pointStarx5=0 
let lineFinshPoint=0
let isRaining=true
let rainCount;
let speedFactor
var cloudPosx=0



function draw_one_frame(words, vocal, drum, bass, other, counter) {
  //varibles
frameRate(30)
speedFactor=noise(frameCount*0.01)
  let size=frameCount*0.6
  let insideSize=frameCount*0.5
  let innerSize=frameCount*0.4
  let inSize=frameCount*0.2
  let Tmap = map(size, 0,1000, 50,0)
  rainCount=map(Tmap,50,0,1000,0)
  push()
  colorMode(HSB)
  background(map(Tmap,50,10,230,220), 50, map(Tmap,50,0,75,100),10)
  pop()
  //let wordSize=map(vocal,0,100,50,100)
let midx=canvasWidth/2
let midy=canvasHeight/2
 
   // please use CSS safe fonts
  textSize(26)
  textFont('Papyrus');
  stroke(253, 255, 122,150)
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
  


for(let yPos=-100; yPos<700;yPos++){
  yPos=yPos+150
for(let xPos=-200; xPos<1200;xPos++){
  xPos=xPos+200
  stroke(232, 249, 250, Tmap)
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
//draw rains
if(isRaining=true){
  stroke(180, 220, 255, 100); 
  strokeWeight(2);
  
  for (let i = 0; i < rainCount; i++) {
        let x = random(midx*2);
        let y = random(midy*2);
        line(x, y, x + 5, y + 15);
            }
}  
 


//doing the point moving  
let pointStar1=linePos=330
let pointStar2=linePos+20
let pointStar3=linePos+40
let pointStar4=linePos+60
let pointStar5=linePos+80
let hue1
let hue2
let hue3
let hue4
let hue5
let sat1
let sat2
let sat3
let sat4
let sat5
let bri
let sat

hue1=map(bass,0,100,9,24)
hue2=map(bass,0,100,40,100)
hue3=map(bass,0,100,220,250)
hue4=map(bass,0,100,280,320)
hue5=map(bass,0,100,330,360)
sat1=map(pointStarx1,0,1280,0,100)
sat2=map(pointStarx2,0,1280,0,100)
sat3=map(pointStarx3,0,1280,0,100)
sat4=map(pointStarx4,0,1280,0,100)
sat5=map(pointStarx5,0,1280,0,100)
bri=map(vocal,0,100,80,100)
if (Tmap>40&&Tmap<45){
  
  push()
  colorMode(HSB)
  
  fill(hue1,sat1,bri)
  noStroke()
  ellipse(pointStarx1,pointStar1,10,10)
  pointStarx1=pointStarx1+10
  pop()
  if(pointStarx1>1280){pointStarx1=0}
  if(pointStarx1>100){
    push()
    colorMode(HSB)
    fill(hue2,sat2,bri)
    noStroke()
    ellipse(pointStarx2,pointStar2,10,10)
    pointStarx2=pointStarx2+10
  pop()
  if(pointStarx2>1280){pointStarx2=0}
  if(pointStarx2>100){
    push()
    colorMode(HSB)
    fill(hue3,sat3,bri)
    noStroke()
    ellipse(pointStarx3,pointStar3,10,10)
    pointStarx3=pointStarx3+10
    pop()
    if(pointStarx3>1280){pointStarx3=0}
    if(pointStarx3>100){
      push()
      colorMode(HSB)
      fill(hue4,sat4,bri)
      noStroke()
      ellipse(pointStarx4,pointStar4,10,10)
      pointStarx4=pointStarx4+10
      pop()
      if(pointStarx4>1280){pointStarx4=0}
      if(pointStarx4>100){
        push()
        colorMode(HSB)
        fill(hue5,sat5,bri)
        noStroke()
        ellipse(pointStarx5,pointStar5,10,10)
        pointStarx5=pointStarx5+10
        pop()
      }
      if(pointStarx5>1280){
        pointStarx5=0
      }
    }
  }

  }

//lines appear  
} if(Tmap>30&&Tmap<40){
        hue1=map(bass,0,100,9,24)
        bri=map(drum,0,100,80,100)
        sat=map(vocal,0,100,50,100)
        hue2=map(bass,0,100,40,100)
        hue3=map(bass,0,100,220,250)
        hue4=map(bass,0,100,280,320)
        hue5=map(bass,0,100,330,360)
            
        let linePos=330
        lineFinshPoint=lineFinshPoint+6
        if(lineFinshPoint<=1280){

        push()
        colorMode(HSB)
        stroke(hue1,sat,bri)
        strokeWeight(1)
        line(0,linePos,lineFinshPoint,linePos)
        stroke(hue2,sat,bri)
        line(0,linePos+20,lineFinshPoint,linePos+20)
        stroke(hue3,sat,bri)
        line(0,linePos+40,lineFinshPoint,linePos+40)
        stroke(hue4,sat,bri)
        line(0,linePos+60,lineFinshPoint,linePos+60)
        stroke(hue5,sat,bri)
        line(0,linePos+80,lineFinshPoint,linePos+80)
        pop()}
        
}
if(Tmap<30){
        hue1=map(bass,0,100,9,24)
        bri=map(drum,0,100,80,100)
        sat=map(vocal,0,100,50,100)
        hue2=map(bass,0,100,40,100)
        hue3=map(bass,0,100,200,250)
        hue4=map(bass,0,100,280,320)
        hue5=map(bass,0,100,330,360)

        let linePos=map(vocal,0,100,330,430)
        let controlPointx=map(drum,0,100,450,900)
        let controlPointy=map(vocal,0,100,-100,150)
        let controlPointy1=map(vocal,0,100,-90,140)

        push()
        colorMode(HSB)
        stroke(hue1,sat,bri)
        strokeWeight(1)
        //first line
        
        beginShape()
        vertex(0,linePos)
        quadraticVertex(controlPointx,linePos-controlPointy,1280,linePos)
        endShape()


        //second line
        stroke(hue2,sat,bri)
        beginShape()
        vertex(0,linePos+20)
        quadraticVertex(controlPointx+20,linePos+20-controlPointy1,1280,linePos+20)
        endShape()
       //third line
        stroke(hue3,sat,bri)
        beginShape()
        vertex(0,linePos+40)
        quadraticVertex(controlPointx+30,linePos+40-controlPointy,1280,linePos+40)
        endShape()



      //forth line  
        stroke(hue4,sat,bri)
        beginShape()
        vertex(0,linePos+60)
        quadraticVertex(controlPointx+50,linePos+60-controlPointy1,1280,linePos+60)
        endShape()


      //fifth line  
        stroke(hue5,sat,bri)
        beginShape()
        vertex(0,linePos+80)
        quadraticVertex(controlPointx,linePos+80-controlPointy,1280,linePos+80)
        endShape()




        pop()
        


}


//draw butterfly and light
let d1=10
let d2=14
let d3=18
let d4=25
let d5=46
butterflyDis=[d1,d2,d3,d4,d5]
let randomDis=random(butterflyDis)
if (Tmap<20){
  push()
drawButterfly(map(drum,0,100,10,700),(randomDis*3+450),random(60,70))
drawButterfly(map(bass,0,100,10,700),randomDis*5,random(75,85))
       push()
       angleMode(DEGREES)
       translate(650,270)
       var r=80
       let angleButterfly=map(vocal,0,100,0,180)
      drawButterfly(r*sin(angleButterfly),r*cos(angleButterfly),map(drum,0,60,35,65))
      pop()
      push()
      translate(650,600)
      drawButterfly((r+40)*sin(-angleButterfly),(r+20)*cos(angleButterfly),map(bass,0,60,35,65))
       pop()
       push()
      translate(450,600)
      drawButterfly(r*sin(-angleButterfly),(r+50)*cos(angleButterfly),map(bass,0,60,35,65))
       pop()
         push()
      translate(850,600)
      drawButterfly(r*sin(-angleButterfly),r*cos(angleButterfly),map(bass,0,60,35,65))
       pop()
         push()
      translate(450,270)
      drawButterfly(r*sin(angleButterfly),r*cos(angleButterfly),map(bass,0,60,35,65))
       pop()
      push()
      translate(850,270)
      drawButterfly((r+130)*sin(angleButterfly),r*cos(angleButterfly),map(bass,0,60,35,65))
       pop()
  pop()

push()
drawFlowers(midx*2*speedFactor,midy/2*speedFactor,map(vocal,30,100,30,120)*speedFactor,8)
drawFlowers(midx*2*speedFactor,midy*3/2*speedFactor,map(vocal,30,100,50,200)*speedFactor,8)
drawFlowers(650,270,map(vocal,30,100,30,280),map(vocal,0,100,8,20))
drawFlowers(650,600,map(vocal,30,100,50,280),map(vocal,0,100,8,20))
drawFlowers(450,600,map(vocal,30,100,50,180),map(drum,0,100,8,20))
drawFlowers(450,270,map(vocal,30,100,30,180),map(drum,0,100,8,20))
drawFlowers(850,270,map(vocal,30,100,30,180),map(drum,0,100,8,20))
drawFlowers(850,600,map(vocal,30,100,50,180),map(drum,0,100,8,20))
pop()



//Draw Hearts
drawHearts()



//DRAW Clouds
if(rainCount<300&&rainCount>30){
push()
let cloudPosy=map(bass,0,100,150,200)*speedFactor
cloudPosx+=1
drawClouds(cloudPosx+50,cloudPosy-110,50,map(rainCount,300,50,80,0))
drawClouds(cloudPosx+250,cloudPosy-80,50,map(rainCount,300,50,80,0))
drawClouds(cloudPosx+900,cloudPosy-100,40,map(rainCount,300,50,100,0))
drawClouds(cloudPosx+300,cloudPosy-25,55,map(rainCount,300,50,100,0))
drawClouds(cloudPosx+400,cloudPosy,50,map(rainCount,300,50,90,0))
drawClouds(cloudPosx+200,cloudPosy-120,35,map(rainCount,300,50,70,0))
drawClouds(cloudPosx,cloudPosy-10,35,map(rainCount,300,50,60,0))
drawClouds(cloudPosx+160,cloudPosy-60,50,map(rainCount,300,50,65,0))
drawClouds(cloudPosx+1100,cloudPosy-100,40,map(rainCount,300,50,100,0))
drawClouds(cloudPosx+800,cloudPosy-30,55,map(rainCount,300,50,110,0))
drawClouds(cloudPosx+1000,cloudPosy-50,70,map(rainCount,300,50,100,0))
drawClouds(cloudPosx+500,cloudPosy-120,35,map(rainCount,300,50,90,0))




pop()
}

//draw lights
if(rainCount<100){
push()
noStroke()
fill(239, 245, 171,map(vocal,0,100,2,30))
drawLights(map(bass,0,100,500,800),map(bass,0,100,700,800),0,0)
if(rainCount<90){
drawLights(map(vocal,0,100,700,800),map(vocal,0,100,700,800),150,0)}
if(rainCount<50){
drawLights(map(bass,0,100,1280,1400),map(vocal,0,100,700,800),650,0)}
if(rainCount<30){
drawLights(map(vocal,0,100,700,800),map(vocal,0,100,700,800),300,0)
drawLights(map(bass,0,100,1280,1400),map(vocal,0,100,700,800),700,0)
drawLights(map(vocal,0,100,1300,1400),map(vocal,0,100,400,680),550,0)}

pop()}
}


}


function drawButterfly(butterflyPosx,butterflyPosy,butterflySize){

colorMode(RGB)
let c1=color(245, 243, 144,random(100,160))
let c2=color(144, 210, 232,random(100,160))
let c3=color(250, 192, 236,random(100,160))
butterflyColor=[c1,c2,c3]
let randomColor=random(butterflyColor)
let randomAngle=random(68,75)
push()
noStroke()
translate(butterflyPosx,butterflyPosy)
angleMode(DEGREES)
fill(randomColor)
ellipse(0,0,butterflySize/2,butterflySize);
rotate(randomAngle)
ellipse(0,0,butterflySize/2,butterflySize)
pop()
push()
stroke(randomColor)
strokeWeight(2)
point(butterflyPosx+butterflySize/4,butterflyPosy-butterflySize/1.5)
point(butterflyPosx+butterflySize/2,butterflyPosy-butterflySize/1.8)
 //point(butterflyPosx+13,butterflyPosy-butterflySize/2.2) control point


  //butterfly head and eyes
beginShape()
vertex(butterflyPosx+butterflySize/4-2,butterflyPosy-butterflySize/4)
quadraticVertex(butterflyPosx+13,butterflyPosy-butterflySize/2.2,butterflyPosx+butterflySize/4,butterflyPosy-butterflySize/1.5)

endShape()
beginShape()
vertex(butterflyPosx+butterflySize/4-2,butterflyPosy-butterflySize/4)
quadraticVertex(butterflyPosx+13,butterflyPosy-butterflySize/2.2,butterflyPosx+butterflySize/2,butterflyPosy-butterflySize/1.8)
endShape()
pop()




}

//draw light
function drawLights(lightPosx,lightPosy,startPointx,startPointy){


beginShape()
curveVertex(startPointx,0)
curveVertex(startPointx+50,0)
curveVertex(startPointx,startPointy)
curveVertex(lightPosx-100,lightPosy+100)
curveVertex(lightPosx,lightPosy)
curveVertex(lightPosx,lightPosy)
endShape()


}


//draw flowers
function drawFlowers(flowerPosx,flowerPosy,flowerSize,petalNum){
  let fc1=color(221, 144, 240,80)
  let fc2=color(150, 123, 224,120)
  let fc3=color(247, 123, 104,100)
  let fc4=color(223, 242, 111,60)
  flowerColor=[fc1,fc2,fc3,fc4]
  let randomFlowerColor=random(flowerColor)
  
push()

translate(flowerPosx,flowerPosy)
angleMode(DEGREES)
stroke(randomFlowerColor)
fill(randomFlowerColor)
for(i=0;i<petalNum;i++){
  ellipse(0,0,flowerSize,flowerSize/3)
  rotate(360/petalNum)
  ellipse(0,0,flowerSize/3,flowerSize/3)

}
ellipse(0,0,flowerSize/10,flowerSize/10)

pop()

}

// draw hearts
function drawHearts(){}


function drawClouds(cloudPosx,cloudPosy,cloudSize,Transp){
    push()
    colorMode(HSB)
    translate(cloudPosx,cloudPosy)
    noStroke()
    fill(0,0,60,Transp)
    ellipse(0,0,cloudSize,cloudSize)
    ellipse(10,10,cloudSize,cloudSize/2)
    ellipse(-20,10,cloudSize,cloudSize/2)
    fill(0,0,70,Transp)
    ellipse(0,0,cloudSize-5,cloudSize-5)
    ellipse(10,10,cloudSize-5,(cloudSize-5)/2)
    ellipse(-20,10,cloudSize-5,(cloudSize-5)/2)
    fill(0,0,80,Transp)
    ellipse(0,0,cloudSize-9,cloudSize-5)
    ellipse(10,10,cloudSize-9,(cloudSize-5)/2)
    ellipse(-20,10,cloudSize-9,(cloudSize-5)/2)
    fill(0,0,90,Transp)
    ellipse(-2,-2,cloudSize-9,cloudSize-5)
    ellipse(8,8,cloudSize-9,(cloudSize-5)/2)
    ellipse(-22,8,cloudSize-9,(cloudSize-5)/2)

    pop()
}
