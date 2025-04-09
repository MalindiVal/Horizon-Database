<?php
require_once("Model.php");
require_once("Personnage.php");
class FactionManager extends Model{
    public function getAll() {
        $sql = "SELECT * FROM factions";
        $result = $this->execRequest($sql, []);

        $typeList = [];
        foreach ($result as $row) {
            $typeList[] = $row;
        }

        return $typeList;
    }

    public function getByID(int $id) {
        $sql = 'SELECT * FROM factions Where id = ?';  // Remplacez par le nom de votre table Pokemon
        $result = $this->execRequest($sql, [$id]);

        $row = $result->fetch();
        if (!$row) {
            return null;
        }
            //$type = new Personnage();
            //$type->hydrate($row);
        return $row;
    }
}