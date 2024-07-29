<?php
include '../../private/config.php';
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Retrieve the clientEmail from the $_POST array
    $clientEmail = $_POST['clientEmail'];
    $filename = $_POST['filename'];
    $currentProgress = $_POST['currentProgress'];

    $sql = "SELECT * FROM VersionA WHERE clientEmail = '$clientEmail'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) { // I should check whether it is 1 or 2 here but it can now explode :l
        $sql = "UPDATE VersionA 
        SET 
            option0 = CASE WHEN $currentProgress = '1' THEN '$filename' ELSE option0 END,
            option1 = CASE WHEN $currentProgress = '2' THEN '$filename' ELSE option1 END,
            option2 = CASE WHEN $currentProgress = '3' THEN '$filename' ELSE option2 END,
            option3 = CASE WHEN $currentProgress = '4' THEN '$filename' ELSE option3 END,
            option4 = CASE WHEN $currentProgress = '5' THEN '$filename' ELSE option4 END,
            option5 = CASE WHEN $currentProgress = '6' THEN '$filename' ELSE option5 END
        WHERE clientEmail = '$clientEmail'";

        if ($conn->query($sql)) {
            echo "VersionA record updated successfully.";
            if($currentProgress=='6'){
                header("Location: ../FinishVersionA/RetrievePhoto.html");
                exit;
            }
        } else {
            echo "Error updating VersionA record: " . $conn->error;
        }
    } else {
            echo "Error: No matching client found in VersionA";
    }

// Close the database connection
$conn->close();
