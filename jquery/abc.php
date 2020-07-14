<?php

	//$obj = json_decode($_REQUEST['json']);
	//echo $obj->id;

	$data = ['name'=>'alamin','id'=>'12'];

	//header('Content-type:application/json');
	echo json_encode($data);
?>