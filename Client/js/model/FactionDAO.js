var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class FactionDAO extends DAO {
    constructor() {
        super();
        this.api += "type=faction";
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
                        let faction = new Faction();
                        faction.hydrate(row);
                        liste.push(faction); // Correction ici
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
            let faction = new Faction();
            let liste = [];
            let apiurl = this.api + "&action=get-by-id&id=" + id;
            let response = yield fetch(apiurl);
            if (response.status === 200) {
                // Extraction des données 
                let data = yield response.json();
                if (data) {
                    faction.hydrate(data);
                    liste.push(faction);
                }
                else {
                    throw new Error(`Aucune Donnée`);
                }
            }
            else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            return faction;
        });
    }
}
//# sourceMappingURL=FactionDAO.js.map