class CharView{

    private perso : Personnage;
    private dao : PersonnageDAO;
    private rdao : RelationDAO;
    private title : HTMLTitleElement;
    private race : HTMLParagraphElement;
    private bio : HTMLParagraphElement;
    private relationdiv : HTMLDivElement;
    private editbutton : HTMLLinkElement;

    constructor(person : Personnage){
       
        this.perso = person
        this.dao = new PersonnageDAO();

        
        this.rdao = new RelationDAO();
        this.title = document.getElementById("character-name") as HTMLTitleElement;
        this.race = document.getElementById("character-race") as HTMLParagraphElement;
        this.bio = document.getElementById("character-background") as HTMLParagraphElement;
        this.relationdiv = document.getElementById("character-relationships") as HTMLDivElement;
        this.editbutton = document.getElementById("editbutton") as HTMLLinkElement;
        this.DisplayCharacter();
    }

    async DisplayCharacter() {
        
        this.title.innerHTML = this.perso.Nom;
        this.bio.innerHTML = this.perso.Bio;
        
        let arace = document.createElement("a");
        arace.href = "race.html?id="+this.perso.IdRace;
        let raceddao = new RaceDAO();
        let racename = await raceddao.GetById(this.perso.IdRace);
        arace.innerHTML = racename.Nom;
        this.race.appendChild(arace)

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