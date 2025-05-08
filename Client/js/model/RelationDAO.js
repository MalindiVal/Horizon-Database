var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class RelationDAO {
    constructor() {
        this.api = "http://localhost:80/horizon/API/controllers/relationships/";
    }
    GetAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let liste = [];
            let apiurl = this.api + "getAll.php";
            let response = yield fetch(apiurl);
            if (response.status === 200) {
                // Extraction des données JSON
                let data = yield response.json();
                if (data) {
                    data.forEach((row) => {
                        // Hydratation
                        let char = new Relation();
                        char.hydrate(row);
                        liste.push(char); // Correction ici
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
    GetByCharacters(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let liste = new Array();
            let apiurl = this.api + "getByCharacters.php?id=" + id;
            let response = yield fetch(apiurl);
            if (response.status === 200) {
                // Extraction des données JSON
                let data = yield response.json();
                if (data) {
                    data.forEach((row) => {
                        // Hydratation
                        let relation = new Relation();
                        relation.hydrate(row);
                        liste.push(relation); // Correction ici
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
}
//# sourceMappingURL=RelationDAO.js.map