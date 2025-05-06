interface Observer{
    Notify(msg : string) : void;

    AjoutPerso(p : Personnage) : void;


    Error(msg : string) : void;
}