
<?php
$val=$_GET["value"];
$heading=$_GET["heading"];
$val=$val."</script></html>";
$val=rawurldecode($val);
$myfile=fopen("newfile.html","w");
fwrite($myfile,$val);
//fwrite($myfile, $val);
$mainpage=file_get_contents("../../index.php");
//echo $mainpage;
$val=str_replace("&gt;","", $val);
$pos=strpos($mainpage,'item');
$val='<div class="item"><a hreaf="javascript:void(0)">'.$heading."</a>".$val."</div>";

$newfile=substr_replace($mainpage,$val,$pos-13,0);
$fi=fopen("../../index.php","w");

fwrite($fi,$newfile);
 header('Location: '."../../index.php");
?>