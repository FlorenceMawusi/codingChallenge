<!-- 
//read in the json string from the file.
// get the students in the object. 
// convert the students object into a string.
//echo that string

-->

<?php

    $myfile = fopen("data.json", "r") or die("Unable to open file!");
    $content = fread($myfile,filesize("data.json"));
    $dejson = json_decode($content);

    $returnObj = new stdClass();

    $returnObj->success = true;
    $returnObj->data = $dejson->students;
    //foreach ($returnObj as "$i"){
    //    echo "$i[0]";
    //}
    $entrjson = json_encode($returnObj);
    echo $entrjson;

    
 
?>

