class PlayerArcher {

    constructor(x, y, width, height, angle){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.body = Bodies.rectangle(x, y, width, height);
        Matter.Body.setAngle(this.body, -90);
        this.image = loadImage("./assets/playerArcher.png");
        World.add(world, this.body);
    }

    display() {
        
        if (keyIsDown(DOWN_ARROW)){
            this.body.angle += 0.02;
        }
       

        if (keyIsDown(UP_ARROW)){
            this.body.angle -= 0.02;
        }
        

        

        push()
        translate(this.x, this.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

        
    }

    stopRotation(){

        if (this.body.angle >= -80){
            this.body.angle = -80;
        }

        if (this.body.angle <= -140){
            this.body.angle = -140;
        }
    }

}