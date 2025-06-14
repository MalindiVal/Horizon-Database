window.onload = async () => {
    let dao = new FactionDAO();
    let ctrl = new FactionController(dao);
    let view = new EditFactionView(ctrl);
};