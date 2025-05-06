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
    constructor(ctrl, racectrl) {
        this.perso = null;
        this.ctrl = ctrl;
        this.ctrl.register(this);
        this.exist = false;
        this.racectrl = racectrl;
        this.racectrl.register(this);
        document.title = "Ajout d'un personnage - Project Horizon";
        this.title = document.getElementById("title");
        this.nameinput = document.getElementById("name");
        this.genderinput = document.getElementById("gender");
        this.raceinput = document.getElementById("race");
        this.taginput = document.getElementById("tag");
        this.descinput = document.getElementById("desc");
        this.bioinput = document.getElementById("bio");
        this.validatebutton = document.getElementById("submit");
        this.validatebutton.addEventListener("click", () => this.Validate());
        this.title.innerHTML = "Ajout";
        this.init();
    }
    Notify(msg) {
        throw new Error("Method not implemented.");
    }
    AjoutPerso(p) {
        if (this.perso == null) {
            this.perso = p;
            this.exist = true;
            this.title.innerHTML = "Edit";
            document.title = "Modification de " + this.perso.Nom + " - Project Horizon";
            this.nameinput.value = this.perso.Nom;
            for (let i = 0; i < this.genderinput.options.length; i++) {
                if (this.genderinput.options[i].value.toUpperCase() == this.perso.Gender) {
                    this.genderinput.options.selectedIndex = i;
                    break;
                }
            }
            for (let i = 0; i < this.raceinput.options.length; i++) {
                if (this.raceinput.options[i].value == String(this.perso.IdRace)) {
                    this.raceinput.options.selectedIndex = i;
                    break;
                }
            }
            this.taginput.value = this.perso.Tagline;
            this.bioinput.value = this.perso.Bio;
        }
    }
    AjoutFaction(f) {
        throw new Error("Method not implemented.");
    }
    AjoutRace(r) {
        if (this.exist == false) {
            let option = document.createElement("option");
            option.innerHTML = r.Nom;
            option.value = r.Id.toString();
            this.raceinput.appendChild(option);
        }
    }
    AjoutRelation(r) {
        throw new Error("Method not implemented.");
    }
    Error(msg) {
        this.perso = new Personnage();
        this.exist = false;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            let races = yield this.racectrl.List();
            const urlParams = new URLSearchParams(window.location.search);
            let id = urlParams.get('id');
            this.perso = yield this.ctrl.GetById(Number(id));
        });
    }
    Validate() {
        return __awaiter(this, void 0, void 0, function* () {
            this.perso.Nom = this.nameinput.value;
            this.perso.Tagline = this.taginput.value;
            this.perso.Gender = this.genderinput.value.toUpperCase();
            this.perso.IdRace = Number(this.raceinput.value);
            this.perso.Bio = this.bioinput.value;
            this.perso.Description = this.descinput.value;
            let res = false;
            if (this.exist) {
                res = yield this.ctrl.Update(this.perso);
            }
            else {
                res = yield this.ctrl.Add(this.perso);
            }
            if (res) {
                // window.document.URL = "personnage.html"
            }
        });
    }
}
//# sourceMappingURL=editcharview.js.map