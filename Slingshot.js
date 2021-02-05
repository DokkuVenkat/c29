class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
            this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")


    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
// display the sling shot
        image(this.sling1,200,20)
        image(this.sling2,170,20)
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
          //get rgb colour from colour zila to draw the line,r=48,g=22,b=8 
           stroke(48,22,8)
           // to get the base of the rubber band in front of the bird when we pull the bird in front of the sling shot
           if(pointA.x<220){
               // draw the rubber band and display the base of the rubber band
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30)
            //give different stroke weight for if and else to give elastic effect,thin when streched thic when released
            strokeWeight(7);
           }
           else{
               line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
            image(this.sling3,pointA.x+25,pointA.y-10,15,30)
            strokeWeight(7);
           }
           
        }
    }
    
}