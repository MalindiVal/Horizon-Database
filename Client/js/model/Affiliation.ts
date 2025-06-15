class Affiliation {
    private id : number;
    private id_faction : number;
    private nom_faction : string;
    private id_personnage : number;
    private nom_personnage : string;
    private role : string;

    public get Id() : number{
        return this.id;
    }

    public get Id_Personnage() : number{
        return this.id_personnage;
    }

    public get Id_Faction() : number{
        return this.id_faction;
    }

    public get Role() : string{
        return this.role;
    }

    public get Nom_Personnage() : string{
        return this.nom_personnage;
    }

    public get Nom_Faction() : string{
        return this.nom_faction;
    }

    public set Id(id : number){
        this.id = id;
    }

    public set Id_Personnage(id : number){
        this.id_personnage = id;
    }

    public set Id_Faction(id : number){
        this.id_faction = id;
    }

    public set Role(role : string){
        this.role = role;
    }

    public set Nom_Personnage(nom : string){
        this.nom_personnage = nom;
    }

    public set Nom_Faction(nom : string){
        this.nom_faction = nom;
    }

    public hydrate(data : []){
        if(data["id"]){
            this.id = Number(data["id"]);
        }

        if(data["id_personnage"]){
            this.id_personnage = Number(data["id_personnage"]);
        }

        if(data["id_faction"]){
            this.id_faction = Number(data["id_faction"]);
        }

        if(data["role"]){
            this.role = data["role"];
        }

        if(data["nom_personnage"]){
            this.nom_personnage = data["nom_personnage"];
        }

        if(data["nom_faction"]){
            this.nom_faction = data["nom_faction"];
        }

    }

}