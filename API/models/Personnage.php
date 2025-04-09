<?php
class Personnage{
    private $id;
    private $nom;
    private $tagline;
    private $bio;

    public function getId() {
        return $this->id;
    }

    public function getNom() {
        return $this->nom;
    }

    public function getTagline(){
        return $this->tagline;
    }

    public function getBio() {
        return $this->bio;
    }

    public function setId(int $id){
        $this->id = $id;
    }

    public function setNom(string $nom) {
        $this->nom = $nom;
    }

    public function setTagline(string $tag) {
        $this->tagline = $tag;
    }

    public function setBio(string $bio) {
        $this->bio = $bio;
    }
    
    public function hydrate(array $data) {
        if(isset($data["id"])){
            $this->setId($data["id"]);
        }

        if(isset($data["nom"])){
            $this->setNom($data["nom"]);
        }

        if(isset($data["tagline"])){
            $this->setTagline($data["tagline"]);
        }

        if(isset($data["bio"])){
            $this->setBio($data["bio"]);
        }
        
    }
}