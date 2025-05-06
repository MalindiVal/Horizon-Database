var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CharsView {
    constructor(ctrl) {
        this.list = new Array();
        this.ctrl = ctrl;
        this.ctrl.register(this);
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        this.div = document.getElementById("characterlist");
        this.ListAllChars();
    }
    AjoutRelation(r) {
    }
    AjoutRace(r) {
        throw new Error("Method not implemented.");
    }
    AjoutFaction(f) {
    }
    Notify(msg) {
    }
    AjoutPerso(p) {
        let vig = document.createElement("div");
        vig.classList.add("col-md-4");
        vig.classList.add("mb-4");
        let carte = document.createElement("div");
        carte.classList.add("card");
        let img = document.createElement("img");
        img.src = "public/img/" + p.Nom + ".png";
        carte.appendChild(img);
        let body = document.createElement("div");
        body.classList.add("card-body");
        let nom = document.createElement("h5");
        nom.classList.add("card-title");
        nom.innerHTML = p.Nom;
        body.appendChild(nom);
        let a = document.createElement("a");
        a.href = "personnage.html?id=" + p.Id;
        a.innerText = "Voir plus";
        a.classList.add("btn");
        a.classList.add("btn-primary");
        body.appendChild(a);
        carte.appendChild(body);
        vig.appendChild(carte);
        this.div.appendChild(vig);
    }
    Error(msg) {
        this.div.innerHTML = "<p>Aucun personnage trouvé.</p>";
    }
    ListAllChars() {
        return __awaiter(this, void 0, void 0, function* () {
            this.div.innerHTML = "";
            yield this.ctrl.ListAllChars();
        });
    }
}
//# sourceMappingURL=charsview.js.map