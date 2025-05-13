<?php
require_once("./models/FactionManager.php");
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
}