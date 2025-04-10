class Race {
    get Nom() {
        return this.nom;
    }
    get Bio() {
        return this.bio;
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
    set Bio(bio) {
        this.bio = bio;
    }
    hydrate(data) {
        if (data["id_race"]) {
            this.id = data["id_race"];
            if (data["race"]) {
                this.nom = data["race"];
            }
            if (data["bio"]) {
                this.nom = data["bio"];
            }
        }
    }
}
//# sourceMappingURL=Race.js.map