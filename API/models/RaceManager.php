<?php
require_once("Model.php");
require_once("Race.php");
class RaceManager extends Model{
    public function getAll() {
        $sql = "SELECT * FROM races ORDER BY nom ASC";
        $result = $this->execRequest($sql, []);

        $typeList = [];
        foreach ($result as $row) {
            $race = new Race();
            $race->hydrate($row);
            $typeList[] = $row;
        }

        return $typeList;
    }

    public function getByID(int $id) {
        try{
            $sql = 'SELECT * FROM races Where id = ?';  // Remplacez par le nom de votre table Pokemon
            $result = $this->execRequest($sql, [$id]);
            $res = [];
            foreach ($result as $row) {
                $race = new Race();
                $race->hydrate($row);
                $res[] = $row;
                return $res[0];
            }
            
            return null;
        } catch (Exception $ex) {
            throw $ex;
        }
        
    }

    public function getAllPeuplesByRace(int $baseid) {
        try {
            $sql = 'SELECT r.* FROM races r JOIN peuples p ON p.id_race = r.id Where p.id_base = ?';  // Remplacez par le nom de votre table Pokemon
            $result = $this->execRequest($sql, [$baseid]);
            $row = [];
            foreach($result as $res){
                $race = new Race();
                $race->hydrate($res);
                $row[] = $res;
            }

            return $row;
        } catch (Exception $ex){
            throw $ex;
        }
    }


    public function getMainRace(int $id) {

        try{
            $sql = 'SELECT r.* FROM peuples p JOIN races r ON r.id = p.id_base Where p.id_race = ?';  // Remplacez par le nom de votre table Pokemon
            $result = $this->execRequest($sql, [$id]);
                $res = [];
                foreach ($result as $row) {
                    $race = new Race();
                    $race->hydrate($row);
                    $res[] = $row;
                }
            if($res){
                return $res[0];
            } 
            return $this->getByID($id);
        } catch (Exception $ex){
            throw $ex;
        }
        
    }

    public function UpdateRace(Race $race) : void {
        $sql = "Update races SET nom=? ,description=?,apparence=?,culture=? Where Id=?";
        try{
            $result = $this->execRequest($sql, [
                $race->getNom(),
                $race->getDescription(),
                $race->getApparence(),
                $race->getCulture(),
                $race->getId()
            ]);

        } catch (Exception $ex){
            throw $ex;
        }
    }

    
}