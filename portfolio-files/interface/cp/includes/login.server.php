<?php
if (isset($_POST['sign-in']))
{
    require_once 'db_connection.php';

    $username = $_POST['username'];
    $pw = $_POST['pass'];

    if (empty($username) || empty($pw))
    {
        header("Location: ../login.php?errror=emptyfields&username=".$username);
        exit();
    }
    else if (!preg_match("/^[a-zA-Z0-9]*$/", $username))
    {
        header("Location: ../login.php?errror=namemismatch");
        exit();
    }
    else
    {
        $sql = "SELECT * FROM Customers WHERE login=?";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql))
        {
            header("Location: ../login.php?errror=sqlerror");
            exit();
        }
        else
        {
            mysqli_stmt_bind_param($stmt, "s",$username);
            mysqli_stmt_execute($stmt);

            $result = mysqli_stmt_get_result($stmt);

            if ($row = mysqli_fetch_assoc($result))
            {
                //$pwdCheck = password_verify($pw, $row['pass']);
                if ($pw == $row['pass'])
                {
                    session_start();
                    $_SESSION['user_id'] = $row['id'];
                    $_SESSION['user_name'] = $row['name'];
                    if (!isset($_SESSION['CREATED'])) {
                        $_SESSION['CREATED'] = time();
                    } else if (time() - $_SESSION['CREATED'] > 1800) {
                        // session started more than 30 minutes ago
                        session_regenerate_id(true);    // change session ID for the current session and invalidate old session ID
                        $_SESSION['CREATED'] = time();  // update creation time
                    }

                    header("Location: ../login.php?login=success");
                    exit();
                }
                else
                {
                    header("Location: ../login.php?error=wrongpassword");
                    exit();
                }
            }
            else
            {
                header("Location: ../login.php?error=nouser");
                exit();
            }
        }
    }

}
else
{
    header("Location: ../login.php");
    exit();
}

