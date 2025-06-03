class Relation {
    private id: number;
    private id_p1: number;
    private id_p2: number;
    private titre: string;
    private description: string;
    private id_type: number;
    private type: string;
    private cible: string;

    constructor(data?: any) {
        if (data) this.hydrate(data);
    }

    public get Id(): number {
        return this.id;
    }

    public get Id_P1(): number {
        return this.id_p1;
    }

    public get Id_P2(): number {
        return this.id_p2;
    }

    public get Titre(): string {
        return this.titre;
    }

    public get Description(): string {
        return this.description;
    }

    public get Cible(): string {
        return this.cible;
    }

    public get Type(): string {
        return this.type;
    }

    public get IdType(): number {
        return this.id_type;
    }

     public set Id_P1(id : number) {
        this.id_p1 = id;
    }

    public set Id_P2(id : number){
        this.id_p2 = id;
    }

    public set Titre(title : string) {
        this.titre = title;
    }

    public set Description(desc : string) {
        this.description = desc;
    }


    public set IdType(id : number) {
        this.id_type = id;
    }

    public hydrate(data: any): void {
        
        if (data["id"] !== undefined) {
            this.id = data["id"];
        }

        if (data["id_p1"] !== undefined) {
            this.id_p1 = data["id_p1"];
        }

        if (data["id_p2"] !== undefined) {
            this.id_p2 = data["id_p2"];
        }

        if (data["titre"] !== undefined) {
            this.titre = data["titre"];
        }

        if (data["description"] !== undefined) {
            this.description = data["description"];
        }

        if (data["cible"] !== undefined) {
            this.cible = data["cible"];
        }

        if (data["id_type"] !== undefined) {
            this.id_type = data["id_type"];
        }

        if (data["type"] !== undefined) {
            this.type = data["type"];
        }
    }
}
