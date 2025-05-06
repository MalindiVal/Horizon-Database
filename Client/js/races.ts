window.onload = function () {
    let dao = new RaceDAO();
    let ctrl = new RaceController(dao);
    let view = new RacesView(ctrl);

}