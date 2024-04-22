/*
 Project 2 - Array of Objects
 Name: Erika C. Montes
 Comments: 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/

// Global Variables go here
var sprites = new Array(40) ////Cherrys heh
var pac1// impostor pac-man

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600 x 400 pixel drawing canvas
pac1 = new Pac();


  for(let i = 0; i < sprites.length; i++){
    sprites[i] = new Sprite(random(width), random(height));
    console.log(sprites[i]);
  }
}

function draw(){
  background(0, 0, 0, 30); //black baground... while trying to make semi-translucent black I discovered it has cool after-effect on cherrys/pac so left it as is

  for(let i = 0; i < sprites.length; i++){
    sprites[i].display();
    sprites[i].move();
  }
  pac1.display();
  pac1.move();
}

function Pac(){
  this.x = random(width);
  this.y = random(height);
  this.xSpeed = random(-2, 2);
  this.ySpeed = random(-2, 2);

  this.move = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if(this.x < 0 || this.x > width){
      this.xSpeed *= -1;
    }

    if(this.y < 0 || this.y > height){
      this.ySpeed *= -1;
    }
  }

  this.display = function(){
    push();
    translate(this.x, this.y);
    fill(255, 255, 60);// BASED OFF Of: https://p5js.org/reference/#/p5/arc///
    let pacMouth = PI / 16;
    let startAngle = pacMouth * sin(frameCount * .01) + pacMouth;
    let endAngle = TWO_PI - startAngle;
    arc(0, 0, 80, 80, startAngle, endAngle, PIE);
    pop();
  }
}