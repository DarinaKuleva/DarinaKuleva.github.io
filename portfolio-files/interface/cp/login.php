<?php
    session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'">
    <link href="css/cp.css" rel="stylesheet">
	<title>CP - DEADZ</title>
</head>
<body>
	<main>
        <?php
        if (!isset($_SESSION['CREATED']))
        {
            echo '<section class="login_form">';
            echo '<form method="post" action="includes/login.server.php">';
            echo '<h1 class="title">CONTROL PANEL</h1>';
            echo '<input class="input-box" type="text" name="username" placeholder="Login" style="margin-top: -96px;">';
            echo '<input class="input-box" type="password" name="pass" placeholder="Password" style="margin-top: -32px;">';
            echo '<button class="button-signin" type="submit" name="sign-in">SIGN IN</button>';
            echo '</form>';
            echo '</section>';
            echo '<section class="dnk"></section>';

        }
        else
        {
            if (time() - $_SESSION['CREATED'] < 1800)
            {
                echo '<section class="login_form">';
                echo '<form method="post" action="includes/download.server.php">';
                echo '<h1 class="title">DOWNLOAD FILES</h1>';
                echo '<button type="submit" class="button-common" name="dl_common">STEP 1: COMMON FILES</button>';
                echo '<button type="submit" class="button-common main" name="dl_main">STEP 2: MAIN FILE</button>';
                echo '<button type="submit" class="button-common unlim" name="dl_unlim">STEP 3: UNLIMITED NICKNAMES</button>';
                echo '<button type="submit" class="button-common install" name="install_guide">HOW TO INSTALL</button>';
                echo '</form>';
                echo '</section>';
            }
            else
            {
                session_unset();     // unset $_SESSION variable for the run-time
                session_destroy();   // destroy session data in storage
            }
        }
        ?>
	</main>
</body>
</html>