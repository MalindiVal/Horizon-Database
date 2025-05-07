class FactionDAO{
    
    private api : string;
    constructor(){
        this.api = "http://localhost:80/horizon/API/controllers/factions/";
    }

    async GetAll() {
        
        let liste = [];
        let apiurl = this.api + "getAll.php";
        let response = await fetch(apiurl);
    
        if (response.status === 200) {
            // Extraction des données JSON
            let data = await response.json();
            if (data){
                data.forEach((row) => {
                    // Hydratation
                    let faction = new Faction();
                    faction.hydrate(row);
                    liste.push(faction);  // Correction ici
                });
            } else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
        } else {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        return liste;
    }

    async GetById(id) {
        let faction = new Faction();
        let liste = [];
        let apiurl = this.api + "getById.php?id="+id;
        let response = await fetch(apiurl);
        
    
            if (response.status === 200) {
                // Extraction des données 
                let data = await response.json();
                if (data){
                    faction.hydrate(data);
                    liste.push(faction);    
                } else {
                    throw new Error(`Aucune Donnée`);
                }
            } else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
        return faction;
    }
}
