<?php
class Relation{

    private int $id;
    private int $id_p1;
    private int $id_p2;

    private int $id_type;

    private string $titre;

    private string $description;

    public function getId() : int{
        return $this->id;
    }

    public function setId(int $id): void{
        $this->id = $id;
    }

    public function getId_P1() : int{
        return $this->id_p1;
    }

    public function setId_P1(int $id_p1): void{
        $this->id_p1 = $id_p1;
    }

    public function getId_P2() : int{
        return $this->id_p2;
    }

    public function setId_P2(int $id_p2): void{
        $this->id_p2 = $id_p2;
    }

    public function getId_Type() : int{
        return $this->id_type;
    }

    public function setId_Type(int $id_type): void{
        $this->id_type = $id_type;
    }

    public function getTitre() : string{
        return $this->titre;
    }

    public function setTitre(string $titre): void{
        $this->titre = $titre;
    }

    public function getDescription() : string{
        return $this->description;
    }

    public function setDescription(string $description): void{
        $this->description = $description;
    }

    public function hydrate(array $data){
        if(isset($data["id"])){
            $this->setId($data["id"]);
        }

        if(isset($data["titre"])){
            $this->setTitre($data["titre"]);
        }

        if(isset($data["id_p1"])){
            $this->setId_P1($data["id_p1"]);
        }

        if(isset($data["id_p2"])){
            $this->setId_P2($data["id_p2"]);
        }

        if(isset($data["id_type"])){
            $this->setId_Type($data["id_type"]);
        }

        if(isset($data["description"])){
            $this->setDescription($data["description"]);
        }
    }
}