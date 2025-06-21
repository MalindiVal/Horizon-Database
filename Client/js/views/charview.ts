class CharView implements Observer{

    private perso : Personnage;
    
    private ctrl : PersonnageController;
    private racectrl : RaceController;
    private relationctrl : RelationController;
    private factionctrl : FactionController;

    private personnagedao : PersonnageDAO;
    private racedao : RaceDAO;
    private relationdao : RelationDAO;
    private factiondao : FactionDAO;
    
    private title : HTMLTitleElement;
    private race : HTMLParagraphElement;
    private bio : HTMLParagraphElement;
    private desc : HTMLParagraphElement;
    private tag : HTMLTitleElement;
    private relationdiv : HTMLDivElement;
    private factiondiv : HTMLDivElement;
    private relationul : HTMLUListElement;
    private editbutton : HTMLLinkElement;

    constructor(ctrl : PersonnageController,racectrl : RaceController, relationctrl : RelationController, factionctrl : FactionController){
       
        this.ctrl = ctrl;
        ctrl.register(this);

        this.racectrl = racectrl;
        racectrl.register(this);

        this.relationctrl = relationctrl;
        relationctrl.register(this);

        this.factionctrl = factionctrl;
        factionctrl.register(this);

        this.personnagedao = new PersonnageDAO();
        this.relationdao = new RelationDAO();
        this.racedao = new RaceDAO();
        this.factiondao = new FactionDAO();
        this.title = document.getElementById("character-name") as HTMLTitleElement;
        this.race = document.getElementById("character-race") as HTMLParagraphElement;
        this.bio = document.getElementById("character-background") as HTMLParagraphElement;
        this.tag = document.getElementById("character-tagline") as HTMLTitleElement;
        this.desc = document.getElementById("character-description") as HTMLParagraphElement;
        this.relationdiv = document.getElementById("character-relationships") as HTMLDivElement;
        this.editbutton = document.getElementById("editbutton") as HTMLLinkElement;
        this.factiondiv = document.getElementById("character-factions") as HTMLDivElement;
        this.DisplayCharacter();
    }
    AjoutPerso(p: Personnage): void {
        throw new Error("Method not implemented.");
    }
    PersoFound(p: Personnage): void {
        this.perso = p;
        this.editbutton.href += "?id="+this.perso.Id;
        document.title = this.perso.Nom + "- Project Horizon";
        this.title.innerHTML = this.perso.Nom;
        this.bio.innerHTML = this.perso.Bio;
        this.desc.innerHTML = this.perso.Description;
        this.tag.innerHTML = this.perso.Tagline;
    }
    AjoutFaction(f: Faction): void {
        throw new Error("Method not implemented.");
    }
    FactionFound(f: Faction): void {
        
    }
    AjoutRace(r: Race): void {
        throw new Error("Method not implemented.");
    }
    RaceFound(r: Race): void {
        let arace = document.createElement("a");
        arace.href = "race.html?id="+r.Id;
        arace.innerHTML = r.Nom;
        this.race.appendChild(arace)
    }
    AjoutRelation(r: Relation): void {
        throw new Error("Method not implemented.");
    }
    RelationFound(r: Relation): void {
        let li = document.createElement("li");
            li.innerHTML = r.Titre + " de ";
            let a = document.createElement("a");
            if (this.perso.Id == r.Id_P1){
                a.href = "personnage.html?id="+r.Id_P2.toString();
            } else {
                a.href = "personnage.html?id="+r.Id_P1.toString();
            }
            
            a.innerHTML += r.Cible;
            li.appendChild(a);
            let p = document.createElement("p");
            p.innerHTML = r.Description;
            li.appendChild(p);
            this.relationul.appendChild(li);
    }
    Error(msg: string): void {
        throw new Error("Method not implemented.");
    }

    async DisplayCharacter() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        this.relationdiv.innerHTML = "";
        this.relationul = document.createElement("ul");

        let p = await this.ctrl.GetById(Number(id));
        

        let race = await this.racectrl.GetById(Number(p.IdRace))
        

        let mainrace = await this.racedao.GetMainRace(race.Id)
        if (mainrace.Id != race.Id){
            let mainlink = document.createElement("a");
            mainlink.href = "race.html?id="+mainrace.Id;
            mainlink.innerHTML = " (" + mainrace.Nom + ")";
            this.race.appendChild(mainlink)
        }
        
        
        let factions = await this.factiondao.GetByPersonnage(Number(id));
        factions.forEach(r => {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.href = "faction.html?id="+r.Id_Faction.toString();
            a.innerHTML = r.Nom_Faction + " - " + r.Role;
            li.appendChild(a);
            this.factiondiv.appendChild(li);
        });
        
        let relations = await this.relationctrl.GetByPersonnage(Number(id));
        relations.forEach(r => {
            
        });
        

        this.relationdiv.appendChild(this.relationul);

    }

}