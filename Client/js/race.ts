window.onload = async() => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    let dao = new RaceDAO();
    let race = await dao.GetById(id);
    document.title = race.Nom + "- Project Horizon";
    let view = new RaceView(race);

}