class RelationDAO extends DAO {
    constructor(){
        super();
        this.api = "relationships/";
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
                    let char = new Relation();
                    char.hydrate(row);
                    liste.push(char);  // Correction ici
                });
                return liste;
            } else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
        } catch (error) {
            throw new Error(`An error occurred while fetching characters: ${error.message}`);
        }
    }

    async GetByCharacters(id) {
        try {
            let liste = [];
            let apiurl = this.api + "getByCharacters.php?id="+id;
            let response = await fetch(apiurl);
    
            if (response.status === 200) {
                // Extraction des données JSON
                let data = await response.json();
                data.forEach((row) => {
                    // Hydratation
                    let char = new Relation();
                    char.hydrate(row);
                    liste.push(char);  // Correction ici
                });
                return liste;
            } else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
        } catch (error) {
            throw new Error(`An error occurred while fetching characters: ${error.message}`);
        }
    }
}
