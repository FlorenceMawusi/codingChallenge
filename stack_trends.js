fetchStacks();


//prospects' performance
let allStacks = null;


async function fetchStacks() {
    const response = await fetch('http://localhost/codingChallenge/api/stacks.php');
    allStacks = await response.json();
    console.log('converting object to array 3 -> ', Object.values(allStacks.data.values));
    const resultsArray = Object.values(allStacks.data.values);
    
    
};

 // for (i = 0; i < resultsArray.length; i++) {
    //     const div = `<div>${resultsArray[i].name}</div>`
    //     resultsPane.innerHTML += div;
    // }
new Chart(document.getElementById("bchart"), {
    type: 'bar',
    data: {
        labels: [
            
            "XAMPP", "Django", "MEAN", "Java", 
            "LAMP","MERN", "Spring", "Ruby"],
        datasets: [
            {
                label: "Development Stacks",
                backgroundColor: ["#3e95cd", "#8e5ea2","#c45850", "#F2BB9C", 
                    "#FF585F", "#F1872F", "#C987E9", "#4C74B9"],
                data: [50, 20, -30, 0, -10, 20, 40, 80]
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
