window.onload = async () => {
    let relationctrl = new RelationController(new RelationDAO());
    let persoctrl = new PersonnageController(new PersonnageDAO)
    let view = new EditRelationView(relationctrl,persoctrl);
};