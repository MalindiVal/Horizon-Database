<?php
require_once("Model.php");
require_once("Faction.php");
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
            //$type = new Faction();
            //$type->hydrate($row);
        return $row;
    }

    public function getByPersonnage(int $id) {
        $sql = 'SELECT f.id as id_faction , f.nom as nom_faction ,a.role FROM factions f Join Affilier a On a.id_faction = f.id Where a.id_personnage = ?';  // Remplacez par le nom de votre table Pokemon
        $result = $this->execRequest($sql, [$id]);

        $typeList = [];
        foreach ($result as $row) {
            $typeList[] = $row;
        }

        return $typeList;
    }

    public function getMembers(int $id) {
        $sql = 'SELECT p.id as id_personnage, p.Nom as nom_personnage , a.role FROM personnages p  Join Affilier a On a.id_personnage = p.id Where a.id_faction = ?'; 
        $result = $this->execRequest($sql, [$id]);

        $typeList = [];
        foreach ($result as $row) {
            $typeList[] = $row;
        }

        return $typeList;
    }

    public function AddFaction(Faction $faction) : int {
        $sql = "INSERT INTO factions (nom,histoire)  Values (?,?)";
        try{
            $result = $this->execRequest($sql, [
                $faction->getNom(),
                $faction->getBio(),
            ]);

            return 1;
        } catch (Exception $ex){
            throw $ex;
        }
    }

    public function UpdateFaction(Faction $faction) : void {
        $sql = "Update factions SET nom=? ,bio=? Where id=?";
        try{
            $result = $this->execRequest($sql, [
                $faction->getNom(),
                $faction->getBio(),
                $faction->getId()
            ]);

        } catch (Exception $ex){
            throw $ex;
        }
    }
}