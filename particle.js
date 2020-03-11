class Particle {
    constructor(x,y,r) {
      var options = {
        friction: 0.5,
        restitution: 1.0, 
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r; 
      World.add(world, this.body);
    }
    display(){

    var pos = this.body.position;
    var angle = this.body.angle;
 
     push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("red");
      fill("lavender");
      ellipse(0, 0, this.r);
      pop();
    }
  };