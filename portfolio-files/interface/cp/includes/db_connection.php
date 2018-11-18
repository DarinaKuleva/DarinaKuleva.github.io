<?php

$servername = "78.24.216.253";
$dbname = "client_bd";
$db_login = "deadz";
$db_pass = "4f678ed3c212";

$conn = mysqli_connect($servername, $db_login, $db_pass, $dbname);

if (!$conn)
    die("Connection failed: " .mysqli_connect_error());
