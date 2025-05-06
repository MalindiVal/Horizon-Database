var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class RaceController extends Observable {
    constructor(dao) {
        super();
        this.dao = dao;
    }
    List() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield this.dao.GetAll();
                response.forEach(element => {
                    this.NotifyAjoutRace(element);
                });
            }
            catch (_a) {
                this.NotifyError("Erreur");
            }
        });
    }
    GetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield this.dao.GetById(id);
                this.NotifyAjoutRace(response);
            }
            catch (_a) {
                this.NotifyError("Erreur");
            }
        });
    }
}
//# sourceMappingURL=RaceController.js.map