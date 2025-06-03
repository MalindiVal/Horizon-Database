<?php
require_once("Route/RouteGetAllPersonnages.php");
require_once("Route/RouteGetByIdPersonnage.php");
require_once("Route/RouteAddPersonnage.php");
require_once("Route/RouteUpdatePersonnage.php");

require_once("Route/RouteGetAllFactions.php");
require_once("Route/RouteGetFactionById.php");
require_once("Route/RouteAddFaction.php");
require_once("Route/RouteUpdateFaction.php");

require_once("Route/RouteGetAllRaces.php");
require_once("Route/RouteGetRaceById.php");
require_once("Route/RouteGetAllPeuplesByRace.php");
require_once("Route/RouteGetMainRace.php");
require_once("Route/RouteAddRace.php");
require_once("Route/RouteUpdateRace.php");

require_once("Route/RouteGetAllRelations.php");
require_once("Route/RouteGetTypesRelations.php");
require_once("Route/RouteGetRelationsByPersonnages.php");
require_once("Route/RouteGetRelationById.php");
require_once("Route/RouteAddRelation.php");
require_once("Route/RouteUpdateRelation.php");

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

        $this->routeList["faction"] =  [
            "get-all" => new RouteGetAllFactions($this->ctrlList["faction"]),
            "get-by-id" => new RouteGetFactionById($this->ctrlList["faction"]),
            "add" => new RouteAddFaction($this->ctrlList["faction"]),
            "update" => new RouteUpdateFaction($this->ctrlList["faction"]),
        ];

        $this->routeList["race"] =  [
            "get-all" => new RouteGetAllRaces($this->ctrlList["race"]),
            "get-by-id" => new RouteGetRaceById($this->ctrlList["race"]),
            "add" => new RouteAddRace($this->ctrlList["race"]),
            "update" => new RouteUpdateRace($this->ctrlList["race"]),
            "get-peuples" => new  RouteGetAllPeuplesByRace($this->ctrlList["race"]),
            "get-main-races" => new  RouteGetMainRace($this->ctrlList["race"])
        ];

        $this->routeList["relation"] =  [
            "get-all" => new RouteGetAllRelations($this->ctrlList["relation"]),
            "get-by-id-personnage" => new RouteGetRelationsByPersonnages($this->ctrlList["relation"]),
            "get-by-id" => new RouteGetRelationById($this->ctrlList["relation"]),
            "add" => new RouteAddRelation($this->ctrlList["relation"]),
            "update" => new RouteUpdateRelation($this->ctrlList["relation"]),
            "get-all-types" => new RouteGetTypesRelations($this->ctrlList["relation"]),
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
