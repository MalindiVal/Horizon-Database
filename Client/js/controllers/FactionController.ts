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
                this.NotifyFactionFound(response[i]);
            }

        } catch (e){
            this.NotifyError(e.Message);
        }
    }

    async getById(id){
        try{
            let response = await this.dao.GetById(id);
            this.NotifyFactionFound(response);

        } catch (e){
            this.NotifyError(e.Message);
        }
    }
    

    async Add(f : Faction){ 
        try{
            let response = await this.dao.Add(f);
            this.NotifyAjoutFaction(f);

        } catch (e){
            this.NotifyError(e.Message);
        }
    }

    async Update(f : Faction){ 
        try{
            let response = await this.dao.Update(f);
            this.NotifyAjoutFaction(f);

        } catch (e){
            this.NotifyError(e.Message);
        }
    }
}