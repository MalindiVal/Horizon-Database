class PersonnageDAO{
    
    private api : string;
    constructor(){
        this.api = "http://localhost:80/horizon/API/controllers/characters/";
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
                    let char = new Personnage();
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

    async GetById(id) {
        try {
            let liste = [];
            let apiurl = this.api + "getById.php?id="+id;
            let response = await fetch(apiurl);
    
            if (response.status === 200) {
                // Extraction des données JSON
                let data = await response.json();
                    // Hydratation
                    let char = new Personnage();
                    char.hydrate(data);
                    liste.push(char);  // Correction ici
                return char;
            } else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
        } catch (error) {
            throw new Error(`An error occurred while fetching characters: ${error.message}`);
        }
    }

    async Add(char : Personnage) {
        try {
            let apiurl = this.api + "Add.php";
            let response = await fetch(apiurl,{
                method : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify(char)
            });
    
            if (response.ok) {
                return await response.json(); // if your PHP returns true/false
            } else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async Update(char : Personnage) {
        try {
            let apiurl = this.api + "Update.php";
            let response = await fetch(apiurl,{
                method : "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                },
                body : JSON.stringify(char)
            });
    
            if (response.ok) {
                return await response.json(); // if your PHP returns true/false
            } else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}
