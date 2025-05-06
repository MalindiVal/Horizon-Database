class CharsView implements Observer{

    private ctrl : PersonnageController;
    private div : HTMLDivElement;
    private list : Array<Personnage>;
    constructor(ctrl : PersonnageController){
       
        this.list = new Array<Personnage>();
        this.ctrl = ctrl;
        this.ctrl.register(this);
        const urlParams = new URLSearchParams(window.location.search);

        const id = urlParams.get('id');
        this.div = document.getElementById("characterlist") as HTMLDivElement;
        this.ListAllChars();
    }
    AjoutRelation(r: Relation): void {
        
    }
    AjoutRace(r: Race): void {
        throw new Error("Method not implemented.");
    }
    AjoutFaction(f: Faction): void {
        
    }
    Notify(msg: string): void {
        
    }

    AjoutPerso(p: Personnage): void {
        let vig = document.createElement("div");
        vig.classList.add("col-md-4");
        vig.classList.add("mb-4");

        let carte = document.createElement("div");
        carte.classList.add("card");

        let img = document.createElement("img");
        img.src = "public/img/" + p.Nom + ".png";

        carte.appendChild(img);

        let body = document.createElement("div");
        body.classList.add("card-body");

        let nom = document.createElement("h5");
        nom.classList.add("card-title");
        nom.innerHTML = p.Nom
        body.appendChild(nom);

        let a = document.createElement("a");
        a.href = "personnage.html?id=" + p.Id;
        a.innerText = "Voir plus";
        a.classList.add("btn");
        a.classList.add("btn-primary");
        body.appendChild(a);

        carte.appendChild(body);
        vig.appendChild(carte);

        this.div.appendChild(vig);
    }

    Error(msg: string): void {
        this.div.innerHTML = "<p>Aucun personnage trouvé.</p>";
    }

    async ListAllChars () {
        this.div.innerHTML = ""; 
        await this.ctrl.ListAllChars(); 
    }

}