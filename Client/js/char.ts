window.onload = async() => {

    let dao = new PersonnageDAO();
    let racectrl = new RaceController(new RaceDAO());
    let relationctrl = new RelationController(new RelationDAO())
    let ctrl = new PersonnageController(dao);
    let view = new CharView(ctrl,racectrl,relationctrl);

}