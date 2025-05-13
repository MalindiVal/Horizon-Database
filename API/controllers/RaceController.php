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
        echo json_encode($this->manager->getByID($id));
    }
}