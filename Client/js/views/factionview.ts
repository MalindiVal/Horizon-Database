class FactionView implements Observer{

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
        this.title.innerHTML = f.Nom;
        this.bio.innerHTML = f.Bio;
    }
    AjoutRace(r: Race): void {
        throw new Error("Method not implemented.");
    }
    Error(msg: string): void {
        this.div.innerHTML = "<p>Aucune faction trouvé.</p>";
    }

    async DisplayFaction(id) {
        await this.dao.GetById(id);
    }

}