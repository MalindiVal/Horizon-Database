class RaceDAO{
    
    private api : string;
    constructor(){
        this.api = "http://localhost:80/horizon/API/controllers/races/";
    }

    async GetAll() : Promise<Race[]> {
        let liste = [];
        let apiurl = this.api + "getAll.php";
        let response = await fetch(apiurl);
    
            if (response.status === 200) {
                // Extraction des données JSON
                let data = await response.json();
                if (data){
                    data.forEach((row) => {
                        // Hydratation
                        let race = new Race();
                        race.Id = row.Id;
                        race.Nom = row.nom;
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
        let apiurl = this.api + "getById.php?id="+id;
        let response = await fetch(apiurl);
    
        if (response.status === 200) {
            // Extraction des données JSON
            let data = await response.json();
            if (data){
                race.Id = data.Id;
                race.Nom = data.nom;
            } else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            
            
        } else {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        return race;
    }
}