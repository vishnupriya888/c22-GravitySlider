// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
class Box{
    constructor(x, y, w, h) {
    // add options such as friction and restitution. Experiment with the values
    var options = {
        friction: 0.5,
        restitution: 1.0, 
    };
    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box
    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
}
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
 
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("lightblue");
        rect(0, 0, this.w, this.h);
        pop();
    }
    
}
