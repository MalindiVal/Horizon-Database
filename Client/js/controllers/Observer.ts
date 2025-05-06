interface Observer{
    Notify(msg : string) : void;

    AjoutPerso(p : Personnage) : void;

    AjoutFaction(f : Faction) : void;

    Error(msg : string) : void;
}