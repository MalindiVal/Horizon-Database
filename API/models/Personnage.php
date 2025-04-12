<?php
class Personnage{
    private int $id;
    private string $nom;
    private string $genre;
    private string $tagline;
    private string $bio;
    private int $idrace;

    private string $description;

    public function getId(): int {
        return $this->id;
    }

    public function getIdRace(): int {
        return $this->idrace;
    }

    public function getNom(): string {
        return $this->nom;
    }

    public function getTagline(): string{
        return $this->tagline;
    }

    public function getBio(): string {
        return $this->bio;
    }

    public function getGenre(): string {
        return $this->genre;
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

    public function setTagline(string $tag): void {
        $this->tagline = $tag;
    }

    public function setBio(string $bio): void {
        $this->bio = $bio;
    }

    public function setGenre(string $genre): void {
        $this->genre = $genre;
    }

    public function setDescription(string $desc): void {
        $this->description = $desc;
    }

    public function setIdRace(int $idrace): void {
        $this->idrace = $idrace;
    }
    
    public function hydrate(array $data): void {
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

        if(isset($data["id_race"])){
            $this->setIdRace(intval($data["id_race"]));
        }

        if(isset($data["gender"])){
            $this->setGenre($data["gender"]);
        }

        if(isset($data["description"])){
            $this->setDescription($data["description"]);
        }
        
    }
}