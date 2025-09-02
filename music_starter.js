// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(120)
let mapSize=map(bass,0,100,50,200)
let PosX=map(drum,0,100,midx/2,midy*1.5)
let PosY=1.5*PosX
let num=map(vocal,0,100,10,180)
let midx=canvasWidth/2
let midy=canvasHeight/2



fill(50,num,100,90)
angleMode(DEGREES)

  
  
  
      push()
      translate(midx,midy);
      rotate(36)
      noStroke()
      for (let i=0; i<5; i++) {
          ellipse(0,0,mapSize/3,mapSize*1.5)
      rotate(72);
      }
      pop()
  


}

