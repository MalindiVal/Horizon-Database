class Personnage {
    get Id() {
        return this.id;
    }
    get Nom() {
        return this.nom;
    }
    get Bio() {
        return this.bio;
    }
    get Gender() {
        return this.gender;
    }
    get Tagline() {
        return this.tagline;
    }
    get IdRace() {
        return this.id_race;
    }
    get Description() {
        return this.description;
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
    set Gender(gender) {
        this.gender = gender;
    }
    set Tagline(tag) {
        this.tagline = tag;
    }
    set IdRace(race) {
        this.id_race = race;
    }
    set Description(desc) {
        this.description = desc;
    }
    hydrate(data) {
        if (data["id"]) {
            this.id = data["id"];
        }
        if (data["nom"]) {
            this.nom = data["nom"];
        }
        if (data["bio"]) {
            this.bio = data["bio"];
        }
        if (data["tagline"]) {
            this.tagline = data["tagline"];
        }
        if (data["gender"]) {
            this.gender = data["gender"];
        }
        if (data["id_race"]) {
            this.IdRace = data["id_race"];
        }
        if (data["description"]) {
            this.Description = data["description"];
        }
    }
}
//# sourceMappingURL=Personnage.js.map