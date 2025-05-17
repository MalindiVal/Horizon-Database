<?php
class Race{
    private int $id;
    private string $nom;
    private string $culture;
    private string $apparence;
    private string $bio;

    private string $description;

    public function getId(): int {
        return $this->id;
    }


    public function getNom(): string {
        return $this->nom;
    }

    public function getApparence(): string{
        return $this->apparence;
    }

    public function getBio(): string {
        return $this->bio;
    }

    public function getCulture(): string {
        return $this->culture;
    }

    public function getDescription(): string {
        return $this->description;
    }

    public function setId(int $id): void{
        $this->id = $id;
    }

    public function setNom(string $nom): void {
        $this->nom = $nom;
    }

    public function setApparence(string $tag): void {
        $this->apparence = $tag;
    }

    public function setCulture(string $culture): void {
        $this->culture = $culture;
    }

    public function setDescription(string $desc): void {
        $this->description = $desc;
    }

    
    public function hydrate(array $data): void {
        if(isset($data["Id"])){
            $this->setId($data["Id"]);
        }

        if(isset($data["nom"])){
            $this->setNom($data["nom"]);
        }

        if(isset($data["apparence"])){
            $this->setApparence($data["apparence"]);
        }

        if(isset($data["gender"])){
            $this->setCulture($data["gender"]);
        }

        if(isset($data["description"])){
            $this->setDescription($data["description"]);
        }
        
    }
}