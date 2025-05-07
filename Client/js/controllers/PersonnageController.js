var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class PersonnageController extends Observable {
    constructor(dao, racectrl, relationctrl) {
        super();
        this.dao = dao;
        this.racectrl = racectrl;
        this.relationctrl = relationctrl;
    }
    ListAllChars() {
        return __awaiter(this, void 0, void 0, function* () {
            let list = Array();
            try {
                let response = yield this.dao.GetAll();
                response.forEach(element => {
                    this.NotifyAjoutPerso(element);
                    list.push(element);
                });
            }
            catch (_a) {
                this.NotifyError("Erreur");
            }
            return list;
        });
    }
    GetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let perso = new Personnage();
            try {
                let response = yield this.dao.GetById(id);
                this.NotifyAjoutPerso(response);
                let race = yield this.racectrl.GetById(response.IdRace);
                this.NotifyAjoutRace(race);
                let relations = yield this.relationctrl.GetByPersonnage(id);
                relations.forEach(element => {
                    this.NotifyAjoutRelation(element);
                });
                perso = response;
            }
            catch (_a) {
                this.NotifyError("Erreur");
            }
            return perso;
        });
    }
    Add(char) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = false;
            try {
                res = yield this.dao.Add(char);
                this.NotifyAjoutPerso(char);
            }
            catch (error) {
                this.NotifyError("Erreur");
            }
            return res;
        });
    }
    Update(char) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = false;
            try {
                yield this.dao.Update(char);
            }
            catch (error) {
                this.NotifyError("Erreur lors de la mise à jour");
            }
            return res;
        });
    }
}
//# sourceMappingURL=PersonnageController.js.map