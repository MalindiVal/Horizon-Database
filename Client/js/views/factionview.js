var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class FactionView {
    constructor() {
        this.dao = new FactionDAO();
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        this.title = document.getElementById("faction-name");
        this.bio = document.getElementById("faction-background");
        this.DisplayFaction(id);
    }
    Notify(msg) {
        throw new Error("Method not implemented.");
    }
    AjoutPerso(p) {
        throw new Error("Method not implemented.");
    }
    AjoutFaction(f) {
        this.title.innerHTML = f.Nom;
        this.bio.innerHTML = f.Bio;
    }
    AjoutRace(r) {
        throw new Error("Method not implemented.");
    }
    Error(msg) {
        this.div.innerHTML = "<p>Aucune faction trouvé.</p>";
    }
    DisplayFaction(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.dao.GetById(id);
        });
    }
}
//# sourceMappingURL=factionview.js.map