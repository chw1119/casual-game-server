const Camera = class{
    constructor(xpos, ypos, context){
        this.xpos = xpos || 0;
        this.ypos = ypos || 0;

        this.isBinded = false;

        this.context = context;
    }

    getWindowXSize(){
        return window.innerWidth;
    }

    getWindowYSize(){
        return window.innerHeight;
    }

    bind(){
        if(this.isBinded){
            console.log("cam is already binded")
        }
        else{
            this.context.save();
            this.isBinded = true
        }
    }

    unBind(){
        this.context.restore();
        this.isBinded = false;
    }

    viewContents(x,y){
        this.bind();
        console.log((this.xpos || x) + this.getWindowXSize() / 2)
        this.context.translate((this.xpos || x) + this.getWindowXSize() / 2, (this.ypos || y) + this.getWindowYSize() / 2);
    }

    traslatePosition(x,y){
        this.context.translate(this.x , this.y);
    }
}