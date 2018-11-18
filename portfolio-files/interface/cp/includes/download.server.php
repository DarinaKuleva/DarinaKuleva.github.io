<?php

if (isset($_POST['dl_common']))
{
    require_once 'dl_file.php';

    $fileName = '../files/MainPatch.zip';

    DlFile($fileName);
}
else
{
    header("Location: ../login.php?error=hz");
    exit();
}