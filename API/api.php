<?php
header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *"); // Corrigé ici
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE"); // Corrigé ici
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Vérifier si c'est une requête OPTIONS (pré-vérification)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once("controllers/Router/Router.php");

$data = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $input = file_get_contents("php://input");

    // Solution : forcer la chaîne en UTF-8
    $input = mb_convert_encoding($input, 'UTF-8', 'UTF-8');

    $data = json_decode($input, true);
    if(json_last_error() !== JSON_ERROR_NONE){
        echo json_encode(["error" => "JSON decode error : ", json_last_error_msg()]);
        exit;
    }

    if (empty($data)) {
        echo json_encode(["error" => "No input data"]);
        exit;
    }
}


$router = new Router();

if (!$data){
    // Route the request
    $router->routing($_GET,$_POST);
} else {
    // Route the request
    $router->routing($_GET,$data);
}


?>


