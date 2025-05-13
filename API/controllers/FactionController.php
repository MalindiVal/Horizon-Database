<?php
require_once("./models/FactionManager.php");
require_once("./models/Faction.php");
class FactionController{

    private FactionManager $manager;
    public function __construct() {
        $this->manager = new FactionManager();
    }

    public function getAll(){
        echo json_encode($this->manager->getAll());
    }

    public function getById(int $id){
        echo json_encode($this->manager->getByID($id));
    }

    public function Add(Faction $perso){
        try {
            $res = $this->manager->AddFaction($perso);
            echo json_encode($res > 0);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(["error" => $e->getMessage()]);
        }
    }

    public function Update(Faction $perso){
        try {
            $this->manager->UpdateFaction($perso);
            http_response_code(200);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(["error" => $e->getMessage()]);
        }
    }
}