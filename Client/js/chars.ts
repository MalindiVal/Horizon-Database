window.onload = function () {
    let dao = new PersonnageDAO();
    let ctrl = new PersonnageController(dao);
    let view = new CharsView(ctrl);

}