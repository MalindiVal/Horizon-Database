<?php
require_once("Route/RouteGetAllPersonnages.php");
require_once("Route/RouteGetByIdPersonnage.php");
require_once("Route/RouteAddPersonnage.php");
require_once("Route/RouteUpdatePersonnage.php");
require_once("Route/RouteGetAllFactions.php");
require_once("Route/RouteGetFactionById.php");

require_once("controllers/PersonnageController.php");
require_once("controllers/FactionController.php");
require_once("controllers/RaceController.php");
require_once("controllers/RelationController.php");

class Router {
    private $routeList;
    private $ctrlList;
    private string $actionKey;

    private string $typeKey;

    public function __construct($name = "action", $type = "type") {
        $this->routeList = [];
        $this->ctrlList = [];
        $this->actionKey = $name;
        $this->typeKey = $type;
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
        $this->routeList["personnage"] =  [
            "get-all" => new RouteGetAllPersonnages($this->ctrlList["personnage"]),
            "get-by-id" => new RouteGetPersonnagesById($this->ctrlList["personnage"]),
            "add" => new RouteAddPersonnage($this->ctrlList["personnage"]),
            "update" => new RouteUpdatePersonnage($this->ctrlList["personnage"]),
        ];
    }

    public function routing($requestData,$post) {
        
        
        $typeKey = null;
        if ( !empty($requestData[$this->actionKey]) ){
            $typeKey = $requestData[$this->typeKey] ;
        }

        $actionKey = null;
        if ( !empty($requestData[$this->actionKey]) ){
            $actionKey = $requestData[$this->actionKey] ;
        }

        
        if(!empty($post)){
            $this->routeList[$typeKey][$actionKey]->action($post, 'POST');
        }
        else{
            if($actionKey != null){
                $this->routeList[$typeKey][$actionKey]->action($requestData, 'GET');
            } else {
                $this->routeList[$typeKey][""]->action($requestData, 'GET');
            }
        }
    }
    
    
}
?>
