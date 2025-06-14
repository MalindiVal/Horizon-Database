class EditFactionView implements Observer{
    
    private ctrl : FactionController;
    
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

        this.title = document.getElementById("title") as HTMLTitleElement;
        this.titleinput = document.getElementById("name") as HTMLInputElement;
        this.descinput = document.getElementById("histoire") as HTMLTextAreaElement;
        this.validatebutton = document.getElementById("submit") as HTMLButtonElement
        this.validatebutton.addEventListener("click",() => this.Validate());
        this.title.innerHTML = "Ajout";
        this.init();
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
    

    }

    private async Validate(){

        let faction = new Faction();
        faction.Nom = this.titleinput.value;
        faction.Bio = this.descinput.value;
        let res = await this.ctrl.Add(faction);

    }
}