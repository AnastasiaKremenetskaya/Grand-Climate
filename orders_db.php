<html>
<body>

Спасибо за Ваш заказ, <?php echo $_POST["FIO"]; ?>!<br>
Мы обязательно свяжемся с вами по указанному номеру в ближайшее время.

<?php
$servername = "127.0.0.1";
$username = "root";
$password = "password";
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// Escape user inputs for security
$name = mysqli_real_escape_string($link, $_REQUEST['FIO']);
$phone = mysqli_real_escape_string($link, $_REQUEST['phone']);
$email = mysqli_real_escape_string($link, $_REQUEST['email']);
$adress = mysqli_real_escape_string($link, $_REQUEST['adress']);

$sql = "INSERT INTO customers (firstname, phone, email, adress)
VALUES ('$name', '$phone', '$email', '$adress')";

if(mysqli_query($link, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Not able to execute $sql. " . mysqli_error($link);
}
// Close connection
mysqli_close($link);
?>

</body>
</html>