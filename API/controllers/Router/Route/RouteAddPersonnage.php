<?php
require_once("controllers/Router/Route.php");  // Assuming "Route.php" is the filename of the abstract Route class
require_once("controllers/PersonnageController.php");  // Assuming "MainController.php" is the filename of the MainController class
require_once("./models/Personnage.php");
class RouteAddPersonnage extends Route {
    private PersonnageController $controller;

    public function __construct(PersonnageController $controller) {
        parent::__construct();
        $this->controller = $controller;        
    }

    public function get($params = []) {


    }

    public function post($params = []) {
        $perso = new Personnage();
        $perso->hydrate($params);
        $this->controller->Add($perso);
    }
}
?>
