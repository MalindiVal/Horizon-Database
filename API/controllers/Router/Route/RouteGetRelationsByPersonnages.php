<?php
require_once("controllers/Router/Route.php");  // Assuming "Route.php" is the filename of the abstract Route class
require_once("controllers/RelationController.php");  // Assuming "MainController.php" is the filename of the MainController class

class RouteGetRelationsByPersonnages extends Route {
    private $controller;

    public function __construct(RelationController $controller) {
        parent::__construct();
        $this->controller = $controller;        
    }

    public function get($params = []) {
        $this->controller->getByPersonnage($params["id"]);
    }

    public function post($params = []) {
        
    }
}
?>
