var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class FactionController extends Observable {
    constructor(dao) {
        super();
        this.dao = dao;
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield this.dao.GetAll();
                for (let i = 0; i < response.length; i++) {
                    this.NotifyAjoutFaction(response[i]);
                }
            }
            catch (e) {
                this.NotifyError(e.Message);
            }
        });
    }
}
//# sourceMappingURL=FactionController.js.map