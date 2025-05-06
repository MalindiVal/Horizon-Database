class FactionsView implements Observer{

    private ctrl : FactionController;
    private div : HTMLDivElement;


    constructor(ctrl : FactionController){
       
        this.ctrl = ctrl;
        this.ctrl.register(this);
        this.div = document.getElementById("factionlist") as HTMLDivElement;
        this.ListAllFactions();
    }
    AjoutRelation(r: Relation): void {
        throw new Error("Method not implemented.");
    }
    AjoutRace(r: Race): void {
        throw new Error("Method not implemented.");
    }

    Notify(msg: string): void {
        
    }
    AjoutPerso(p: Personnage): void {
        
    }

    AjoutFaction(f: Faction): void {
        let vig = document.createElement("div");
        vig.classList.add("col-md-4");
        vig.classList.add("mb-4");

        let carte = document.createElement("div");
        carte.classList.add("card");

        let img = document.createElement("img");
        img.src = "public/img/" + f.Nom + ".png";

        carte.appendChild(img);

        let body = document.createElement("div");
        body.classList.add("card-body");

        let nom = document.createElement("h5");
        nom.classList.add("card-title");
        nom.innerHTML = f.Nom
        body.appendChild(nom);

        let a = document.createElement("a");
        a.href = "faction.html?id=" + f.Id;
        a.innerText = "Voir plus";
        a.classList.add("btn");
        a.classList.add("btn-primary");
        body.appendChild(a);

        carte.appendChild(body);
        vig.appendChild(carte);

        this.div.appendChild(vig);
    }

    Error(msg: string): void {
        this.div.innerHTML = "<p>Aucune faction trouvé.</p>";
    }

    async ListAllFactions () {
        this.div.innerHTML = "";
        await this.ctrl.list();
    }

}