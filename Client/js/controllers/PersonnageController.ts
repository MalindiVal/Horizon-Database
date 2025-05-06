class PersonnageController extends Observable{

    private dao : PersonnageDAO;
    private racectrl : RaceController;
    private relationctrl : RelationController;

    constructor(dao : PersonnageDAO, racectrl : RaceController , relationctrl : RelationController){
        super();
        this.dao = dao;
        this.racectrl = racectrl;
        this.relationctrl = relationctrl;
    }

    async ListAllChars () {
        let list = Array<Personnage>();
        try
        {
            let response = await this.dao.GetAll();
            response.forEach( element => {
                this.NotifyAjoutPerso(element);
                list.push(element);
            });
        } catch {
            this.NotifyError("Erreur");
        }
        return list;
    }

    async GetById (id : number) {
        try
        {
            let response = await this.dao.GetById(id);
            this.NotifyAjoutPerso(response);
            let race = await this.racectrl.GetById(response.IdRace);
            this.NotifyAjoutRace(race);
            let relations = await this.relationctrl.GetByPersonnage(id);
            relations.forEach(element => {
                this.NotifyAjoutRelation(element);
            });

        } catch {
            this.NotifyError("Erreur");
        }
    }
}