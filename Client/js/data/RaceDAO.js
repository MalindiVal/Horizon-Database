class RaceDAO extends DAO{
    constructor(){
        super();
        this.api += "races/";
    }

    async GetAll() {
        try {
            let liste = [];
            let apiurl = this.api + "getAll.php";
            let response = await fetch(apiurl);
    
            if (response.status === 200) {
                // Extraction des données JSON
                let data = await response.json();
                data.forEach((row) => {
                    // Hydratation
                    let race = new Race();
                    race.Id = row.Id;
                    race.Nom = row.nom;
                    liste.push(race);  // Correction ici
                });
                return liste;
            } else {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
        } catch (error) {
            throw new Error(`An error occurred while fetching races: ${error.message}`);
        }
    }
}