<?php
require_once("Model.php");
class RaceManager extends Model{
    public function getAll() {
        $sql = "SELECT * FROM races ORDER BY nom ASC";
        $result = $this->execRequest($sql, []);

        $typeList = [];
        foreach ($result as $row) {
            $typeList[] = $row;
        }

        return $typeList;
    }

    public function getByID(int $id) {
        $sql = 'SELECT * FROM races Where id = ?';  // Remplacez par le nom de votre table Pokemon
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