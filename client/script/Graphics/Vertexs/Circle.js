const Circle = class extends Vertex {

    constructor(radious, vertexCount){
        super();

        const PI = 3.141592;
        
        const RAD = PI/180;

        const aPer = (360 / (vertexCount || 10)) * RAD;

        for(let i = 0; i < (vertexCount || 10); i++) {

            this.setVertex(i, new Vector2(Math.cos(aPer * i) * (radious || 10), Math.sin(aPer * i) * (radious || 10)));

        }
        
        this.setVertex((vertexCount || 10), new Vector2(Math.cos(aPer * (vertexCount || 10)) * (radious || 10), Math.sin(aPer * (vertexCount || 10)) * (radious || 10)));


    }
}