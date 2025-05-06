class Observable {
    constructor() {
        this.observers = new Array();
    }
    register(obs) {
        this.observers.push(obs);
    }
    Notify(type) {
        this.observers.forEach(element => {
            element.Notify(type);
        });
    }
    NotifyAjoutPerso(p) {
        this.observers.forEach(element => {
            element.AjoutPerso(p);
        });
    }
    NotifyAjoutFaction(f) {
        this.observers.forEach(element => {
            element.AjoutFaction(f);
        });
    }
    NotifyAjoutRace(r) {
        this.observers.forEach(element => {
            element.AjoutRace(r);
        });
    }
    NotifyError(msg) {
        this.observers.forEach(element => {
            element.Error(msg);
        });
    }
}
//# sourceMappingURL=Observable.js.map