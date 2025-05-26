class Race{

    private id : number;
    private nom : string;
    private description : string;
    private culture : string;
    private apparence : string;

    public get Nom() : string{
        return this.nom;
    }

    public get Description() : string{
        return this.description;
    }

    public get Id() : number{
        return this.id;
    }

    public get Culture() : string{
        return this.culture;
    }

    public get Apparence() : string{
        return this.apparence;
    }

    public set Id(id : number){
        this.id = id;
    }

    public set Nom(nom : string){
        this.nom = nom;
    }

    public set Description(description : string){
        this.description = description;
    }

    public set Culture(culture : string){
        this.culture = culture;
    }

    public set Apparence(apparence : string){
        this.apparence = apparence;
    }

    public hydrate(data){
        if(data["Id"]){
            this.id = data["Id"];
        }

        if(data["nom"]){
            this.nom = data["nom"];
        }

        if(data["description"]){
            this.description = data["description"];
        }

        if(data["culture"]){
            this.culture = data["culture"];
        }

        if(data["apparence"]){
            this.apparence = data["apparence"];
        }

        
    }
}