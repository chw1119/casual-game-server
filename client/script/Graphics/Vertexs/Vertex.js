const Vertex = class {

    constructor(vertexArray){
        this.vertexArray = vertexArray || [];
    }

    getVertexArray(){
        return this.vertexArray;
    }

    getVertex(index){
        return this.vertexArray[index];
    }

    setVertex(index,vector2){
        this.vertexArray[index] = vector2;
    }

}
