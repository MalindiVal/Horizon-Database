<?php
require_once("controllers/Router/Route.php");  // Assuming "Route.php" is the filename of the abstract Route class
require_once("controllers/PersonnageController.php");  // Assuming "MainController.php" is the filename of the MainController class

class RouteGetPersonnagesById extends Route {
    private $controller;

    public function __construct(PersonnageController $controller) {
        parent::__construct();
        $this->controller = $controller;        
    }

    public function get($params = []) {
        $this->controller->GetById($params["id"]);
    }

    public function post($params = []) {
        
    }
}
?>
