<?php
require_once("Model.php");
require_once("Relation.php");
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

    public function getAllTypes() {
        $sql = "SELECT * FROM relationtypes";
        $result = $this->execRequest($sql, []);

        $typeList = [];
        foreach ($result as $row) {
            $typeList[] = $row;
        }

        return $typeList;
    }

    public function getByCharacters(int $id) {
        $sql = 'SELECT r.titre,r.description,p.nom as cible , r.type,r.id_p2 FROM relations r JOIN personnages p ON r.id_p2 = p.id WHERE id_p1 = ?';  // Remplacez par le nom de votre table Pokemon
        $result = $this->execRequest($sql, [$id]);

        $typeList = [];
        foreach ($result as $row) {
            $typeList[] = $row;
        }

        return $typeList;
    }

    public function AddRelation(Relation $relation) {
        try{
            $sql = "INSERT INTO relations (id_p1,id_p2,type,titre,description) Values (?,?,?,?,?)";
            $result = $this->execRequest($sql, params: [
                $relation->getId_P1(),
                $relation->getId_P2(),
                $relation->getId_Type(),
                $relation->getTitre(),
                $relation->getDescription()
            ]);

            return true;
        } catch (Exception $ex){
            return false;
        }
        
    }

    public function UpdateRelation(Relation $relation) {
        try{
            $sql = "Update relations SET id_p1=? ,id_p2=? ,type=? ,titre=? ,description=? Where id= ?";
            $result = $this->execRequest($sql, params: [
                $relation->getId_P1(),
                $relation->getId_P2(),
                $relation->getId_Type(),
                $relation->getTitre(),
                $relation->getDescription(),
                $relation->getId()
            ]);

            return true;
        } catch (Exception $ex){
            return false;
        }
        
    }
}