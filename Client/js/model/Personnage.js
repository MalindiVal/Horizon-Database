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
        return this.idrace;
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
        this.idrace = race;
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
    }
}
//# sourceMappingURL=Personnage.js.map