<?php
require_once("controllers/Router/Route.php");  // Assuming "Route.php" is the filename of the abstract Route class
require_once("controllers/PersonnageController.php");  // Assuming "MainController.php" is the filename of the MainController class

class RouteAddPersonnage extends Route {
    private PersonnageController $controller;

    public function __construct(PersonnageController $controller) {
        parent::__construct();
        $this->controller = $controller;        
    }

    public function get($params = []) {


    }

    public function post($params = []) {
        //var_dump($params);
        try {
            $perso = new Personnage();
            $perso->hydrate($params);
            $this->controller->Add($perso);
        } catch (Exception $e) {

        }
    }
}
?>
