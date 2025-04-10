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
    constructor(person) {
        this.perso = person;
        this.dao = new PersonnageDAO();
        this.rdao = new RelationDAO();
        this.title = document.getElementById("character-name");
        this.race = document.getElementById("character-race");
        this.bio = document.getElementById("character-background");
        this.relationdiv = document.getElementById("character-relationships");
        this.editbutton = document.getElementById("editbutton");
        this.DisplayCharacter();
    }
    DisplayCharacter() {
        return __awaiter(this, void 0, void 0, function* () {
            this.title.innerHTML = this.perso.Nom;
            this.bio.innerHTML = this.perso.Bio;
            let arace = document.createElement("a");
            arace.href = "Race?id=" + this.perso.Race.Id;
            arace.innerHTML = this.perso.Race.Nom;
            this.race.appendChild(arace);
            let relations = yield this.rdao.GetByCharacters(this.perso.Id);
            this.relationdiv.innerHTML = "";
            let ul = document.createElement("ul");
            this.editbutton.href += "?id=" + this.perso.Id;
            for (let i = 0; i < relations.length; i++) {
                let li = document.createElement("li");
                li.innerHTML = relations[i].titre + " de ";
                let a = document.createElement("a");
                a.href = "personnage.html?id=" + relations[i].id;
                a.innerHTML += relations[i].cible;
                li.appendChild(a);
                ul.appendChild(li);
            }
            this.relationdiv.appendChild(ul);
        });
    }
}
//# sourceMappingURL=charview.js.map