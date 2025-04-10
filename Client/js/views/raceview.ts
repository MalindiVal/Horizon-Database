class RaceView{

    private race : Race;
   private title : HTMLTitleElement;
    private bio : HTMLParagraphElement;


    constructor(race : Race){
       
        this.race = race;
        this.title = document.getElementById("race-name") as HTMLTitleElement;
        this.bio = document.getElementById("race-background") as HTMLParagraphElement;
            
        this.DisplayRace()
    }

    async DisplayRace() {
        this.title.innerHTML = this.race.Nom;
        this.bio.innerHTML = this.race.Bio;
        
        
    }

}