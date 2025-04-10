class Relation {
    get Id() {
        return this.id;
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
    hydrate(data) {
        if (data["id_p2"]) {
            this.id = data["id_p2"];
        }
        if (data["titre"]) {
            this.titre = data["titre"];
        }
        if (data["description"]) {
            this.description = data["description"];
        }
        if (data["cible"]) {
            this.cible = data["cible"];
        }
    }
}
//# sourceMappingURL=Relation.js.map