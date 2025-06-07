class RaceView implements Observer{

    private race : Race;
   private title : HTMLTitleElement;
    private bio : HTMLParagraphElement;
    private apparence : HTMLParagraphElement;
    private culture : HTMLParagraphElement;
    private listpeuples : HTMLDivElement;
    private ctrl: RaceController;


    constructor(ctrl: RaceController){
        this.ctrl = ctrl;
        this.ctrl.register(this);
        this.title = document.getElementById("race-name") as HTMLTitleElement;
        this.bio = document.getElementById("race-background") as HTMLParagraphElement;
        this.apparence = document.getElementById("race-apparence") as HTMLParagraphElement;
        this.culture = document.getElementById("race-culture") as HTMLParagraphElement;
        this.listpeuples = document.getElementById("racelist") as HTMLDivElement;
            
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
        this.apparence.innerHTML = this.race.Apparence;
        this.culture.innerHTML = this.race.Culture;
        this.AfficherPeuples();
        
    }
    Error(msg: string): void {
       
    }

    async DisplayRace() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        await this.ctrl.GetById(Number(id));

        

    }

    async AfficherPeuples(){
        let dao = new RaceDAO();
        let p = await dao.GetPeuples(this.race.Id);
        if (p){
            p.forEach(peuple => {
                let vig = document.createElement("div");
                vig.classList.add("col-md-4");
                vig.classList.add("mb-4");

                let carte = document.createElement("div");
                carte.classList.add("card");

                let img = document.createElement("img");
                img.src = "public/img/" + peuple.Nom + ".png";

                carte.appendChild(img);

                let body = document.createElement("div");
                body.classList.add("card-body");

                let nom = document.createElement("h5");
                nom.classList.add("card-title");
                nom.innerHTML = peuple.Nom
                body.appendChild(nom);

                let a = document.createElement("a");
                a.href = "race.html?id=" + peuple.Id;
                a.innerText = "Voir plus";
                a.classList.add("btn");
                a.classList.add("btn-primary");
                body.appendChild(a);

                carte.appendChild(body);
                vig.appendChild(carte);

                this.listpeuples.appendChild(vig);
            });
        
        }
    }

}