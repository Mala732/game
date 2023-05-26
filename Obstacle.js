export default class Obstacle{
    constructor(ctx,x,y,width,height,image){
        this.ctx=ctx;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image=image;
    }

    update(speed,gamespeed,frameTimeDelta,scaleRatio){
        this.x -= speed*gamespeed*frameTimeDelta*scaleRatio;
    }

    draw(){
        this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }

    collideWith(sprite){
        const adjustBy = 1.4;
        if (
            sprite.x < this.x + this.width /adjustBy&&
            sprite.x + sprite.width /adjustBy> this.x &&
            sprite.y < this.y + this.height /adjustBy&&
            sprite.height + sprite.y/adjustBy > this.y
          ) {
            // Collision detected!
            return true;
          } else {
            // No collision
            return false;
          }
    }
}