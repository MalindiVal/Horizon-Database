class PersonnageDAO{
    
    private api : string;
    constructor(){
        this.api = "http://localhost:80/horizon/API/controllers/characters/";
    }

    async GetAll() : Promise<Personnage[]> {
        let liste = [];
        let apiurl = this.api + "getAll.php";
        let response = await fetch(apiurl);
    
        if (response.status === 200) {
            // Extraction des données JSON
            let data = await response.json();
            if(data){
                data.forEach((row) => {
                    // Hydratation
                    let char = new Personnage();
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

    async GetById(id) : Promise<Personnage>{
        let char = new Personnage();
        let apiurl = this.api + "getById.php?id="+id;
        let response = await fetch(apiurl);
    
        if (response.status === 200) {

            let data = await response.json();
            if (data){
                char.hydrate(data);
            } else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }   
        } else {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        return char;
    }

    async Add(char : Personnage) {
        let res = false
        let apiurl = this.api + "Add.php";
        let response = await fetch(apiurl,{
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(char)
        });
    
        if (response.ok) {
            res =  await response.json(); // if your PHP returns true/false
        } else {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        return res;
    }

    async Update(char : Personnage) {
        let res = false
        let apiurl = this.api + "Update.php";
        let response = await fetch(apiurl,{
            method : "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body : JSON.stringify(char)
        });
    
        if (response.ok) {
            res =  await response.json(); // if your PHP returns true/false
        } else {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        return res;
    }
}
