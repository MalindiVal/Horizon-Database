class Race{

    private id : number;
    private nom : string;
    private bio : string;

    public get Nom() : string{
        return this.nom;
    }

    public get Bio() : string{
        return this.bio;
    }

    public get Id() : number{
        return this.id;
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

    public hydrate(data){
        if(data["id_race"]){
            this.id = data["id_race"];
            if(data["race"]){
                this.nom = data["race"];
            }

            if(data["bio"]){
                this.nom = data["bio"];
            }
        }

        
    }
}