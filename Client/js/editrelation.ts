window.onload = async () => {
    let dao = new RelationDAO();
    let relationctrl = new RelationController(dao)
    const urlParams = new URLSearchParams(window.location.search);
    let id = Number(urlParams.get('id'));
    if (id){
        let relation = await dao.GetById(id);
        let view = new EditRelationView(relationctrl,relation);
    } else {
        let view = new EditRelationView(relationctrl,new Relation());
    }
};