<?php
require_once("Route/RouteIndex.php");
require_once("controllers/PersonnageController.php");
require_once("controllers/FactionController.php");
require_once("controllers/RaceController.php");
require_once("controllers/RelationController.php");

class Router {
    private $routeList;
    private $ctrlList;
    private $actionKey;

    public function __construct($name = "action") {
        $this->routeList = [];
        $this->ctrlList = [];
        $this->actionKey = $name;
        $this->createControllerList();
        $this->createRouteList();
    }

    private function createControllerList() {
        $this->ctrlList = [
            "personnage" => new PersonnageController(),
            "faction" => new FactionController(),
            "race" => new RaceController(),
            "relation" => new RelationController()
        ];
    }

    private function createRouteList() {
        $this->routeList =  [
            //"index" => new RouteIndex($this->ctrlList["main"]),
            
        ];
    }

    public function routing($requestData, $post) {
        
        $actionKey = !empty($requestData[$this->actionKey]) ? $requestData[$this->actionKey] : null;
        
        if(!empty($post)){
            $method = 'POST';
            $this->routeList[$actionKey]->action($post, $method);
        }
        else{
            $method = 'GET';
            if($actionKey == null)
                $this->routeList["index"]->action($requestData, 'GET');
            else{
                $this->routeList[$actionKey]->action($requestData, $method);
            }
        }
    }
    
    
}
?>
