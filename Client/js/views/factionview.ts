class FactionView{

    private dao : FactionDAO;
    private div : HTMLDivElement;
    private title : HTMLTitleElement;
    private bio : HTMLParagraphElement;
    private members : HTMLUListElement;


    constructor(){
       
        this.dao = new FactionDAO();
        
        
        const urlParams = new URLSearchParams(window.location.search);

        const id = urlParams.get('id');
        this.title = document.getElementById("faction-name") as HTMLTitleElement;
        this.bio = document.getElementById("faction-background") as HTMLParagraphElement;
        this.members = document.getElementById("faction-members") as HTMLUListElement;
            
        this.DisplayFaction(id)
    }

    async DisplayFaction(id) {
        try{
            let f = await this.dao.GetById(id);
            this.title.innerHTML = f.Nom;
            this.bio.innerHTML = f.Bio;

            let members = await this.dao.GetMembres(id);
            this.members.innerHTML = "";
            for(let i = 0; i < members.length; i++){
                let li = document.createElement("li");
                let a = document.createElement("a");
                a.innerHTML = members[i].Nom_Personnage + " - " + members[i].Role;
                a.href = "personnage.html?id="+members[i].Id_Personnage;
                li.appendChild(a);
                this.members.appendChild(li);
            }
        } catch {
            this.div.innerHTML = "<p>Aucune faction trouvé.</p>";
        }
        
    }

}