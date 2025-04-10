class Relation{
    private id : number;
    private titre : string;
    private description : string;
    private cible : string;

    public get Id(){
        return this.id;
    }

    public get Titre(){
        return this.titre;
    }

    public get Description(){
        return this.description;
    }

    public get Cible(){
        return this.cible;
    }

    public hydrate(data){
        if(data["id_p2"]){
            this.id = data["id_p2"];
        }

        if(data["titre"]){
            this.titre = data["titre"];
        }

        if(data["description"]){
            this.description = data["description"];
        }

        if(data["cible"]){
            this.cible = data["cible"];
        }
    }
}