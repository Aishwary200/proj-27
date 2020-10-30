class Bob {
    constructor(x, y, radius) {
      var options = {
          isStatic:false ,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.radius=radius;
      this.x=x;
      this.y=y;
      this.body = Bodies.circle(this.x, this.y, radius/2, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      
  
      fill("red");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };