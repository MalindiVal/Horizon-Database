class RaceDAO extends DAO{
    
    constructor(){
        super();
        this.api += "type=race";
    }

    async GetAll() : Promise<Race[]> {
        let liste = [];
        let apiurl = this.api + "&action=get-all";
        let response = await fetch(apiurl);
    
            if (response.status === 200) {
                // Extraction des données JSON
                let data = await response.json();
                if (data){
                    data.forEach((row) => {
                        // Hydratation
                        let race = new Race();
                        race.hydrate(row);
                        liste.push(race);  // Correction ici
                    });
                }else {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                
                
            } else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
        return liste;
    }

    async GetById(id)  : Promise<Race> {
        let race = new Race();
        let apiurl = this.api + "&action=get-by-id&id="+id;
        let response = await fetch(apiurl);
    
        if (response.status === 200) {
            // Extraction des données JSON
            let data = await response.json();
            if (data){
                race.hydrate(data);
            } else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            
            
        } else {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        return race;
    }
}