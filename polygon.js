class Polygon{
    constructor(x, y, height, width){
        var options={

        }

        this.body = Bodies.circle(50,200,20);
        this.image = loadImage("sprites/polygon.png");
        World.add(world,polygon);

        image(CENTERMODE);
        
    }

    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        image(polygon.img, polygon.position.x, polygon.position.y, 40,40);
        pop();
      }
}