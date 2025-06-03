class RaceView implements Observer{

    private race : Race;
   private title : HTMLTitleElement;
    private bio : HTMLParagraphElement;
    private ctrl: RaceController;


    constructor(ctrl: RaceController){
        this.ctrl = ctrl;
        this.ctrl.register(this);
        this.title = document.getElementById("race-name") as HTMLTitleElement;
        this.bio = document.getElementById("race-background") as HTMLParagraphElement;
            
        this.DisplayRace()
    }
    AjoutRelation(r: Relation): void {
        throw new Error("Method not implemented.");
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
        this.race = r;
        document.title = this.race.Nom + "- Project Horizon";
        this.title.innerHTML = this.race.Nom;
        this.bio.innerHTML = this.race.Description;
    }
    Error(msg: string): void {
       
    }

    async DisplayRace() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        await this.ctrl.GetById(Number(id));

    }

}