class FactionController extends Observable{
    private dao : FactionDAO

    constructor(dao : FactionDAO){
        super();
        this.dao = dao;
    }

    async list(){
        try{
            let response = await this.dao.GetAll();
            for (let i = 0; i < response.length; i++) {
                this.NotifyAjoutFaction(response[i]);
            }

        } catch (e){
            this.NotifyError(e.Message);
        }
    }

    async getById(id){
        try{
            let response = await this.dao.GetById(id);
            this.NotifyAjoutFaction(response);

        } catch (e){
            this.NotifyError(e.Message);
        }
    }
}