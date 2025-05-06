<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

require_once("./../../models/PersonnageManager.php");
require_once("./../../models/Personnage.php");

$rawData = file_get_contents("php://input");
var_dump($rawData);
$rawData = mb_convert_encoding($rawData, 'UTF-8', 'UTF-8');

$data = json_decode($rawData, true);

if ($data === null) {
    echo json_encode(["error" => "Invalid or empty JSON data"]);
    exit;
}

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
