//add code for class contructor
function Sprite (tempX, tempY){
    this.x = tempX;
    this.y = tempY;
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(-1, 1);

 this.move = function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if(this.x > width || this.x < 0){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    }

this.display = function(){
push(); // creates new layer
translate(this.x, this.y);// moves new layers origin point on canvas
strokeWeight(2);
stroke(0, 0, 0, 80);
fill(200, 50, 100, 200);
ellipse(-20, -10, 40, 40);
ellipse(20, -10, 40, 40);
noFill();
strokeWeight(4);
stroke(50, 100, 50, 200)
arc(20, -55, 60, 60, HALF_PI, PI);
arc(13, -30, 70, 70, PI, PI + QUARTER_PI);
pop();// dispose layer
}

}