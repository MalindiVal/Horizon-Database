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
    get Race() {
        return this.race;
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
    set Race(race) {
        this.race = race;
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
            this.race = new Race();
            this.race.hydrate(data);
        }
    }
}
//# sourceMappingURL=Personnage.js.map