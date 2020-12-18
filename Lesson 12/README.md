# Lesson 12
· 将本小组数据库设计完成，并编写尽可能多会用到的sql语句

> 
<?php
	
	$sql="select * from teamproject where team_id = '$teamname'";//团队项目
	$sql="select * from teamtm where user_id = '$username'";//团队记忆库列表
	$sql="select * from fltm where file_id = '$filename'";//所选记忆库
	$sql="select * from teamtb where user_id = '$username'";//团队术语库列表
	$sql="select * from fltb where file_id = '$filename'";//所选术语库
?>
