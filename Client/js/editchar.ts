window.onload = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    let dao = new PersonnageDAO();
    let id = urlParams.get('id')
    let char = null;
    let title = document.getElementById("title");
    title.innerHTML = "Ajout";
    document.title = "Ajout d'un personnage - Project Horizon";
    if (id){
        char = await dao.GetById(id);
        title.innerHTML = "Edit";
        document.title = "Modification de " + char.Nom + " - Project Horizon";
    }
    let view = new EditCharView(char, dao);
};