var hr,min,sec

function setup() {
  createCanvas(400,400);

}

function draw() {
  background("black");  
  hr=hour();
  min=minute();
  sec=second();

  angleMode(DEGREES)
  secAngles = map(sec,0,60,0,360);
  minAngles = map(min,0,60,0,360);
  hrAngles = map(hr%12,0,12,0,360);
  
  noFill()
  strokeWeight(10)
  stroke("green");
  arc(200,200,380,380,990,secAngles);
  stroke("white")
  arc(200,200,355,355,990,minAngles)
  stroke("blue")
  arc(200,200,330,330,990,hrAngles)
  
  push();
  translate(200,200)
  rotate(secAngles)
  stroke("green")
  strokeWeight(7)
  line(0,0,150,0)
  pop();

  
  push();
  translate(200,200)
  rotate(minAngles)
  stroke("white")
  strokeWeight(7)
  line(0,0,120,0)
  pop();

  push();
  translate(200,200)
  rotate(hrAngles)
  stroke("blue")
  strokeWeight(7)
  line(0,0,75,0)
  pop();
}