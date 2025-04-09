<?php
require_once("Model.php");
require_once("Personnage.php");
class PersonnageManager extends Model{
    public function getAll() {
        $sql = "SELECT id,nom,tagline FROM personnages";
        $result = $this->execRequest($sql, []);

        $typeList = [];
        foreach ($result as $row) {
            $typeList[] = $row;
        }

        return $typeList;
    }

    public function getByID(int $id) {
        $sql = 'SELECT p.* , r.nom AS race FROM personnages p JOIN Races r  ON p.id_race = r.id WHERE p.id = ?';  // Remplacez par le nom de votre table Pokemon
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