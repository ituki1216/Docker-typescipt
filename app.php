$game = $_POST['game'];
$random = rand(1, 9);

if($game === $random)
{
  echo'当たり';
}else{
  echo'はずれ';
}



