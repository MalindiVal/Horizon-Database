class Relation {
    constructor(data) {
        if (data)
            this.hydrate(data);
    }
    get Id() {
        return this.id;
    }
    get Id_P1() {
        return this.id_p1;
    }
    get Id_P2() {
        return this.id_p2;
    }
    get Titre() {
        return this.titre;
    }
    get Description() {
        return this.description;
    }
    get Cible() {
        return this.cible;
    }
    get Type() {
        return this.Type;
    }
    get IdType() {
        return this.id_type;
    }
    hydrate(data) {
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
//# sourceMappingURL=Relation.js.map