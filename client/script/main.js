!function(){
    window.onload = function(){

        const screen = document.getElementById("screen");
        const screenCtx        = screen.getContext("2d");


        const bufferScreen = document.createElement("canvas");
        const bufferCtx       = bufferScreen.getContext("2d");

        const keySet = {};

        document.onkeydown = function(e){

        }

        document.onkeyup   = function(e){

        }

        const cam = new Camera(0, 0, screenCtx);

        const circleArr = new Sprite(new Circle(10, 40), 0, 0, 0, "green");

        const now = Date.now();

        setInterval(function(){

            screenCtx.clearRect(0,0,screen.clientWidth,screen.clientHeight)

            circleArr.setAngle(circleArr.getAngle() + 10)

            circleArr.setX(circleArr.getX() + 0.1);

            cam.viewContents(0,0);

            circleArr.draw(screenCtx);

            cam.unBind();
            

        },1000 / 60)
    
        console.log(Date.now() - now);


    }
}()