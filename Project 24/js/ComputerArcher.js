class ComputerArcher {

    constructor(x, y, width, height, angle){

        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.body = Bodies.rectangle(x, y, width, height);
        Matter.Body.setAngle(this.body, 90);
        this.image = loadImage("assets/computerArcher.png");
        World.add(world, this.body);

    }

    display() {

        push()
        translate(this.x, this.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();



    }


}