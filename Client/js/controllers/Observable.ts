class Observable{
    private observers : Array<Observer>;

    constructor(){
        this.observers = new Array<Observer>();
    }
    public register(obs : Observer)  {
        this.observers.push(obs);
    }

    protected Notify(type : string){
        this.observers.forEach(element => {
            element.Notify(type);
        });
    }

    protected NotifyAjoutPerso(p : Personnage){
        this.observers.forEach(element => {
            element.AjoutPerso(p);
        });
    }

    protected NotifyAjoutFaction(f : Faction){
        this.observers.forEach(element => {
            element.AjoutFaction(f);
        });
    }

    protected NotifyAjoutRace(r : Race){
        this.observers.forEach(element => {
            element.AjoutRace(r);
        });
    }

    protected NotifyAjoutRelation(r : Relation){
        this.observers.forEach(element => {
            element.AjoutRelation(r);
        });
    }

    protected NotifyError(msg : string){
        this.observers.forEach(element => {
            element.Error(msg);
        });
    }
}