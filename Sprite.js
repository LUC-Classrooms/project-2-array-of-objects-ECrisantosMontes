//add code fro class contructor
function Sprite (tempX, tempY){
    this.x = tempX;
    this.y = tempY;
    this.XSpeed = random(-2, 2);
    this.YSpeed = random(-2, 2);

    this.move = finction(){
        this.x += this.XSpeed;
        this.y += this.YSpeed;
        if(this.x > width || this.x < 0){
            this.xSpeed *= -1;
        }
    }
}
this.display = function() {
    
}