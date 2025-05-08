class RelationDAO{
    
    private api : string;
    constructor(){
        this.api = "http://localhost:80/horizon/API/controllers/relationships/";
    }

    async GetAll() : Promise<Relation[]> {
        let liste = [];
        let apiurl = this.api + "getAll.php";
        let response = await fetch(apiurl);
    
            if (response.status === 200) {
                // Extraction des données JSON
                let data = await response.json();
                if (data){
                    data.forEach((row) => {
                        // Hydratation
                        let char = new Relation();
                        char.hydrate(row);
                        liste.push(char);  // Correction ici
                    });
                } else {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                } 
            
                
            } else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            } 
            return liste;
    }

    async GetByCharacters(id) : Promise<Relation[]> {
            let liste = new Array<Relation>();
            let apiurl = this.api + "getByCharacters.php?id="+id;
            let response = await fetch(apiurl);
    
            if (response.status === 200) {
                // Extraction des données JSON
                let data = await response.json();
                if (data){
                    data.forEach((row) => {
                        // Hydratation
                        let relation = new Relation();
                        relation.hydrate(row);
                        liste.push(relation);  // Correction ici
                    });
                } else {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                
                
            } else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            return liste;
    }
}
