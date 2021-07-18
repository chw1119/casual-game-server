
const Rect = class extends Vertex {
        
    constructor(xSize,ySize){
        super();

        this.xSize = xSize || 10;
        this.ySize = ySize || 10;

        this.setVertex(0, new Vector2(0, 0));

        this.setVertex(1, new Vector2(0, this.ySize));

        this.setVertex(2, new Vector2(this.xSize, this.ySize));

        this.setVertex(3, new Vector2(this.xSize, 0));

    }

}