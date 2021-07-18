const Packet = class {
    constructor(){
        this.buffer = [];

        this.offset = 0; //님 주것스빈까??
    }

    getByte(index){
        if(index === undefined){
            return this.buffer[this.offset];
        }

        else{
            return this.buffer[index];
        }
    }

    setByte(byte, index){
        if(index === undefined){
            this.buffer[this.index++] = byte;
        }
        else{
            this.buffer[index] = byte;
        }
    }
}