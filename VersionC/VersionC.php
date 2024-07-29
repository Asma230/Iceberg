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

    $sql = "SELECT * FROM VersionC WHERE clientEmail = '$clientEmail'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) { // I should check whether it is 1 or 2 here but it can now explode :l
        $sql = "UPDATE VersionC 
        SET 
            option0 = CASE WHEN $currentProgress = '1' THEN '$filename' ELSE option0 END,
            option1 = CASE WHEN $currentProgress = '2' THEN '$filename' ELSE option1 END,
            option2 = CASE WHEN $currentProgress = '3' THEN '$filename' ELSE option2 END,
            option3 = CASE WHEN $currentProgress = '4' THEN '$filename' ELSE option3 END,
            option4 = CASE WHEN $currentProgress = '5' THEN '$filename' ELSE option4 END,
            option5 = CASE WHEN $currentProgress = '6' THEN '$filename' ELSE option5 END,
            option6 = CASE WHEN $currentProgress = '7' THEN '$filename' ELSE option6 END,
            option7 = CASE WHEN $currentProgress = '8' THEN '$filename' ELSE option7 END,
            option8 = CASE WHEN $currentProgress = '9' THEN '$filename' ELSE option8 END,
            option9 = CASE WHEN $currentProgress = '10' THEN '$filename' ELSE option9 END,
            option10 = CASE WHEN $currentProgress = '11' THEN '$filename' ELSE option10 END,
            option11 = CASE WHEN $currentProgress = '12' THEN '$filename' ELSE option11 END,
            option12 = CASE WHEN $currentProgress = '13' THEN '$filename' ELSE option12 END,
            option13 = CASE WHEN $currentProgress = '14' THEN '$filename' ELSE option13 END,
            option14 = CASE WHEN $currentProgress = '15' THEN '$filename' ELSE option14 END
        WHERE clientEmail = '$clientEmail'";

        if ($conn->query($sql)) {
            echo "VersionC record updated successfully.";
            if($currentProgress=='15'){
                header("Location: ../FinishVersionC/RetrievePhoto.html");
                exit;
            }
        } else {
            echo "Error updating VersionC record: " . $conn->error;
        }
    } else {
            echo "Error: No matching client found in VersionC";
    }

// Close the database connection
$conn->close();
