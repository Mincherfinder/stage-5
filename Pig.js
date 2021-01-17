class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibillity=255
  }

  display(){
    console.log(this.body.speed);

    if(this.body.speed < 3 ){
    super.display();
    }
    else{
      //remove it from the world
      World.remove(world,this.body)

      push(); 
      //we will slowly reduce it visibility and draw an image with reduced transparency/visibility
      this.Visibillity = this.Visibillity - 5;
      tint(255,this.Visibillity )
      image(this.image,this.body.position.x, this.body.position.y, 50,50);
      pop();

    }

  }

};

//colors and transaparency are usually measured between 0 - 255 
//0 - 0000000 - OFF
//255 - 11111111 - ON - totally visible