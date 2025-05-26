class EditCharView implements Observer{
    
    private perso : Personnage;
    private exist : boolean;
    private ctrl : PersonnageController;
    private racectrl : RaceController;
    private relationctrl : RelationController;

    private nameinput : HTMLInputElement;
    private genderinput : HTMLSelectElement;
    private raceinput : HTMLSelectElement;
    private taginput : HTMLInputElement;
    private descinput : HTMLTextAreaElement;
    private bioinput : HTMLTextAreaElement;
    private validatebutton : HTMLButtonElement;
    private title : HTMLTitleElement;
    private relationdiv : HTMLDivElement

    private listcible: Array<Personnage>;
    private listtype: Array<RelationType>;

    constructor(ctrl : PersonnageController , racectrl : RaceController, relationctrl : RelationController){
        this.perso = null;
        this.ctrl = ctrl;
        this.ctrl.register(this);
        this.exist = false;
        this.racectrl = racectrl;
        this.racectrl.register(this);
        this.relationctrl = relationctrl;
        this.relationctrl.register(this);
        document.title = "Ajout d'un personnage - Project Horizon";
        this.title = document.getElementById("title") as HTMLTitleElement;
        this.nameinput = document.getElementById("name") as HTMLInputElement;
        this.genderinput = document.getElementById("gender") as HTMLSelectElement;
        this.raceinput = document.getElementById("race") as HTMLSelectElement;
        this.taginput = document.getElementById("tag") as HTMLInputElement;
        this.descinput = document.getElementById("desc") as HTMLTextAreaElement;
        this.bioinput = document.getElementById("bio") as HTMLTextAreaElement;
        this.relationdiv = document.getElementById("relations") as HTMLDivElement;
        this.validatebutton = document.getElementById("submit") as HTMLButtonElement
        this.validatebutton.addEventListener("click",() => this.Validate());
        this.title.innerHTML = "Ajout";
        let addbutton = document.getElementById("plusaddrelation") as HTMLButtonElement;
        addbutton.addEventListener("click", () => this.addRelationInput());
        this.init();
    }

    Notify(msg: string): void {

    }
    AjoutPerso(p: Personnage): void {
        window.location.href = "personnage.html?id="+p.Id;
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
        
    }
    Error(msg: string): void {
        alert(msg);     
        
    }

    private async init(){
        let racedao = new RaceDAO();
        let races = await racedao.GetAll();
        races.forEach(r => {
            if (this.exist == false)
            {
                let option = document.createElement("option");
                option.innerHTML = r.Nom;
                option.value = r.Id.toString();
                this.raceinput.appendChild(option);
            }
        });

        const urlParams = new URLSearchParams(window.location.search);
        let id = Number(urlParams.get('id'));
        let chardao = new PersonnageDAO();
        let p = await chardao.GetById(id);
        if(p){
            this.perso = p;
            this.exist = true;
            this.title.innerHTML = "Edit";
            document.title = "Modification de " + this.perso.Nom + " - Project Horizon";
            this.nameinput.value = this.perso.Nom;
            this.descinput.value = this.perso.Description;
            
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
        this.listcible = await chardao.GetAll();
        let relatiodao = new RelationDAO();
        this.listtype = await relatiodao.GetAllTypes();
        let list = await relatiodao.GetByCharacters(this.perso.Id);
        list.forEach(r => {
            this.addRelationInput(r)
        });
        

    }

    addRelationInput(r : Relation = null){
        
        let i = this.relationdiv.children.length
        
        let setting = document.createElement("div");
        setting.classList.add("relation_settings");

        let h3 = document.createElement("h3");
        h3.innerHTML = "Relation " + i;
        setting.appendChild(h3);
        let div1 = document.createElement("div");
        let ciblelabel = document.createElement("label") as HTMLLabelElement;
        ciblelabel.htmlFor = "persocible" + i;
        ciblelabel.innerHTML = "Personnage Cible"
        div1.appendChild(ciblelabel);
        let cible = document.createElement("select") as HTMLSelectElement;
        cible.name = "persocible" + i;
        cible.id = "persocible" + i;
        
        let j = 0;
        this.listcible.forEach((element) => {
            let option = document.createElement("option") as HTMLOptionElement;
            option.value = element.Id.toString();
            option.innerText = element.Nom;
            cible.appendChild(option);
            if (r && Number(option.value) == r.Id){
                cible.selectedIndex = j;
            }
            j += 1;
        });
        
        div1.appendChild(cible);
        setting.appendChild(div1);

        let div2 = document.createElement("div");
        let typelabel = document.createElement("label") as HTMLLabelElement;
        typelabel.htmlFor = "relation_type" + i;
        typelabel.innerHTML = "Type de Relation"
        let type = document.createElement("select") as HTMLSelectElement;
        type.name = "relation_type" + i;;
        type.id = "relation_type" + i;
        div2.appendChild(typelabel);
        
        j = 0;
        this.listtype.forEach((element) => {
            let option = document.createElement("option") as HTMLOptionElement;
            option.value = element.Id.toString();
            option.innerText = element.Titre;
            type.appendChild(option);
            if (r && Number(option.value) == r.IdType){
                type.selectedIndex = j;
            }
            j += 1;
            
        });

        div2.appendChild(type);
        setting.appendChild(div2);

                
        let div3 = document.createElement("div");
        let name_relationlabel = document.createElement("label") as HTMLLabelElement;
        name_relationlabel.htmlFor = "name_relation" + i;
        name_relationlabel.innerHTML = "Nom :";
        let name_relation = document.createElement("input") as HTMLInputElement;
        name_relation.name = "name_relation" + i;;
        name_relation.id = "name_relation" + i;
        div3.appendChild(name_relationlabel);
        div3.appendChild(name_relation);
        setting.appendChild(div3);

        let div4 = document.createElement("div");
        let desc_relationlabel = document.createElement("label") as HTMLLabelElement;
        desc_relationlabel.htmlFor = "desc_relation" + i;
        desc_relationlabel.innerHTML = "Description : "
        let desc_relation = document.createElement("textarea") as HTMLTextAreaElement;
        desc_relation.name = "desc_relation" + i;;
        desc_relation.id = "desc_relation" + i;
        div4.appendChild(desc_relationlabel);
        div4.appendChild(desc_relation);
        setting.appendChild(div4);

        let div5 = document.createElement("div");
        let delbut = document.createElement("button") as HTMLButtonElement;
        delbut.innerHTML = "Supprimmer";
        div5.appendChild(delbut);
        setting.appendChild(div5);

        if (r){
            name_relation.value = r.Titre
            desc_relation.value = r.Description
        }

        this.relationdiv.appendChild(setting);

    }

    private async Validate(){
        this.perso.Nom = this.nameinput.value   ;
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
    }
}