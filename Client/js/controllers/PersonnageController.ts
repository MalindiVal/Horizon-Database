class PersonnageController extends Observable{

    private dao : PersonnageDAO;

    constructor(dao : PersonnageDAO){
        super();
        this.dao = dao;
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
        } catch {
            this.NotifyError("Erreur");
        }
    }
}