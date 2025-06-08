<?php
require_once("controllers/Router/Route.php");  // Assuming "Route.php" is the filename of the abstract Route class
require_once("controllers/FactionController.php");  // Assuming "MainController.php" is the filename of the MainController class

class RouteGetFactionsByPersonnage extends Route {
    private $controller;

    public function __construct(FactionController $controller) {
        parent::__construct();
        $this->controller = $controller;        
    }

    public function get($params = []) {
        $this->controller->GetByPersonnage($params["id"]);
    }

    public function post($params = []) {
        
    }
}
?>
