class FactionDAO extends DAO{
    
    constructor(){
        super();
        this.api += "type=faction";
    }

    async GetAll() {
        
        let liste = [];
        let apiurl = this.api + "&action=get-all";
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
        let apiurl = this.api + "&action=get-by-id&id="+id;
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
