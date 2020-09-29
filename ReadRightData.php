<?php
error_reporting(E_ALL ^ E_DEPRECATED);
$servername = "localhost";  
$username = "root";  
$password = ""; 	   

$conn = mysql_connect ($servername , $username , $password) or die("unable to connect to host");  
$sql = mysql_select_db ('PhraseBuilder',$conn) or die("unable to connect to database");

$data="";
		$query="select * from rightphrase";
		$res=mysql_query($query,$conn);

		while($row = mysql_fetch_row($res))
		{
			$data=$data.$row[1]."<br>";
		}
		
?>