//add code for class contructor
function Sprite (tempX, tempY){
    this.x = tempX;
    this.y = tempY;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);

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
rectMode(CENTER);
fill(200, 50, 200, 50);
rect(0, 0, 75); // rectangle
ellipse(-20, -10, 5, 10)
ellipse(20, -10, 5, 10)
pop();// dispose layer
}

}