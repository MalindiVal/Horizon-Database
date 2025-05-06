class PersonnageController extends Observable{

    private dao : PersonnageDAO;
    private racectrl : RaceController;

    constructor(dao : PersonnageDAO){
        super();
        this.dao = dao;
        this.racectrl = new RaceController(new RaceDAO());
    }

    async ListAllChars () {
        try
        {
            let response = await this.dao.GetAll();
            response.forEach( element => {
                this.NotifyAjoutPerso(element);
            });
        } catch {
            this.NotifyError("Erreur");
        }
    }

    async GetById (id : number) {
        try
        {
            let response = await this.dao.GetById(id);
            this.NotifyAjoutPerso(response);
            let race = await this.racectrl.GetById(response.IdRace);
            this.NotifyAjoutRace(race);

        } catch {
            this.NotifyError("Erreur");
        }
    }
}