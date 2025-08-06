window.onload = async() => {

    let racectrl = new RaceController(new RaceDAO());
    let relationctrl = new RelationController(new RelationDAO())
    let factionctrl = new FactionController(new FactionDAO())
    let ctrl = new PersonnageController(new PersonnageDAO());
    let view = new CharView(ctrl,racectrl,relationctrl,factionctrl);

}