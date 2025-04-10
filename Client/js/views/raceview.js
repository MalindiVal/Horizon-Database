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
    constructor(race) {
        this.race = race;
        this.title = document.getElementById("race-name");
        this.bio = document.getElementById("race-background");
        this.DisplayRace();
    }
    DisplayRace() {
        return __awaiter(this, void 0, void 0, function* () {
            this.title.innerHTML = this.race.Nom;
            this.bio.innerHTML = this.race.Bio;
        });
    }
}
//# sourceMappingURL=raceview.js.map