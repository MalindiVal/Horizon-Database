window.onload = async() => {
    
    
    let dao = new RaceDAO();
    let ctrl = new RaceController(dao);
    let view = new RaceView(ctrl);

}