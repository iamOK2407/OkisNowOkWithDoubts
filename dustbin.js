class dustbin extends BaseClass{
  constructor(x,y){
      var options={
          isStatic:true
      }
    	this.box1 = Bodies.rectangle(width/2,600,200,20,{isStatic:true});
	 this.box2 = Bodies.rectangle(310,550,20,100,{isStatic:true});
	 this.box3 = Bodies.rectangle(490,550,20,100,{isStatic:true});
	 World.add(world,this.box1)
World.add(world,this.box2)
World.add(world,this.box3)
    
  }
  display(){
    
    var angle = this.body.angle;
        push();
        translate(this.box1.body.position.x, this.box1.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    
    
  }
}