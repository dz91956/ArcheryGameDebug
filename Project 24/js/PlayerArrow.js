class PlayerArrow {
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.trajectory = [];
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      Matter.Body.setAngle(this.body, PI/2);
      this.image = loadImage("./assets/arrow.png");
      World.add(world, this.body);
    }
  
   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();

      if(this.body.velocityX > 0 &&  this.body.position.x < 1200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
    //console.log(trajectory);

      for (var i = 0; i < this.trajectory.length; i++){
        ellipse(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
    }
   }

    shoot(playerArcherAngle) {

      var velocity = p5.Vector.fromAngle(playerArcherAngle);
      velocity.mult(13);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, {x: velocity.x, y: velocity.y});

    }
  }
  