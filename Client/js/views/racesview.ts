class RacesView implements Observer{

    private ctrl : RaceController;
    private div : HTMLDivElement;
    constructor(ctrl : RaceController){
       
        this.ctrl = ctrl;
        this.ctrl.register(this);
        
        this.div = document.getElementById("raceslist") as HTMLDivElement;
        this.ListAllRaces();
    }
    AjoutRelation(r: Relation): void {
        throw new Error("Method not implemented.");
    }

    Notify(msg: string): void {
        throw new Error("Method not implemented.");
    }
    AjoutPerso(p: Personnage): void {
        
    }

    AjoutFaction(f: Faction): void {
        
    }

    AjoutRace(r: Race): void {
        let vig = document.createElement("div");
            vig.classList.add("col-md-4");
            vig.classList.add("mb-4");

            let carte = document.createElement("div");
            carte.classList.add("card");

            let img = document.createElement("img");
            img.src = "public/img/" + r.Nom + ".png";

            carte.appendChild(img);

            let body = document.createElement("div");
            body.classList.add("card-body");

            let nom = document.createElement("h5");
            nom.classList.add("card-title");
            nom.innerHTML = r.Nom
            body.appendChild(nom);

            let a = document.createElement("a");
            a.href = "race.html?id=" + r.Id;
            a.innerText = "Voir plus";
            a.classList.add("btn");
            a.classList.add("btn-primary");
            body.appendChild(a);

            carte.appendChild(body);
            vig.appendChild(carte);

            this.div.appendChild(vig);
    }
    Error(msg: string): void {
        this.div.innerHTML = "<p>Aucune race trouvée.</p>";
    }

    async ListAllRaces() {
        this.div.innerHTML = "";
        await this.ctrl.List();

    }

}