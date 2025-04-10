class Race {
    get Nom() {
        return this.nom;
    }
    get Id() {
        return this.id;
    }
    set Id(id) {
        this.id = id;
    }
    set Nom(nom) {
        this.nom = nom;
    }
    hydrate(data) {
        if (data["id_race"]) {
            this.id = data["id_race"];
            if (data["race"]) {
                this.nom = data["race"];
            }
        }
    }
}
//# sourceMappingURL=Race.js.map