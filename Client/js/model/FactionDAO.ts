class FactionDAO{
    
    private api : string;
    constructor(){
        this.api = "http://localhost:80/horizon/API/controllers/factions/";
    }

    async GetAll() {
        try {
            let liste = [];
            let apiurl = this.api + "getAll.php";
            let response = await fetch(apiurl);
    
            if (response.status === 200) {
                // Extraction des données JSON
                let data = await response.json();
                data.forEach((row) => {
                    // Hydratation
                    let faction = new Faction();
                    faction.hydrate(row);
                    liste.push(faction);  // Correction ici
                });
                return liste;
            } else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
        } catch (error) {
            throw new Error(`An error occurred while fetching factions: ${error.message}`);
        }
    }

    async GetById(id) {
        try {
            let liste = [];
            let apiurl = this.api + "getById.php?id="+id;
            let response = await fetch(apiurl);
    
            if (response.status === 200) {
                // Extraction des données JSON
                let data = await response.json();
                    // Hydratation
                    let faction = new Faction();
                    faction.hydrate(data);
                    liste.push(faction);  // Correction ici
                return faction;
            } else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
        } catch (error) {
            throw new Error(`An error occurred while fetching factions: ${error.message}`);
        }
    }
}
