class Faction{
    private id : number;
    private nom : string;
    private bio : string;

    get Id(){
        return this.id;
    }

    get Nom(){
        return this.nom;
    }

    get Bio(){
        return this.bio;
    }

    set Id(id : number){
        this.id = id;
    }

    set Nom(nom : string){
        this.nom = nom;
    }

    set Bio(bio : string){
        this.bio = bio;
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