

<?php

    $myfile = fopen("data.json", "r") or die("Unable to open file!");
    $content = fread($myfile,filesize("data.json"));
    $dejson = json_decode($content);

    $returnObj = new stdClass();
    $returnObj->success = true;
    $returnObj->data = $dejson->trainingprograms;
    
    $entrjson = json_encode($returnObj);
    echo $entrjson;
 
?>

