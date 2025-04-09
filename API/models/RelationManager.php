<?php
require_once("Model.php");
class RelationManager extends Model{
    public function getAll() {
        $sql = "SELECT * FROM relations";
        $result = $this->execRequest($sql, []);

        $typeList = [];
        foreach ($result as $row) {
            $typeList[] = $row;
        }

        return $typeList;
    }

    public function getByCharacters(int $id) {
        $sql = 'SELECT r.titre,r.description,p.nom as cible ,r.id_p2 FROM relations r JOIN personnages p ON r.id_p2 = p.id WHERE id_p1 = ?';  // Remplacez par le nom de votre table Pokemon
        $result = $this->execRequest($sql, [$id]);

        $typeList = [];
        foreach ($result as $row) {
            $typeList[] = $row;
        }

        return $typeList;
    }
}