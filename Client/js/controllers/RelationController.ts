class RelationController extends Observable{
    private dao : RelationDAO;
    private persoctrl : PersonnageController;

    constructor(dao : RelationDAO){
        super();
        this.dao = dao;
    }

    async listRelations(){
        let list = Array<Relation>();
        try{
            let response = await this.dao.GetAll();
            response.forEach(element => {
                this.NotifyAjoutRelation(element);
                list.push(element);
            });

        } catch (e){
            this.NotifyError(e.Message);
        }
        return list;
    }

    async GetByPersonnage(id : number){
        let list = Array<Relation>();
        try{
            let response = await this.dao.GetByCharacters(id);
            response.forEach(element => {
                this.NotifyAjoutRelation(element);
                list.push(element);
            });
        } catch (e){
            this.NotifyError(e.Message);
        }
        return list;
    }

    async Add(rel : Relation) {
        let res = false;
        try {
            res = await this.dao.Add(rel);
            this.NotifyAjoutRelation(rel);
        } catch (error) {
            this.NotifyError("Erreur");
        }
        return res;
    }

    async Update(rel : Relation) {
        let res = false;
        try {
            await this.dao.Update(rel);
           this.NotifyAjoutRelation(rel);
        } catch (error) {
            this.NotifyError("Erreur lors de la mise à jour");
        }
        return res;
    }
}