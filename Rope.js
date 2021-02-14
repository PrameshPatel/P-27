class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);
        stroke("lightBlue");
        fill(0);

        var R1X = pointA.x;
        var R1Y = pointA.y;

        var R2X = pointB.x+this.offsetX;
        var R2Y = pointB.y+this.offsetY;

        line(R1X, R1Y, R2X, R2Y);
    }
}