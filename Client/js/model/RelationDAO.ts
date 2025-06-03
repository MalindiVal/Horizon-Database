class RelationDAO extends DAO{
    
    constructor(){
        super();
        this.api += "type=relation";
    }

    async GetAll() : Promise<Relation[]> {
        let liste = [];
        let apiurl = this.api + "&action=get-all";
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
            let apiurl = this.api + "&action=get-by-id-personnage&id="+id;
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

    async GetById(id) : Promise<Relation> {
            let relation = null;
            let apiurl = this.api + "&action=get-by-id&id="+id;
            let response = await fetch(apiurl);
    
            if (response.status === 200) {
                // Extraction des données JSON
                let data = await response.json();
                if (data){
                        // Hydratation
                        relation = new Relation();
                        relation.hydrate(data);
                } else {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                
                
            } else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            return relation;
    }

    async Add(rel : Relation) {
        let res = false
        alert(JSON.stringify(rel));
        let apiurl = this.api + "&action=add";
        let response = await fetch(apiurl,{
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(rel)
        });
    
        if (response.ok) {
            res =  await response.json(); // if your PHP returns true/false
        } else {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        return res;
    }

    async Update(rel : Relation) {
        let apiurl = this.api + "&action=update";
        let response = await fetch(apiurl,{
            method : "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body : JSON.stringify(rel)
        });
    
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
    }

    async GetAllTypes() : Promise<RelationType[]> {
        let liste = new Array<RelationType>();
        let apiurl = this.api + "&action=get-all-types";
        let response = await fetch(apiurl);

        if (response.status === 200) {
            // Extraction des données JSON
            let data = await response.json();
            if (data){
                data.forEach((row) => {
                    // Hydratation
                    let relation = new RelationType();
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
