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
    constructor(ctrl, racectrl, relationctrl) {
        this.perso = null;
        this.ctrl = ctrl;
        this.ctrl.register(this);
        this.exist = false;
        this.racectrl = racectrl;
        this.racectrl.register(this);
        this.relationctrl = relationctrl;
        this.relationctrl.register(this);
        document.title = "Ajout d'un personnage - Project Horizon";
        this.title = document.getElementById("title");
        this.nameinput = document.getElementById("name");
        this.genderinput = document.getElementById("gender");
        this.raceinput = document.getElementById("race");
        this.taginput = document.getElementById("tag");
        this.descinput = document.getElementById("desc");
        this.bioinput = document.getElementById("bio");
        this.relationdiv = document.getElementById("relations");
        this.validatebutton = document.getElementById("submit");
        this.validatebutton.addEventListener("click", () => this.Validate());
        this.title.innerHTML = "Ajout";
        let addbutton = document.getElementById("plusaddrelation");
        addbutton.addEventListener("click", () => this.addRelationInput());
        this.init();
    }
    Notify(msg) {
        throw new Error("Method not implemented.");
    }
    AjoutPerso(p) {
        this.perso = p;
        this.exist = true;
        this.title.innerHTML = "Edit";
        document.title = "Modification de " + this.perso.Nom + " - Project Horizon";
        this.nameinput.value = this.perso.Nom;
        this.descinput.value = this.perso.Description;
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
        this.addRelationInput(r);
    }
    Error(msg) {
        if (!this.perso) {
            this.perso = new Personnage();
            this.exist = false;
        }
        else {
            alert(msg);
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            let races = yield this.racectrl.List();
            const urlParams = new URLSearchParams(window.location.search);
            let id = Number(urlParams.get('id'));
            this.perso = yield this.ctrl.GetById(id);
            let chardao = new PersonnageDAO();
            this.listcible = yield chardao.GetAll();
            let list = yield this.relationctrl.GetByPersonnage(this.perso.Id);
        });
    }
    addRelationInput(r = null) {
        let i = this.relationdiv.children.length;
        let setting = document.createElement("div");
        setting.classList.add("relation_settings");
        let h3 = document.createElement("h3");
        h3.innerHTML = "Relation " + i;
        setting.appendChild(h3);
        let div1 = document.createElement("div");
        let ciblelabel = document.createElement("label");
        ciblelabel.htmlFor = "persocible" + i;
        ciblelabel.innerHTML = "Personnage Cible";
        div1.appendChild(ciblelabel);
        let cible = document.createElement("select");
        cible.name = "persocible" + i;
        cible.id = "persocible" + i;
        let j = 0;
        this.listcible.forEach((element) => {
            let option = document.createElement("option");
            option.value = element.Id.toString();
            option.innerText = element.Nom;
            cible.appendChild(option);
            if (r && option.value == r.Id.toString()) {
                cible.selectedIndex = j;
            }
            j += 1;
        });
        div1.appendChild(cible);
        setting.appendChild(div1);
        let div2 = document.createElement("div");
        let typelabel = document.createElement("label");
        typelabel.htmlFor = "relation_type" + i;
        typelabel.innerHTML = "Type de Relation";
        let type = document.createElement("select");
        type.name = "relation_type" + i;
        ;
        type.id = "relation_type" + i;
        div2.appendChild(typelabel);
        div2.appendChild(type);
        setting.appendChild(div2);
        let div3 = document.createElement("div");
        let name_relationlabel = document.createElement("label");
        name_relationlabel.htmlFor = "name_relation" + i;
        name_relationlabel.innerHTML = "Nom :";
        let name_relation = document.createElement("input");
        name_relation.name = "name_relation" + i;
        ;
        name_relation.id = "name_relation" + i;
        div3.appendChild(name_relationlabel);
        if (r) {
            name_relation.value = r.Titre;
        }
        div3.appendChild(name_relation);
        setting.appendChild(div3);
        let div4 = document.createElement("div");
        let desc_relationlabel = document.createElement("label");
        desc_relationlabel.htmlFor = "desc_relation" + i;
        desc_relationlabel.innerHTML = "Description : ";
        let desc_relation = document.createElement("textarea");
        desc_relation.name = "desc_relation" + i;
        ;
        desc_relation.id = "desc_relation" + i;
        div4.appendChild(desc_relationlabel);
        if (r) {
            desc_relation.value = r.Description;
        }
        div4.appendChild(desc_relation);
        setting.appendChild(div4);
        let div5 = document.createElement("div");
        let delbut = document.createElement("button");
        delbut.innerHTML = "Supprimmer";
        div5.appendChild(delbut);
        setting.appendChild(div5);
        if (r) {
            name_relation.value = r.Titre;
            desc_relation.value = r.Description;
        }
        this.relationdiv.appendChild(setting);
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
        });
    }
}
//# sourceMappingURL=editcharview.js.map