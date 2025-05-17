<?php
require_once("controllers/Router/Route.php");  // Assuming "Route.php" is the filename of the abstract Route class
require_once("controllers/RaceController.php");  // Assuming "MainController.php" is the filename of the MainController class
require_once("./models/Race.php");
class RouteAddRace extends Route {
    private RaceController $controller;

    public function __construct(RaceController $controller) {
        parent::__construct();
        $this->controller = $controller;        
    }

    public function get($params = []) {


    }

    public function post($params = []) {
        $race = new Race();
        $race->hydrate($params);
        $this->controller->Add($race);
    }
}
?>
