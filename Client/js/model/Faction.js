class Faction{
    constructor(){
        this.id = 0;
        this.nom = "";
        this.bio = "";
    }

    get Id(){
        return this.id;
    }

    get Nom(){
        return this.nom;
    }

    get Bio(){
        return this.bio;
    }




    hydrate(data){
        if(data["id"]){
            this.id = data["id"];
        }

        if(data["nom"]){
            this.nom = data["nom"];
        }

        if(data["bio"]){
            this.bio = data["bio"];
        }
    }
}