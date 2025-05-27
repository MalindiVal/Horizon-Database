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
        this.personnagedao = new PersonnageDAO();
        this.relationdao = new RelationDAO();
        this.racedao = new RaceDAO();
        this.title = document.getElementById("character-name");
        this.race = document.getElementById("character-race");
        this.bio = document.getElementById("character-background");
        this.tag = document.getElementById("character-tagline");
        this.desc = document.getElementById("character-description");
        this.relationdiv = document.getElementById("character-relationships");
        this.editbutton = document.getElementById("editbutton");
        this.DisplayCharacter();
    }
    DisplayCharacter() {
        return __awaiter(this, void 0, void 0, function* () {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            this.relationdiv.innerHTML = "";
            this.relationul = document.createElement("ul");
            let p = yield this.personnagedao.GetById(Number(id));
            this.perso = p;
            this.editbutton.href += "?id=" + this.perso.Id;
            document.title = this.perso.Nom + "- Project Horizon";
            this.title.innerHTML = this.perso.Nom;
            this.bio.innerHTML = this.perso.Bio;
            this.desc.innerHTML = this.perso.Description;
            this.tag.innerHTML = this.perso.Tagline;
            let race = yield this.racedao.GetById(Number(p.IdRace));
            let arace = document.createElement("a");
            arace.href = "race.html?id=" + this.perso.IdRace;
            arace.innerHTML = race.Nom;
            this.race.appendChild(arace);
            let relations = yield this.relationdao.GetByCharacters(Number(id));
            relations.forEach(r => {
                let li = document.createElement("li");
                li.innerHTML = r.Titre + " de ";
                let a = document.createElement("a");
                if (this.perso.Id == r.Id_P1) {
                    a.href = "personnage.html?id=" + r.Id_P2.toString();
                }
                else {
                    a.href = "personnage.html?id=" + r.Id_P1.toString();
                }
                a.innerHTML += r.Cible;
                li.appendChild(a);
                this.relationul.appendChild(li);
            });
            this.relationdiv.appendChild(this.relationul);
        });
    }
}
//# sourceMappingURL=charview.js.map