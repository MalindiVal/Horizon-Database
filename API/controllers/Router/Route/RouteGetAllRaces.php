<?php
require_once("controllers/Router/Route.php");  // Assuming "Route.php" is the filename of the abstract Route class
require_once("controllers/RaceController.php");  // Assuming "MainController.php" is the filename of the MainController class

class RouteGetAllRaces extends Route {
    private $controller;

    public function __construct(RaceController $controller) {
        parent::__construct();
        $this->controller = $controller;        
    }

    public function get($params = []) {
        $this->controller->GetAll();
    }

    public function post($params = []) {
        
    }
}
?>
