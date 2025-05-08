var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CharView {
    constructor(ctrl, racectrl, relationctrl) {
        this.ctrl = ctrl;
        this.ctrl.register(this);
        this.racectrl = racectrl;
        this.racectrl.register(this);
        this.relationctrl = relationctrl;
        this.relationctrl.register(this);
        this.rdao = new RelationDAO();
        this.title = document.getElementById("character-name");
        this.race = document.getElementById("character-race");
        this.bio = document.getElementById("character-background");
        this.tag = document.getElementById("character-tagline");
        this.desc = document.getElementById("character-description");
        this.relationdiv = document.getElementById("character-relationships");
        this.editbutton = document.getElementById("editbutton");
        this.DisplayCharacter();
    }
    AjoutRelation(r) {
        let li = document.createElement("li");
        li.innerHTML = r.Titre + " de ";
        let a = document.createElement("a");
        a.href = "personnage.html?id=" + r.Id;
        a.innerHTML += r.Cible;
        li.appendChild(a);
        this.relationul.appendChild(li);
    }
    AjoutRace(r) {
        let arace = document.createElement("a");
        arace.href = "race.html?id=" + this.perso.IdRace;
        arace.innerHTML = r.Nom;
        this.race.appendChild(arace);
    }
    Notify(msg) {
        throw new Error("Method not implemented.");
    }
    AjoutPerso(p) {
        this.perso = p;
        this.editbutton.href += "?id=" + this.perso.Id;
        document.title = this.perso.Nom + "- Project Horizon";
        this.title.innerHTML = this.perso.Nom;
        this.bio.innerHTML = this.perso.Bio;
        this.desc.innerHTML = this.perso.Description;
        this.tag.innerHTML = this.perso.Tagline;
    }
    AjoutFaction(f) {
        throw new Error("Method not implemented.");
    }
    Error(msg) {
        throw new Error("Method not implemented.");
    }
    DisplayCharacter() {
        return __awaiter(this, void 0, void 0, function* () {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            this.relationdiv.innerHTML = "";
            this.relationul = document.createElement("ul");
            let p = yield this.ctrl.GetById(Number(id));
            yield this.racectrl.GetById(Number(p.IdRace));
            yield this.relationctrl.GetByPersonnage(Number(id));
            this.relationdiv.appendChild(this.relationul);
        });
    }
}
//# sourceMappingURL=charview.js.map