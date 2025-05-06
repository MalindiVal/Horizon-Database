window.onload = function () {
    let dao = new FactionDAO();
    let ctrl = new FactionController(dao);
    let view = new FactionsView(ctrl);

}