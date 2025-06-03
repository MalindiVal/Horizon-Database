<?php
require_once("controllers/Router/Route.php");  // Assuming "Route.php" is the filename of the abstract Route class
require_once("controllers/FactionController.php");  // Assuming "MainController.php" is the filename of the MainController class
require_once("./models/Faction.php");
class RouteUpdateFaction extends Route {
    private FactionController $controller;

    public function __construct(FactionController $controller) {
        parent::__construct();
        $this->controller = $controller;        
    }

    public function get($params = []) {


    }

    public function post($params = []) {
        $perso = new Faction();
        $perso->hydrate($params);
        $this->controller->Update($perso);
    }
}
?>
