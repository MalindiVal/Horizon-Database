<?php
require_once("controllers/Router/Route.php");  // Assuming "Route.php" is the filename of the abstract Route class
require_once("controllers/RelationController.php");  // Assuming "MainController.php" is the filename of the MainController class
require_once("./models/Relation.php");
class RouteAddRelation extends Route {
    private RelationController $controller;

    public function __construct(RelationController $controller) {
        parent::__construct();
        $this->controller = $controller;        
    }

    public function get($params = []) {


    }

    public function post($params = []) {
        $perso = new Relation();
        $perso->hydrate($params);
        $this->controller->Add($perso);
    }
}
?>
