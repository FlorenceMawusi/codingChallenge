fetchStudents();


//prospects' performance
let allStudents = null;
let gradeA = 0;
let gradeB = 0;
let gradeC = 0;


async function fetchStudents() {
    const response = await fetch('http://localhost/codingChallenge/api/students.php');
    allStudents = await response.json();
    console.log('converting object to array 2 -> ', Object.values(allStudents.data.values))
    const resultsArray = Object.values(allStudents.data.values);


    for (i = 0; i < resultsArray.length; i++) {
        if (resultsArray[i].grade === "A") {

            gradeA += 1
        }
        else if (resultsArray[i].grade === "B") {

            gradeB += 1
        }
        else if (resultsArray[i].grade === "C") {

            gradeC += 1
        }

    }

    console.log('values of grades -> ', {
        a: gradeA,
        b: gradeB,
        c: gradeC,
    })

    // Bar chart
    new Chart(document.getElementById("pchart"), {
        type: 'pie',
        data: {
            labels: ["Grade A", "Grade B", "Grade C"],
            datasets: [
                {
                    
                    label: "Grades",
                    backgroundColor: ["#3e95cd", "#8e5ea2","#c45850"],
                    data: [gradeA, gradeB, gradeC]
                }
            ]
        },
        options: {
            
            title: {
                display: true,
                text: 'Students Performances Across Training Programs'
            }
        }
    });

}




