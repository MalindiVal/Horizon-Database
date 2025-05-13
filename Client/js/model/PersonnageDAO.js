var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class PersonnageDAO extends DAO {
    constructor() {
        super();
        this.api += "type=personnage";
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
                        let char = new Personnage();
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
    GetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let char = new Personnage();
            let apiurl = this.api + "&action=get-by-id&id=" + id;
            let response = yield fetch(apiurl);
            if (response.status === 200) {
                let data = yield response.json();
                if (data) {
                    char.hydrate(data);
                }
                else {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
            }
            else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            return char;
        });
    }
    Add(char) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = false;
            let apiurl = this.api + "&action=add";
            let response = yield fetch(apiurl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(char)
            });
            if (response.ok) {
                res = yield response.json(); // if your PHP returns true/false
            }
            else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            return res;
        });
    }
    Update(char) {
        return __awaiter(this, void 0, void 0, function* () {
            let apiurl = this.api + "&action=update";
            let response = yield fetch(apiurl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                },
                body: JSON.stringify(char)
            });
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
        });
    }
}
//# sourceMappingURL=PersonnageDAO.js.map