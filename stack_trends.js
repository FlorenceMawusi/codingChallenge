fetchStacks();


//prospects' performance
let allStacks = null;


async function fetchStacks() {
    const response = await fetch('http://localhost/codingChallenge/api/stacks.php');
    allStacks = await response.json();
    console.log('converting object to array 3 -> ', Object.values(allStacks.data.values));
    const resultsArray = Object.values(allStacks.data.values);
    console.log(resultsArray)

    let namesArray = [];
    let trendsArray = [];
    for (i = 0; i < resultsArray.length; i++) {
        
        namesArray.push(resultsArray[i].name);
        trendsArray.push(resultsArray[i].trend);
    }
    console.log('values ->',{
        a: namesArray,
        b: trendsArray
    });


    
    new Chart(document.getElementById("bchart"), {
        type: 'bar',
        data: {
            labels: namesArray,
            datasets: [
                {
                    label: "Development Stacks",
                    backgroundColor: ["#3e95cd", "#8e5ea2","#c45850", "#F2BB9C", 
                        "#FF585F", "#F1872F", "#C987E9", "#4C74B9"],
                    data: trendsArray
                }
            ]
        },
        options: {
            title: {
                legend: false,
                display: true,
                text: 'Development Stacks Industry Trends (%)'
            }
        }
    });
}


