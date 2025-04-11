<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}


require_once("./../../models/PersonnageManager.php");
$db = new PersonnageManager();


require_once("./../../models/Personnage.php");
$perso = new Personnage();
$perso->hydrate($_POST);
echo json_encode($db->AddPersonnage($perso) > 0);