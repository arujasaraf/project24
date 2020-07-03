    class Paper{
    constructor(x, y, width, height) {
        var options = {
            'isStatic':false,
            'restitution':0.5,
            'friction':0.5,
            'density':1.2,
        }
        this.body =Bodies.circle(200 , 200 , 5 ,);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        }
        display(){
           
            var pos =this.body.position;
            rectMode(CENTER);
            
            circle(pos.x, pos.y, this.width, this.height);
        }
}