class Relation{
    private id : number;
    private titre : string;
    private description : string;
    private id_type : number;
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

    public get IdType(){
        return this.id_type;
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

        if(data["id_type"]){
            this.id_type = data["id_type"];
        }
    }
}