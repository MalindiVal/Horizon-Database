var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class RelationController extends Observable {
    constructor(dao) {
        super();
        this.dao = dao;
    }
    listRelations() {
        return __awaiter(this, void 0, void 0, function* () {
            let list = Array();
            try {
                let response = yield this.dao.GetAll();
                response.forEach(element => {
                    this.NotifyAjoutRelation(element);
                    list.push(element);
                });
            }
            catch (e) {
                this.NotifyError(e.Message);
            }
            return list;
        });
    }
    GetByPersonnage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let list = Array();
            try {
                let response = yield this.dao.GetByCharacters(id);
                response.forEach(element => {
                    this.NotifyAjoutRelation(element);
                    list.push(element);
                });
            }
            catch (e) {
                this.NotifyError(e.Message);
            }
            return list;
        });
    }
}
//# sourceMappingURL=RelationController.js.map