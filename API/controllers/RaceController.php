<?php
require_once("./models/RaceManager.php");
class RaceController{

    private RaceManager $manager;
    public function __construct() {
        $this->manager = new RaceManager();
    }

    public function getAll(){
        echo json_encode($this->manager->getAll());
    }

    public function getById(int $id){
        try{
            echo json_encode($this->manager->getByID($id));
        } catch (Exception $ex){
            http_response_code(404);
            echo json_encode(["error" => $ex->getMessage()]);
        }
        
    }

    public function getAllPeuplesByRace(int $baseid) {
        try{
            echo json_encode($this->manager->getAllPeuplesByRace($baseid));
        } catch (Exception $ex){
            http_response_code(204);
            echo json_encode([]);
        }
        
    }


    public function getMainRace(int $id) {
        try{
            echo json_encode($this->manager->getMainRace($id));
        } catch (Exception $ex){
            http_response_code(204);
            echo json_encode([]);
        }
        
    }
}