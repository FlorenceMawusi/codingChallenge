<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <!-- request.js file -->
    <script src="request.js"></script>

    <!-- style.css file -->
    <link rel="stylesheet" type="text/css" href="style.css">

    <?php include 'require.php';?>
    
    <title>FloCode</title>

    <script>
        function showHint(str) {
        var xhttp;
        if (str.length == 0) { 
            document.getElementById("filter-records").innerHTML = "";
            return;
        }
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            document.getElementById("filter-records").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "filter-records.php?q="+str, true);
        xhttp.send();   
        }
    </script>
  </head>
  <body>
    <h1>Welcome to FloCode: Let's Code!</h1>
    <div class="firstdiv container">
        <h3>Training Progams Available</h3>
        <form>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="inputName">Name</label>
                    <input type="text" class="form-control" id="inputName" onkeyup = "showHint(this.value)">
                </div>
                <div id="filter-records">
                
                </div>
            </div>
        </form>
    </div>

    
    <!--  JavaScript -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>