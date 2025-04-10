<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // Corrigé ici
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Corrigé ici
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Vérifier si c'est une requête OPTIONS (pré-vérification)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once("./../../models/RaceManager.php");
$db = new RaceManager();
if (isset($_GET["id"])){
    echo json_encode($db->getByID(intval($_GET["id"])));
}