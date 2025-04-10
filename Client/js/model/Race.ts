class Race{

    private id : number;
    private nom : string;

    public get Nom(){
        return this.nom;
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

    public hydrate(data){
        if(data["id_race"]){
            this.id = data["id_race"];
            if(data["race"]){
                this.nom = data["race"];
            }
        }

        
    }
}