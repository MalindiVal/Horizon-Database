class Race{
    constructor(){
        this.id = 0;
        this.nom = "";
    }

    get Nom(){
        return this.nom;
    }

    get Id(){
        return this.id;
    }




    hydrate(data){
        if(data["id_race"]){
            this.id = data["id_race"];
            if(data["race"]){
                this.nom = data["race"];
            }
        }

        
    }
}