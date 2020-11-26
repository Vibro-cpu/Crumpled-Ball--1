class Dustbin{
    constructor() {
        var options = {
            isStatic: true,
        }
        this.dustbinleft= Bodies.rectangle(1400,630,350,20,options);
    	this.dustbinright= Bodies.rectangle(1214.6,553,20,175,options);
    	this.dustbinbottom = Bodies.rectangle(1585.4,553,20,175,options);
       
       
        World.add(world, this.dustbinleft);
        World.add(world, this.dustbinright);
        World.add(world, this.dustbinbottom);
      }
      display(){
        
        rectMode(CENTER);
        fill("white");
        rect(this.dustbinleft.position.x,this.dustbinleft.position.y,350,20);
        rect(this.dustbinright.position.x,this.dustbinright.position.y,20,175);
        rect(this.dustbinbottom.position.x,this.dustbinbottom.position.y,20,175);
        
      }
}