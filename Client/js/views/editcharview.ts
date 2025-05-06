class EditCharView implements Observer{
    
    private perso : Personnage;
    private exist : boolean;
    private ctrl : PersonnageController;
    private racectrl : RaceController;
    private nameinput : HTMLInputElement;
    private genderinput : HTMLSelectElement;
    private raceinput : HTMLSelectElement;
    private taginput : HTMLInputElement;
    private descinput : HTMLTextAreaElement;
    private bioinput : HTMLTextAreaElement;
    private validatebutton : HTMLButtonElement;
    private title : HTMLTitleElement;

    constructor(ctrl : PersonnageController , racectrl : RaceController){
        this.perso = null;
        this.ctrl = ctrl;
        this.ctrl.register(this);
        this.exist = false;
        this.racectrl = racectrl;
        this.racectrl.register(this);
        document.title = "Ajout d'un personnage - Project Horizon";
        this.title = document.getElementById("title") as HTMLTitleElement;
        this.nameinput = document.getElementById("name") as HTMLInputElement;
        this.genderinput = document.getElementById("gender") as HTMLSelectElement;
        this.raceinput = document.getElementById("race") as HTMLSelectElement;
        this.taginput = document.getElementById("tag") as HTMLInputElement;
        this.descinput = document.getElementById("desc") as HTMLTextAreaElement;
        this.bioinput = document.getElementById("bio") as HTMLTextAreaElement;
        this.validatebutton = document.getElementById("submit") as HTMLButtonElement
        this.validatebutton.addEventListener("click",() => this.Validate());
        this.title.innerHTML = "Ajout";
        this.init();
    }

    Notify(msg: string): void {
        throw new Error("Method not implemented.");
    }
    AjoutPerso(p: Personnage): void {
        if (this.perso == null){
            this.perso = p;
            this.exist = true;
            this.title.innerHTML = "Edit";
            document.title = "Modification de " + this.perso.Nom + " - Project Horizon";
            this.nameinput.value = this.perso.Nom;
            
            for (let i = 0; i < this.genderinput.options.length; i++){
                if (this.genderinput.options[i].value.toUpperCase() == this.perso.Gender){
                    this.genderinput.options.selectedIndex = i; 
                    break;
                }
            }

            for (let i = 0; i < this.raceinput.options.length; i++){
                if (this.raceinput.options[i].value == String(this.perso.IdRace)){
                    this.raceinput.options.selectedIndex = i; 
                    break;
                }
            }
            this.taginput.value = this.perso.Tagline;
            this.bioinput.value = this.perso.Bio;
        }
    }
    AjoutFaction(f: Faction): void {
        throw new Error("Method not implemented.");
    }
    AjoutRace(r: Race): void {
        if (this.exist == false)
        {
            let option = document.createElement("option");
            option.innerHTML = r.Nom;
            option.value = r.Id.toString();
            this.raceinput.appendChild(option);
        }
    }
    AjoutRelation(r: Relation): void {
        throw new Error("Method not implemented.");
    }
    Error(msg: string): void {
        this.perso = new Personnage();
        this.exist = false;
    }

    private async init(){
        let races = await this.racectrl.List();

        const urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('id')
        this.perso = await this.ctrl.GetById(Number(id));

    }

    private async Validate(){
        this.perso.Nom = this.nameinput.value;
        this.perso.Tagline = this.taginput.value;
        this.perso.Gender = this.genderinput.value.toUpperCase();
        this.perso.IdRace = Number(this.raceinput.value);
        this.perso.Bio = this.bioinput.value;
        this.perso.Description = this.descinput.value
        let res = false
        if (this.exist){
            res = await this.ctrl.Update(this.perso);
        } else {
            res = await this.ctrl.Add(this.perso);
        }
        
        if (res){
           // window.document.URL = "personnage.html"
        }
    }
}