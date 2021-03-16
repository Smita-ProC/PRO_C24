class Paper {

    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution:0.8,
            friction:0.4,
            density:1.2
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius = radius;
    }

    display(){
        var pos = this.body.position;
        push();

        fill("blue")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius)
        pop();
    }
}