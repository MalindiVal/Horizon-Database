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
        $sql = 'SELECT id, nom , gender , id_race, bio, tagline, description FROM personnages WHERE id = ?'; 
        $result = $this->execRequest($sql, [$id]);

        $row = $result->fetch();
        if (!$row) {
            return null;
        }
            //$personnage = new Personnage();
            //$personnage->hydrate($row);
        return $row;
    }

    public function AddPersonnage(Personnage $personnage) : int {
        $sql = "INSERT INTO personnages (nom,gender,id_race,tagline,bio,description)  Values (?,?,?,?,?,?)";
        try{
            $result = $this->execRequest($sql, [
                $personnage->getNom(),
                $personnage->getGenre(),
                $personnage->getIdRace(),
                $personnage->getTagline(),
                $personnage->getBio(),
                $personnage->getDescription()
            ]);

            return 1;
        } catch (Exception $ex){
            return 0;
        }
    }

    public function UpdatePersonnage(Personnage $personnage) : void {
        $sql = "Update personnages SET nom=? ,gender=?,id_race=?,tagline=?,bio=?,description=? Where id=?";
        try{
            $result = $this->execRequest($sql, [
                $personnage->getNom(),
                $personnage->getGenre(),
                $personnage->getIdRace(),
                $personnage->getTagline(),
                $personnage->getBio(),
                $personnage->getDescription(),
                $personnage->getId()
            ]);

        } catch (Exception $ex){
            throw $ex;
        }
    }
}