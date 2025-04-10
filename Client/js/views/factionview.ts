class FactionView{

    private dao : FactionDAO;
    private div : HTMLDivElement;
    private title : HTMLTitleElement;
    private bio : HTMLParagraphElement;


    constructor(){
       
        this.dao = new FactionDAO();
        
        
        const urlParams = new URLSearchParams(window.location.search);

        const id = urlParams.get('id');
        this.title = document.getElementById("faction-name") as HTMLTitleElement;
        this.bio = document.getElementById("faction-background") as HTMLParagraphElement;
            
        this.DisplayFaction(id)
    }

    async ListAllFactions () {
        let list = await this.dao.GetAll();
        this.div.innerHTML = "";
        
        if (!list || list.length === 0) {
            this.div.innerHTML = "<p>Aucune faction trouvé.</p>";
            return;
        }
        

        for (let i = 0; i < list.length; i++){
            let vig = document.createElement("div");
            vig.classList.add("col-md-4");
            vig.classList.add("mb-4");

            let carte = document.createElement("div");
            carte.classList.add("card");

            let img = document.createElement("img");
            img.src = "public/img/" + list[i].Nom + ".png";

            carte.appendChild(img);

            let body = document.createElement("div");
            body.classList.add("card-body");

            let nom = document.createElement("h5");
            nom.classList.add("card-title");
            nom.innerHTML = list[i].Nom
            body.appendChild(nom);

            let a = document.createElement("a");
            a.href = "faction.html?id=" + list[i].Id;
            a.innerText = "Voir plus";
            a.classList.add("btn");
            a.classList.add("btn-primary");
            body.appendChild(a);

            carte.appendChild(body);
            vig.appendChild(carte);

            this.div.appendChild(vig);
        }
    }

    async DisplayFaction(id) {
        let faction = await this.dao.GetById(id);

        this.title.innerHTML = faction.Nom;
        this.bio.innerHTML = faction.Bio;
        
        
    }

}