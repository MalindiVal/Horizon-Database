window.onload = async() => {

    let dao = new PersonnageDAO();
    let ctrl = new PersonnageController(dao);
    let view = new CharView(ctrl);

}