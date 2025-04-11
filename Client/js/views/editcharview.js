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
        this.exist = false;
        if (char) {
            this.perso = char;
            this.exist = true;
        }
        else {
            this.perso = new Personnage();
        }
        this.dao = dao;
        this.nameinput = document.getElementById("name");
        this.genderinput = document.getElementById("gender");
        this.raceinput = document.getElementById("race");
        this.taginput = document.getElementById("tag");
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
            this.fillInfos();
        });
    }
    fillInfos() {
        if (this.exist) {
            this.nameinput.value = this.perso.Nom;
            for (let i = 0; i < this.genderinput.options.length; i++) {
                if (this.genderinput.options[i].value.toUpperCase() == this.perso.Gender) {
                    this.genderinput.options.selectedIndex = i;
                    break;
                }
            }
            for (let i = 0; i < this.raceinput.options.length; i++) {
                if (Number(this.raceinput.options[i].value) == this.perso.IdRace) {
                    this.raceinput.options.selectedIndex = i;
                    break;
                }
            }
            this.taginput.value = this.perso.Tagline;
            this.bioinput.value = this.perso.Bio;
        }
    }
    Validate() {
        return __awaiter(this, void 0, void 0, function* () {
            this.perso.Nom = this.nameinput.value;
            this.perso.Tagline = this.taginput.value;
            this.perso.Gender = this.genderinput.value.toUpperCase();
            this.perso.IdRace = Number(this.raceinput.value);
            this.perso.Bio = this.bioinput.value;
            let res = yield this.dao.Add(this.perso);
            if (res) {
            }
        });
    }
}
//# sourceMappingURL=editcharview.js.map