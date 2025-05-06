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
}