class CharView{

    constructor(){
       
        this.dao = new PersonnageDAO();
        
        
        const urlParams = new URLSearchParams(window.location.search);

        const id = urlParams.get('id');

        if (!id){
            this.div = document.getElementById("characterlist");
            this.ListAllChars();}
        else {
            this.rdao = new RelationDAO();
            this.title = document.getElementById("character-name");
            this.race = document.getElementById("character-race");
            this.bio = document.getElementById("character-background");
            this.relationdiv = document.getElementById("character-relationships")
            this.editbutton = document.getElementById("editbutton");
            this.DisplayCharacter(id)
        }
    }

    async ListAllChars () {
        let list = await this.dao.GetAll();
        this.div.innerHTML = "";
        
        if (!list || list.length === 0) {
            this.div.innerHTML = "<p>Aucun personnage trouvé.</p>";
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
            a.href = "personnage.html?id=" + list[i].Id;
            a.innerText = "Voir plus";
            a.classList.add("btn");
            a.classList.add("btn-primary");
            body.appendChild(a);

            carte.appendChild(body);
            vig.appendChild(carte);

            this.div.appendChild(vig);
        }
    }

    async DisplayCharacter(id) {
        let char = await this.dao.GetById(id);

        this.title.innerHTML = char.Nom;
        this.bio.innerHTML = char.Bio;
        
        let arace = document.createElement("a");
        arace.href = "Race?id="+char.race.Id;
        arace.innerHTML = char.Nom;
        this.race.innerHTML.appendChild(arace)

        let relations = await this.rdao.GetByCharacters(id);
        this.relationdiv.innerHTML = "";
        let ul = document.createElement("ul");

        this.editbutton.href += "?id="+id;
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