var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class RaceView {
    constructor(ctrl) {
        this.ctrl = ctrl;
        this.title = document.getElementById("race-name");
        this.bio = document.getElementById("race-background");
        this.DisplayRace();
    }
    Notify(msg) {
        throw new Error("Method not implemented.");
    }
    AjoutPerso(p) {
        throw new Error("Method not implemented.");
    }
    AjoutFaction(f) {
        throw new Error("Method not implemented.");
    }
    AjoutRace(r) {
        this.race = r;
        document.title = this.race.Nom + "- Project Horizon";
        this.title.innerHTML = this.race.Nom;
        this.bio.innerHTML = this.race.Bio;
    }
    Error(msg) {
    }
    DisplayRace() {
        return __awaiter(this, void 0, void 0, function* () {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            yield this.ctrl.GetById(Number(id));
        });
    }
}
//# sourceMappingURL=raceview.js.map