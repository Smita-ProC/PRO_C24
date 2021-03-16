class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            density:1.2
        }
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.bottomBody = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.bottomBody);

        this.leftEdge = Bodies.rectangle(x-width/2,y-40,20,100,options);
        World.add(world,this.leftEdge);

        this.rightEdge = Bodies.rectangle(x+width/2,y-40,20,100,options);
        World.add(world,this.rightEdge);
    }

    display(){
        rectMode(CENTER);
        
        push();
        fill("yellow");
        rect(this.x,this.y,this.width,this.height);

        rect(this.x-this.width/2,this.y-40,20,100);

        rect(this.x+this.width/2,this.y-40,20,100);
        pop();
    }
}