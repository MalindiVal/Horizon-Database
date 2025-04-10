class Personnage{
    
    private id : number;
    private nom : string;
    private bio : string;
    private gender : string;
    private tagline : string;
    private race : Race;

    get Id(){
        return this.id;
    }

    get Nom(){
        return this.nom;
    }

    get Bio(){
        return this.bio;
    }

    get Gender(){
        return this.gender;
    }

    get Tagline(){
        return this.tagline;
    }

    get Race(){
        return this.race;
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

    set Gender(gender : string){
        this.gender = gender;
    }

    set Tagline(tag : string){
        this.tagline = tag;
    }

    set Race(race : Race){
        this.race = race;
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

        if(data["gender"]){
            this.gender = data["gender"];
        }

        if(data["id_race"]){
            this.race = new Race();
            this.race.hydrate(data);
        }
    }
}