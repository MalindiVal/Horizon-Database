<?php
require_once("Model.php");
require_once("Relation.php");
class RelationManager extends Model{
    public function getAll() {
        $sql = "SELECT r.id,
            r.titre,
            r.description,
            r.type as id_type,
            t.type,
            r.id_p2,
            r.id_p1 FROM relations r JOIN relationtypes t ON t.id = r.type";
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

    public function getById(int $id) {
        $sql = 'SELECT 
            r.id,
            r.titre,
            r.description,
            r.type as id_type,
            r.id_p2,
            r.id_p1 FROM relations r WHERE r.id = :id';
        $result = $this->execRequest($sql, ["id" => $id]);

        $typeList = [];
        foreach ($result as $row) {
            $typeList[] = $row;
        }

        return $typeList[0];
    }

    public function getByCharacters(int $id) {
        $sql = 'SELECT 
            r.titre,
            r.description,
            CASE
                WHEN r.id_p1 = :id THEN p2.nom
                ELSE p1.nom
            END as cible,
            r.type as id_type,
            t.type,
            r.id_p2,
            r.id_p1
        FROM relations r
        JOIN personnages p1 ON r.id_p1 = p1.id
        JOIN personnages p2 ON r.id_p2 = p2.id
        JOIN relationtypes t ON t.id = r.type
        WHERE r.id_p1 = :id OR r.id_p2 = :id
        ';
        $result = $this->execRequest($sql, ["id" => $id]);

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