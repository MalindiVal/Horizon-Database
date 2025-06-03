<?php
require_once("./models/RelationManager.php");
class RelationController{

    private RelationManager $manager;
    public function __construct() {
        $this->manager = new RelationManager();
    }

    public function getAll(){
        echo json_encode($this->manager->getAll());
    }

    public function getAllTypes(){
        echo json_encode($this->manager->getAllTypes());
    }

    public function getByPersonnage(int $id){
        echo json_encode($this->manager->getByCharacters($id));
    }

    public function getById(int $id){
        echo json_encode($this->manager->getById($id));
    }

    public function Add(Relation $r){
        try {
            $res = $this->manager->AddRelation($r);
            echo json_encode($res > 0);
        } catch (Exception $e) {
            http_response_code(404);
            echo json_encode(["error" => $e->getMessage()]);
        } 
    }

    public function Update(Relation $r){
        try {
            $res = $this->manager->UpdateRelation($r);
            echo json_encode($res > 0);
        } catch (Exception $e) {
            http_response_code(404);
            echo json_encode(["error" => $e->getMessage()]);
        } 
    }
}