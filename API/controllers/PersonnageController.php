<?php
require_once("./models/PersonnageManager.php");
require_once("./models/Personnage.php");
class PersonnageController{

    private PersonnageManager $manager;
    public function __construct() {
        $this->manager = new PersonnageManager();
    }

    public function getAll(){
        echo json_encode($this->manager->getAll());
    }

    public function getById(int $id){
        echo json_encode($this->manager->getByID($id));
    }

    public function Add(Personnage $perso){
        try {
            $res = $this->manager->AddPersonnage($perso);
            echo json_encode($res > 0);
        } catch (Exception $e) {
            http_response_code(404);
            echo json_encode(["error" => $e->getMessage()]);
        }
    }

    public function Update(Personnage $perso){
        try {
            $this->manager->UpdatePersonnage($perso);
            http_response_code(200);
        } catch (Exception $e) {
            http_response_code(404);
            echo json_encode(["error" => $e->getMessage()]);
        }
    }
}