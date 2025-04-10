window.onload = async() => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    let dao = new PersonnageDAO();
    let char = await dao.GetById(id);
    document.title = char.Nom + "- Project Horizon";
    let view = new CharView(char);

}