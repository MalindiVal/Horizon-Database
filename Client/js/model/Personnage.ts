class Personnage{
    
    private id : number;
    private nom : string;
    private bio : string;
    private gender : string;
    private tagline : string;
    private description : string;
    private race : string;
    private id_race : number;

    public get Id(){
        return this.id;
    }

    public get Nom(){
        return this.nom;
    }

    public get Bio(){
        return this.bio;
    }

    public get Gender(){
        return this.gender;
    }

    public get Tagline(){
        return this.tagline;
    }

    public get IdRace(){
        return this.id_race;
    }

    public get Race(){
        return this.race;
    }

    public get Description(){
        return this.description;
    }

    public set Id(id : number){
        this.id = id;
    }

    public set Nom(nom : string){
        this.nom = nom;
    }

    public set Bio(bio : string){
        this.bio = bio;
    }

    public set Gender(gender : string){
        this.gender = gender;
    }

    public set Tagline(tag : string){
        this.tagline = tag;
    }

    public set IdRace(race : number){
        this.id_race = race;
    }

    public set Description (desc : string){
        this.description = desc;
    }


    public hydrate(data){
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
            this.IdRace = data["id_race"];
        }

        if(data["race"]){
            this.race = data["race"];
        }

        if(data["description"]){
            this.Description = data["description"];
        }
    }
}