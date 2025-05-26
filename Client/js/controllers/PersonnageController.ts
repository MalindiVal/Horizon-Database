class PersonnageController extends Observable{

    private dao : PersonnageDAO;

    constructor(dao : PersonnageDAO){
        super();
        this.dao = dao;
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
        let perso = new Personnage()
        try
        {
            let response = await this.dao.GetById(id);
            this.NotifyAjoutPerso(response);
            perso = response;

        } catch {
            this.NotifyError("Erreur");
        }
        return perso;
    }

    async Add(char : Personnage) {
        let res = false;
        try {
            res = await this.dao.Add(char);
            this.NotifyAjoutPerso(char);
        } catch (error) {
            this.NotifyError("Erreur");
        }
        return res;
    }

    async Update(char : Personnage) {
        let res = false;
        try {
            await this.dao.Update(char);
            this.NotifyAjoutPerso(char);
        } catch (error) {
            this.NotifyError("Erreur lors de la mise à jour");
        }
        return res;
    }
}