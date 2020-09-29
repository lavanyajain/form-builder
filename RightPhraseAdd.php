<?php
error_reporting(E_ALL ^ E_DEPRECATED);
$servername = "localhost";  
       $username = "root";  
       $password = ""; 
$count=0;	   
$phr=$_GET["phrase"];
$conn = mysql_connect ($servername , $username , $password) or die("unable to connect to host");  
$sql = mysql_select_db ('PhraseBuilder',$conn) or die("unable to connect to database");
$query="select * from rightphrase";
		$res=mysql_query($query,$conn);
		$temp=0;
		while($row = mysql_fetch_row($res))
		{
		$atemp=$row[0];
		if($atemp>$temp)
		{
			$temp=$atemp;
		}
		}
		$recid=$temp+1;
		$query="insert into rightphrase values($recid,'$phr')";
		$res=mysql_query($query);
		if($res)
		{
		header("Location:index.php"); 

		}
		else{
		echo mysql_error($conn);
	
		}
		$data="";
		$query="select * from rightphrase";
		$res=mysql_query($query,$conn);
		$myfile=fopen("rightPhrase.txt","w");
		while($row = mysql_fetch_row($res))
		{
			$data=$data.$row[1]."<br>";
		}
		
?>
