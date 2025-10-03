<?php
    $API_URL = getenv('API_URL');

    if(!$API_URL){
        $envFile = __DIR__ . '/../../.env';
        if(file_exists($envFile)){
            $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            $env = [];
            foreach($lines as $line){
                if(strpos(trim($line), '#') === 0) continue;
                [$key, $value] = explode('=', $line, 2);
                $env[trim($key)] = trim($value);
            }
            $API_URL = $env['API_URL'] ?? null;
        }
        
    }

    if(!$API_URL) die("API_URL não definida.");
?>