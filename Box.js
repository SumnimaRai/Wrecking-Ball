class Box{
constructor(x,y,width,height){
var options={
friction:1,
density:0.04,
restitution:0.8
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.w=width;
this.h=height;

World.add(world, this.body);

}
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
strokeWeight(4);
stroke("red");
fill("white");
rect(0,0,this.w,this.h);
pop();


}

}