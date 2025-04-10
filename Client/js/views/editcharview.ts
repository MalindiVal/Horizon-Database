class EditCharView{
    
    private perso : Personnage;
    private dao : PersonnageDAO;
    private nameinput : HTMLInputElement;
    private genderinput : HTMLSelectElement;
    private raceinput : HTMLSelectElement;
    private taginput : HTMLInputElement;
    private bioinput : HTMLTextAreaElement;
    private validatebutton : HTMLButtonElement;

    constructor(char : Personnage, dao : PersonnageDAO){

        this.perso = char;
        this.dao = dao;
        this.nameinput = document.getElementById("name") as HTMLInputElement;
        this.genderinput = document.getElementById("gender") as HTMLSelectElement;
        this.raceinput = document.getElementById("race") as HTMLSelectElement;
        this.taginput = document.getElementById("tagline") as HTMLInputElement;
        this.bioinput = document.getElementById("bio") as HTMLTextAreaElement;
        this.validatebutton = document.getElementById("submit") as HTMLButtonElement
        this.validatebutton.addEventListener("click",() => this.Validate());
        this.initRaceList();
    }

    async initRaceList(){
        let dao = new RaceDAO();
        let races = await dao.GetAll();

        races.forEach(element => {
            let option = document.createElement("option");
            option.innerHTML = element.Nom;
            option.value = element.id;
            this.raceinput.appendChild(option);
        });
    }

    Validate(){
        this.perso.Nom = this.nameinput.textContent;
        this.perso.Tagline = this.taginput.textContent;
        this.perso.Race.Id = Number(this.raceinput.value);
        this.perso.Bio = this.bioinput.textContent;
    }
}