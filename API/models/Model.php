<?php

abstract class Model {
    private $db;

    // Fonction pour exécuter une requête
    protected function execRequest($sql, array $params = null) {
        $db = $this->getDB();
        
        try {
            $stmt = $db->prepare($sql);
            $stmt->execute($params);
            return $stmt;
        } catch (PDOException $e) {
            // Log or handle the error as needed
            throw new Exception("Error executing query: " . $e->getMessage());
        }
    }
    

    // Fonction pour obtenir l'instance de la base de données
    private function getDB() {
        // Vérification si la connexion existe déjà
        if ($this->db == null) {
            // Remplacez les paramètres de connexion par les vôtres
            $host = 'localhost';
            $dbname = 'project_horizon';
            $user = 'root';
            $password = '';

            // Connexion à la base de données
            try {
                $this->db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
                $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                // Gestion des erreurs de connexion
                die('Erreur de connexion à la base de données : ' . $e->getMessage());
            }
        }

        return $this->db;
    }
}

?>
