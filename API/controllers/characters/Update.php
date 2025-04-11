<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

require_once("./../../models/PersonnageManager.php");
require_once("./../../models/Personnage.php");

$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

if (empty($data)) {
    echo json_encode(["error" => "No input data"]);
    exit;
}

var_dump($data);

$perso = new Personnage();
$perso->hydrate($data);

$db = new PersonnageManager();

try {
    $res = $db->UpdatePersonnage($perso);
    echo json_encode($res > 0);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
