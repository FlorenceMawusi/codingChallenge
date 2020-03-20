<!-- 
//read in the json string from the file.
// get the training programs in the object. 
// convert the training programs object into a string
//echo that string

-->

<?php

    $myfile = fopen("data.json", "r") or die("Unable to open file!");
    $content = fread($myfile,filesize("data.json"));
    $dejson = json_decode($content);

    $returnObj->success = true;
    $returnObj->data = $dejson->trainingprograms;
    
    $entrjson = json_encode($returnObj);
    echo $entrjson;

    
 
?>

