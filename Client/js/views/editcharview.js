var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class EditCharView {
    constructor(char, dao) {
        this.perso = char;
        this.dao = dao;
        this.nameinput = document.getElementById("name");
        this.genderinput = document.getElementById("gender");
        this.raceinput = document.getElementById("race");
        this.taginput = document.getElementById("tagline");
        this.bioinput = document.getElementById("bio");
        this.validatebutton = document.getElementById("submit");
        this.validatebutton.addEventListener("click", () => this.Validate());
        this.initRaceList();
    }
    initRaceList() {
        return __awaiter(this, void 0, void 0, function* () {
            let dao = new RaceDAO();
            let races = yield dao.GetAll();
            races.forEach(element => {
                let option = document.createElement("option");
                option.innerHTML = element.Nom;
                option.value = element.id;
                this.raceinput.appendChild(option);
            });
        });
    }
    Validate() {
        this.perso.Nom = this.nameinput.textContent;
        this.perso.Tagline = this.taginput.textContent;
        this.perso.Race.Id = Number(this.raceinput.value);
        this.perso.Bio = this.bioinput.textContent;
    }
}
//# sourceMappingURL=editcharview.js.map