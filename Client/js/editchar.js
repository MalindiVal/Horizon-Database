var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.onload = () => __awaiter(this, void 0, void 0, function* () {
    const urlParams = new URLSearchParams(window.location.search);
    let dao = new PersonnageDAO();
    let id = urlParams.get('id');
    let char = null;
    let title = document.getElementById("title");
    title.innerHTML = "Ajout";
    document.title = "Ajout d'un personnage - Project Horizon";
    if (id) {
        char = yield dao.GetById(id);
        title.innerHTML = "Edit";
        document.title = "Modification de " + char.Nom + " - Project Horizon";
    }
    let view = new EditCharView(char, dao);
});
//# sourceMappingURL=editchar.js.map