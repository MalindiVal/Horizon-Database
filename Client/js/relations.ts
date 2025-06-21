window.onload = function() {
    let ctrl = new RelationController(new RelationDAO());
    let persoctrl = new PersonnageController(new PersonnageDAO());
    let view = new RelationsView(ctrl,persoctrl);
}