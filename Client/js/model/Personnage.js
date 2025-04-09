class Personnage{
    constructor(){
        this.id = 0;
        this.nom = "";
        this.bio = "";
        this.tagline = "";
        this.race = new Race();
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

    get Tagline(){
        return this.tagline;
    }

    get Race(){
        return this.race;
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

        if(data["tagline"]){
            this.tagline = data["tagline"];
        }

        if(data["id_race"]){
            this.race.hydrate(data);
        }
    }
}