interface Observer{
    Notify(msg : string) : void;

    AjoutPerso(p : Personnage) : void;

    AjoutFaction(f : Faction) : void;

    AjoutRace(r : Race) : void;

    AjoutRelation(r : Relation) : void;

    Error(msg : string) : void;
}