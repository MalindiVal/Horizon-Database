class RelationsView implements Observer{
    private canvas : HTMLCanvasElement;
    private ctrl : RelationController;

    constructor(ctrl : RelationController){
        this.ctrl = ctrl;

        this.canvas = document.getElementById("mindmap") as HTMLCanvasElement;
    }
    Notify(msg: string): void {
        throw new Error("Method not implemented.");
    }
    AjoutPerso(p: Personnage): void {
        throw new Error("Method not implemented.");
    }
    AjoutFaction(f: Faction): void {
        throw new Error("Method not implemented.");
    }
    AjoutRace(r: Race): void {
        throw new Error("Method not implemented.");
    }
    AjoutRelation(r: Relation): void {
        throw new Error("Method not implemented.");
    }
    Error(msg: string): void {
        throw new Error("Method not implemented.");
    }

    draw(){
        
    }
}