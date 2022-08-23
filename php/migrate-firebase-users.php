<?php

require('vendor/autoload.php');

use Appwrite\Client;
use Appwrite\Services\Users;

// Appwrite configuration
$endpoint = 'http://localhost/v1';
$appwriteProjectId = '';
$appwriteApiKey = '';

// Firebase configuration
$firebaseProjectId = '';
$base64Signer = '';
$base64SaltSeparator = '';

$client = (new Client())
    ->setEndpoint($endpoint)
    ->setProject($appwriteProjectId)
    ->setKey($appwriteApiKey)
    ->setSelfSigned();

$users = new Users($client);

$outfile = 'users.json';
$output = exec("firebase auth:export $outfile --project $firebaseProjectId --format json");
$json = \file_get_contents($outfile);
$exported = \json_decode($json, true)['users'];

foreach ($exported as $user) {
    $users->createScryptModifiedUser(
        'unique()',
        $user['email'],
        $user['passwordHash'],
        $user['salt'],
        $base64SaltSeparator,
        $base64Signer
    );
}

echo 'Done!';