class Ground{
    constructor(x,y,width,height){
        var options = {
          isStatic: false,
          restitution: 0.4,
          friction: 0.01
        }

        this.Visiblity = 255;
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){

         if(this.body.speed < 3){
        //var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
         
    else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 1;
        pop();
    }
    
}

score(){
    if(this.Visiblity<0 && this.Visiblity >-150){
        score++;
    }
}
}