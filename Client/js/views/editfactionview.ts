class EditFactionView implements Observer{
    
    private ctrl : FactionController;
    
    private faction : Faction;
    private p1input : HTMLSelectElement;
    private p2input : HTMLSelectElement;
    private typeinput : HTMLSelectElement;
    private titleinput : HTMLInputElement;
    private descinput : HTMLTextAreaElement;
   private validatebutton : HTMLButtonElement;
    private title : HTMLTitleElement;

    constructor(ctrl : FactionController){
        
        this.ctrl = ctrl;
        this.ctrl.register(this);
        document.title = "Ajout d'une Faction - Project Horizon";

        this.faction = new Faction();

        this.title = document.getElementById("title") as HTMLTitleElement;
        this.titleinput = document.getElementById("name") as HTMLInputElement;
        this.descinput = document.getElementById("histoire") as HTMLTextAreaElement;
        this.validatebutton = document.getElementById("submit") as HTMLButtonElement
        this.validatebutton.addEventListener("click",() => this.Validate());
        this.title.innerHTML = "Ajout";
        this.init();
    }
    PersoFound(p: Personnage): void {
        throw new Error("Method not implemented.");
    }
    FactionFound(f: Faction): void {
        this.faction = f;
        this.titleinput.value = f.Nom;
        this.descinput.value = f.Bio;
    }
    RaceFound(r: Race): void {
        throw new Error("Method not implemented.");
    }
    RelationFound(r: Relation): void {
        throw new Error("Method not implemented.");
    }

    Notify(msg: string): void {

    }
    AjoutPerso(p: Personnage): void {
        
    }
    AjoutFaction(f: Faction): void {
        alert("Creation de la faction réussi");
        window.location.href = "factions.html";
    }
    AjoutRace(r: Race): void {
        
    }
    AjoutRelation(r: Relation): void {
        alert("Creation de la relation réussi");
        window.location.href = "relations.html";
    }
    Error(msg: string): void {
        alert(msg);     
        
    }

    private async init(){
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        if(id){
            await this.ctrl.getById(id);
        }

    }

    private async Validate(){

        this.faction.Nom = this.titleinput.value;
        this.faction.Bio = this.descinput.value;

        if (this.faction.Id){
           await this.ctrl.Add(this.faction); 
        } else {
            await this.ctrl.Update(this.faction);
        }
        

    }
}