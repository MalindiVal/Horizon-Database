var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class RaceDAO {
    constructor() {
        this.api = "http://localhost:80/horizon/API/controllers/races/";
    }
    GetAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let liste = [];
                let apiurl = this.api + "getAll.php";
                let response = yield fetch(apiurl);
                if (response.status === 200) {
                    // Extraction des données JSON
                    let data = yield response.json();
                    data.forEach((row) => {
                        // Hydratation
                        let race = new Race();
                        race.Id = row.Id;
                        race.Nom = row.nom;
                        liste.push(race); // Correction ici
                    });
                    return liste;
                }
                else {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
            }
            catch (error) {
                throw new Error(`An error occurred while fetching races: ${error.message}`);
            }
        });
    }
}
//# sourceMappingURL=RaceDAO.js.map