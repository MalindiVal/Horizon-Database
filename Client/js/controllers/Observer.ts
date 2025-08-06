interface Observer{
    
    AjoutPerso(p : Personnage) : void;

    PersoFound(p : Personnage) : void;

    AjoutFaction(f : Faction) : void;

    FactionFound(f : Faction) : void;

    AjoutRace(r : Race) : void;

    RaceFound(r : Race) : void;

    AjoutRelation(r : Relation) : void;
    
    RelationFound(r : Relation) : void;

    Error(msg : string) : void;
}