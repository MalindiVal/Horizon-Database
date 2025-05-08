class RelationType{
    private id : number;
    private titre : string;
    
    public get Id(){
        return this.id;
    }

    public get Titre(){
        return this.titre;
    }

    public hydrate(data){
        if(data["id"]){
            this.id = data["id"];
        }

        if(data["type"]){
            this.titre = data["type"];
        }

    }
}