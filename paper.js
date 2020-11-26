class Paper{

    constructor(){
        var options = {// JSON format javascript object notation 
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }

        this.body = Bodies.circle(300 , 400 , 25 , options);
	World.add(world, this.body);
    }
        display(){
        ellipse(this.body.position.x,this.body.position.y,50);
    
     }
}