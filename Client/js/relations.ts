window.onload = function() {
    let dao = new RelationDAO();
    let ctrl = new RelationController(dao);
    let view = new RelationsView(ctrl);
}