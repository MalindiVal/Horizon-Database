class Race {
    get Nom() {
        return this.nom;
    }
    get Description() {
        return this.description;
    }
    get Id() {
        return this.id;
    }
    get Culture() {
        return this.culture;
    }
    get Apparence() {
        return this.apparence;
    }
    set Id(id) {
        this.id = id;
    }
    set Nom(nom) {
        this.nom = nom;
    }
    set Description(description) {
        this.description = description;
    }
    set Culture(culture) {
        this.culture = culture;
    }
    set Apparence(apparence) {
        this.apparence = apparence;
    }
    hydrate(data) {
        if (data["Id"]) {
            this.id = data["Id"];
        }
        if (data["nom"]) {
            this.nom = data["nom"];
        }
        if (data["description"]) {
            this.description = data["description"];
        }
        if (data["culture"]) {
            this.culture = data["culture"];
        }
        if (data["apparence"]) {
            this.apparence = data["apparence"];
        }
    }
}
//# sourceMappingURL=Race.js.map