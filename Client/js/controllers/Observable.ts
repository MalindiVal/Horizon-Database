class Observable{
    private observers : Array<Observer>;

    constructor(){
        this.observers = new Array<Observer>();
    }
    public register(obs : Observer)  {
        this.observers.push(obs);
    }

    protected NotifyAjoutPerso(p : Personnage){
        this.observers.forEach(element => {
            element.AjoutPerso(p);
        });
    }

    protected NotifyPersoFound(p : Personnage){
        this.observers.forEach(element => {
            element.PersoFound(p);
        });
    }

    protected NotifyAjoutFaction(f : Faction){
        this.observers.forEach(element => {
            element.AjoutFaction(f);
        });
    }

    protected NotifyFactionFound(f : Faction){
        this.observers.forEach(element => {
            element.FactionFound(f);
        });
    }

    protected NotifyAjoutRace(r : Race){
        this.observers.forEach(element => {
            element.AjoutRace(r);
        });
    }

    protected NotifyRaceFound(r : Race){
        this.observers.forEach(element => {
            element.RaceFound(r);
        });
    }

    protected NotifyAjoutRelation(r : Relation){
        this.observers.forEach(element => {
            element.AjoutRelation(r);
        });
    }

    protected NotifyRelationFound(r : Relation){
        this.observers.forEach(element => {
            element.RelationFound(r);
        });
    }

    protected NotifyError(msg : string){
        this.observers.forEach(element => {
            element.Error(msg);
        });
    }
}