class PersonnageDAO extends DAO{
    
    constructor(){
        super();
        this.api += "type=personnage";
    }

    async GetAll() : Promise<Personnage[]> {
        let liste = [];
        let apiurl = this.api + "&action=get-all";
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
        let apiurl = this.api + "&action=get-by-id&id="+id;
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
        let apiurl = this.api + "&action=add";
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
        let apiurl = this.api + "&action=update";
        let response = await fetch(apiurl,{
            method : "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body : JSON.stringify(char)
        });
    
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
    }
}
