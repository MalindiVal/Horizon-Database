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

    public function getAllTypes(int $id){
        echo json_encode($this->manager->getAllTypes());
    }

    public function getByPersonnage(int $id){
        echo json_encode($this->manager->getByCharacters($id));
    }
}