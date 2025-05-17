var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class RaceDAO extends DAO {
    constructor() {
        super();
        this.api += "type=race";
    }
    GetAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let liste = [];
            let apiurl = this.api + "&action=get-all";
            let response = yield fetch(apiurl);
            if (response.status === 200) {
                // Extraction des données JSON
                let data = yield response.json();
                if (data) {
                    data.forEach((row) => {
                        // Hydratation
                        let race = new Race();
                        race.Id = row.Id;
                        race.Nom = row.nom;
                        liste.push(race); // Correction ici
                    });
                }
                else {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
            }
            else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            return liste;
        });
    }
    GetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let race = new Race();
            let apiurl = this.api + "&action=get-by-id&id=" + id;
            let response = yield fetch(apiurl);
            if (response.status === 200) {
                // Extraction des données JSON
                let data = yield response.json();
                if (data) {
                    race.Id = data.Id;
                    race.Nom = data.nom;
                }
                else {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
            }
            else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            return race;
        });
    }
}
//# sourceMappingURL=RaceDAO.js.map