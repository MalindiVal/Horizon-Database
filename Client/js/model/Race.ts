class Race{

    private id : number;
    private nom : string;
    private bio : string;

    public get Nom(){
        return this.nom;
    }

    public get Bio(){
        return this.bio;
    }

    public get Id(){
        return this.id;
    }

    public set Id(id){
        this.id = id;
    }

    public set Nom(nom){
        this.nom = nom;
    }

    public set Bio(bio){
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