
let bertha;
let ponyPic;
let rainbowPic;
let ponies = [];
let howManyPonies = 200;
let whichPony = 0;

let mouseBoxx;
let mouseBoxy;

function setup(){
  createCanvas(710, 400);
  ponyPic = loadImage('assets/pony.png');
  rainbowPic = loadImage('assets/rainbow.png');
  for (let i = 0; i < howManyPonies; i++){
    ponies[i] = new Pony();
  }
}
function draw(){
  background(0);
  image(rainbowPic, mouseX, mouseY, 50, 50);
  noCursor();
  for (let i = 0; i < howManyPonies; i++){
    ponies[i].move();
    ponies[i].display();
  }
  image(rainbowPic, mouseBoxx, mouseBoxy, 50, 50);
}

function mousePressed(){
  mouseBoxx = mouseX;
  mouseBoxy = mouseY;
  ponies[whichPony].teleportPony(mouseX, mouseY);
  ponies[whichPony].makePonyVisible();
  whichPony++;
  whichPony = whichPony % howManyPonies;

}
class Pony {
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.xspeed = random(0,1);
    this.yspeed = random(0,1);
    this.visible = false;
  }
  display(){
    if (this.visible){
    image(ponyPic, this.x, this.y, 75, 75);
    }
  }
  move(){
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

    if ((this.x > width) || (this.x < 0)) {
      this.xspeed = this.xspeed * -1;
    }

    if ((this.y > height) || (this.y < 0)) {
      this.yspeed = this.yspeed * -1;
    }

    // if((this.x > mouseBoxx && this.x < (mouseBoxx + 50))&&(this.y > mouseBoxy && this.y < (mouseBoxy + 50))){
    //   this.xspeed = this.xspeed + 50;
    //   this.yspeed = this.yspeed + 50;
    // }

  }
  teleportPony(xLoc, yLoc){
    this.x = xLoc;
    this.y = yLoc;
  }
  makePonyVisible(){
    this.visible = true;
  }
}
