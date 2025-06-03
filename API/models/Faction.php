<?php
class Faction{
    private int $id;
    private string $nom;
    private string $bio;
    public function getId(): int {
        return $this->id;
    }

    public function getNom(): string {
        return $this->nom;
    }

    public function getBio(): string {
        return $this->bio;
    }

   public function setId(int $id): void{
        $this->id = $id;
    }

    public function setNom(string $nom): void {
        $this->nom = $nom;
    }

   public function setBio(string $bio): void {
        $this->bio = $bio;
    }

    public function hydrate(array $data): void {
        if(isset($data["id"])){
            $this->setId($data["id"]);
        }

        if(isset($data["nom"])){
            $this->setNom($data["nom"]);
        }

        if(isset($data["bio"])){
            $this->setBio($data["bio"]);
        }
    }
}