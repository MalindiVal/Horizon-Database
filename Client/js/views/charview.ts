class CharView implements Observer{

    private perso : Personnage;
    private ctrl : PersonnageController;
    private rdao : RelationDAO;
    private title : HTMLTitleElement;
    private race : HTMLParagraphElement;
    private bio : HTMLParagraphElement;
    private desc : HTMLParagraphElement;
    private tag : HTMLTitleElement;
    private relationdiv : HTMLDivElement;
    private editbutton : HTMLLinkElement;

    constructor(ctrl : PersonnageController){
       
        
        this.ctrl = ctrl;
        this.ctrl.register(this)
        
        this.rdao = new RelationDAO();
        this.title = document.getElementById("character-name") as HTMLTitleElement;
        this.race = document.getElementById("character-race") as HTMLParagraphElement;
        this.bio = document.getElementById("character-background") as HTMLParagraphElement;
        this.tag = document.getElementById("character-tagline") as HTMLTitleElement;
        this.desc = document.getElementById("character-description") as HTMLParagraphElement;
        this.relationdiv = document.getElementById("character-relationships") as HTMLDivElement;
        this.editbutton = document.getElementById("editbutton") as HTMLLinkElement;
        this.DisplayCharacter();
    }
    AjoutRace(r: Race): void {
        let arace = document.createElement("a");
        arace.href = "race.html?id="+this.perso.IdRace;
        arace.innerHTML = r.Nom;
        this.race.appendChild(arace)
    }

    Notify(msg: string): void {
        throw new Error("Method not implemented.");
    }
    AjoutPerso(p: Personnage): void {
        this.perso = p;
        document.title = this.perso.Nom + "- Project Horizon";
        this.title.innerHTML = this.perso.Nom;
        this.bio.innerHTML = this.perso.Bio;
        this.desc.innerHTML = this.perso.Description;
        this.tag.innerHTML = this.perso.Tagline;
    }
    AjoutFaction(f: Faction): void {
        throw new Error("Method not implemented.");
    }
    Error(msg: string): void {
        throw new Error("Method not implemented.");
    }

    async DisplayCharacter() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        await this.ctrl.GetById(Number(id))
        
        

        let relations = await this.rdao.GetByCharacters(this.perso.Id);
        this.relationdiv.innerHTML = "";
        let ul = document.createElement("ul");

        this.editbutton.href += "?id="+this.perso.Id;
        for (let i = 0; i < relations.length; i++ ){
            let li = document.createElement("li");
            li.innerHTML = relations[i].titre + " de ";
            let a = document.createElement("a");
            a.href = "personnage.html?id="+relations[i].id;
            a.innerHTML += relations[i].cible;
            li.appendChild(a);
            ul.appendChild(li);
        }
        this.relationdiv.appendChild(ul);

    }

}