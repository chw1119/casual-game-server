const Sprite = class {
    constructor(vertexs, x, y, angle,color){
        this.vertexs  = vertexs || new Rect();
        this.region                    = null;

        this.x = x || 0;
        this.y = y || 0;

        this.angle = angle || 0;

        this.color = color;

        this.renewBuffer();

    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getAngle(){
        return this.angle;
    }

    getColor(){
        return this.color;
    }

    getVertex(){
        return this.vertexs;
    }


    setX(x){
        this.x = x;
        
    }

    setY(y){
        this.y = y;
        
    }

    setAngle(a){
        this.angle = a;
    }

    setColor(color){
        this.color = color;
    }

    setVertex(vertex){
        this.vertexs = vertex;
        this.renewBuffer()
    }

    renewBuffer(){

        this.region = new Path2D();

        this.region.moveTo(0, 0);

        console.log(this.vertexs.getVertexArray());

        for(let a = 0, len = this.vertexs.getVertexArray().length; a < len; a++){

            this.region.lineTo(this.vertexs.getVertex(a).x, this.vertexs.getVertex(a).y);
            
        }

        this.region.closePath();
    }

    draw(ctx){
        ctx.save();

        ctx.translate(this.x , this.y);

        ctx.translate((this.vertexs.xSize / 2) || this.vertexs.radious, (this.vertexs.ySize / 2) || this.vertexs.radious);

        ctx.rotate((Math.PI / 180) * this.angle);

        ctx.translate(-((this.vertexs.xSize / 2) || this.vertexs.radious), -((this.vertexs.ySize / 2) || this.vertexs.radious));


        ctx.fillStyle = this.color;
        ctx.fill(this.region);
        
        ctx.restore();
    }
}