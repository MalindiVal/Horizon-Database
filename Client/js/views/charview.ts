class CharView{

    private perso : Personnage;
    
    private personnagedao : PersonnageDAO;
    private racedao : RaceDAO;
    private relationdao : RelationDAO;
    
    private title : HTMLTitleElement;
    private race : HTMLParagraphElement;
    private bio : HTMLParagraphElement;
    private desc : HTMLParagraphElement;
    private tag : HTMLTitleElement;
    private relationdiv : HTMLDivElement;
    private relationul : HTMLUListElement;
    private editbutton : HTMLLinkElement;

    constructor(ctrl : PersonnageController,racectrl : RaceController, relationctrl : RelationController){
       
        
        this.personnagedao = new PersonnageDAO();
        this.relationdao = new RelationDAO();
        this.racedao = new RaceDAO();
        this.title = document.getElementById("character-name") as HTMLTitleElement;
        this.race = document.getElementById("character-race") as HTMLParagraphElement;
        this.bio = document.getElementById("character-background") as HTMLParagraphElement;
        this.tag = document.getElementById("character-tagline") as HTMLTitleElement;
        this.desc = document.getElementById("character-description") as HTMLParagraphElement;
        this.relationdiv = document.getElementById("character-relationships") as HTMLDivElement;
        this.editbutton = document.getElementById("editbutton") as HTMLLinkElement;
        this.DisplayCharacter();
    }

    async DisplayCharacter() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        this.relationdiv.innerHTML = "";
        this.relationul = document.createElement("ul");

        let p = await this.personnagedao.GetById(Number(id));
        this.perso = p;
        this.editbutton.href += "?id="+this.perso.Id;
        document.title = this.perso.Nom + "- Project Horizon";
        this.title.innerHTML = this.perso.Nom;
        this.bio.innerHTML = this.perso.Bio;
        this.desc.innerHTML = this.perso.Description;
        this.tag.innerHTML = this.perso.Tagline;

        let race = await this.racedao.GetById(Number(p.IdRace))
        let arace = document.createElement("a");
        arace.href = "race.html?id="+this.perso.IdRace;
        arace.innerHTML = race.Nom;
        this.race.appendChild(arace)
        
        let relations = await this.relationdao.GetByCharacters(Number(id));
        relations.forEach(r => {
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
            p.innerHTML = " : " + r.Description;
            li.appendChild(p);
            this.relationul.appendChild(li);
        });
        

        this.relationdiv.appendChild(this.relationul);

    }

}