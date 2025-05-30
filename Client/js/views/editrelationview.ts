class EditRelationView implements Observer{
    
    private relationctrl : RelationController;
    private relation : Relation;

    private p1input : HTMLSelectElement;
    private p2input : HTMLSelectElement;
    private typeinput : HTMLSelectElement;
    private titleinput : HTMLInputElement;
    private descinput : HTMLTextAreaElement;
    private bioinput : HTMLTextAreaElement;
    private validatebutton : HTMLButtonElement;
    private title : HTMLTitleElement;
    private relationdiv : HTMLDivElement

    constructor(relationctrl : RelationController,relation : Relation){
        this.relation = relation;
        this.relationctrl = relationctrl;
        this.relationctrl.register(this);
        document.title = "Ajout d'une relation - Project Horizon";
        this.title = document.getElementById("title") as HTMLTitleElement;
        this.titleinput = document.getElementById("relation_title") as HTMLInputElement;
        this.typeinput = document.getElementById("type") as HTMLSelectElement;
        this.p1input = document.getElementById("p1") as HTMLSelectElement;
        this.p2input = document.getElementById("p2") as HTMLSelectElement;
        this.descinput = document.getElementById("desc") as HTMLTextAreaElement;
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
        throw new Error("Method not implemented.");
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
        
        let chardao = new PersonnageDAO();
        let listcible = await chardao.GetAll();
        listcible.forEach((element) => {
            let option = document.createElement("option") as HTMLOptionElement;
            option.value = element.Id.toString();
            option.innerText = element.Nom;
            this.p1input.appendChild(option);
        });

        listcible.forEach((element) => {
            let option = document.createElement("option") as HTMLOptionElement;
            option.value = element.Id.toString();
            option.innerText = element.Nom;
            this.p2input.appendChild(option);
        });
        let relatiodao = new RelationDAO();
        let listtype = await relatiodao.GetAllTypes();
        listtype.forEach(element => {
            let type = document.createElement("option") as HTMLOptionElement;
            type.value = element.Id.toString();
            type.innerHTML = element.Titre;
            this.typeinput.appendChild(type);
        });      

    }

    private async Validate(){
        this.relation.Id_P1 = Number(this.p1input.value);
        this.relation.Id_P2 = Number(this.p2input.value);
        this.relation.IdType = Number(this.typeinput.value);
        this.relation.Titre = this.titleinput.value;
        this.relation.Description = this.descinput.value;
        if(this.relation.Id){
            let res = await this.relationctrl.Update(this.relation);
        } else {
            let res = await this.relationctrl.Add(this.relation);
        }

    }
}