class EditCharView{
    constructor(){
        this.dao = new PersonnageDAO();
        //this.id = urlParams.get('id');

        this.nameinput = document.getElementById("name")
        this.genderinput = document.getElementById("gender");
        this.raceinput = document.getElementById("race");
        this.taginput = document.getElementById("tagline");
        this.bioinput = document.getElementById("bio");
        this.initRace();
    }

    async initRace(){
        let dao = new RaceDAO();
        let races = await dao.GetAll();

        races.forEach(element => {
            let option = document.createElement("option");
            option.innerHTML = element.Nom;
            option.value = element.id;
            this.raceinput.appendChild(option);
        });
    }
}