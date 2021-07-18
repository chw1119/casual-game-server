const STAGE_ID_TITLE     = 0;
const STAGE_ID_GAME_MENU = 1;

const Stage = class {
    constructor(id, ctx){

        this.id  = id || STAGE_ID_TITLE;

        this.ctx = ctx || document.createElement("canvas").getContext("2d");

    }

    getID(){
        return this.id;
    }

    getContext(){
        return this.ctx;
    }

    resize(x, y){
        this.ctx.canvas.width  = x;
        this.ctx.canvas.height = y;
    }

    draw(){
        //virtual
    }

    onDataReceived(data){
        //virtual
    }
}