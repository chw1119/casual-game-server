const System = class {
    constructor(ctx){
        this.context = ctx;

        this.titleStage = new TitleStage(ctx);
        this.loadingStage = new LoadingStage(ctx);
        

        this.attachedStageId = 0;
    }
}
