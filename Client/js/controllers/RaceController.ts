class RaceController extends Observable{

    private dao : RaceDAO;

    constructor(dao : RaceDAO){
        super();
        this.dao = dao;
    }

    async List() {
        let list = new Array<Race>();
        try
        {
            let response = await this.dao.GetAll();
            response.forEach( element => {
                this.NotifyAjoutRace(element);
                list.push(element);
            });
        } catch {
            this.NotifyError("Erreur");
        }
        return list;
    }

    async GetById (id : number) {
        let race = new Race();
        try
        {
            let response = await this.dao.GetById(id);
            this.NotifyAjoutRace(response);
            race = response
        } catch {
            this.NotifyError("Erreur");
        }
        return race
    }
}