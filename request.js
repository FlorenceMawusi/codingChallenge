fetchTrainingPrograms();



const resultsPane = document.getElementById('results')
const searchInput = document.getElementById('search')


searchInput.addEventListener('keyup', (event) => {
    filterData(event.target.value);
});
searchInput.addEventListener('focus', () => {
    resultsPane.style.display = "flex";
});
searchInput.addEventListener('blur', () => {
    resultsPane.style.display = "none";
})



let allTrainingPrograms = null;

async function fetchTrainingPrograms() {
    /**
     * STEPS
     * 1. FETCH THE DATA FROM THE API ENDPOINT
     * 2. CONVERT THE RESPONSE FROM STRING INTO JSON
     * 3. SINCE THE RESPONSE IS AN OBJECT, AND WE CAN'T EASILY TRAVERSE AN OBJECT IN JAVASCRIPT, CONVERT THE VALUES IN THE OBJECT TO AN ARRAY, SO WE CAN EASILY LOOP OVER IT
     * 4. LOOP OVER THE ARRAY, AND FOR EACH ITEM, APPEND THE ITEM TO THE DIV THAT HAS THE ID OF 'RESULTS'
     * 
     */
    const response = await fetch('http://localhost/codingChallenge/api/training-program.php');
    console.log('value -> ', response);
    allTrainingPrograms = await response.json();
    console.log('converting object to array -> ', Object.values(allTrainingPrograms.data.values))
    const resultsArray = Object.values(allTrainingPrograms.data.values);


    // for (i = 0; i < resultsArray.length; i++) {
    //     const div = `<div>${resultsArray[i].name}</div>`
    //     resultsPane.innerHTML += div;
    // }
}


function filterData(input) {
    /**
     * STEPS
     * 0. REMOVE ALL THE TEXT FROM THE DIV WITH THE ID OF 'RESULTS', SO THAT WHEN WE'RE APPENDING THE VALID RESULTS, THE OLD DATA WILL NOT BE PART.
     * 1. TAKE THE ENTIRE ARRAY OF DATA
     * 2. USE THE 'ARRAY.FILTER' FUNCTION TO FILTER OUT THE VALUES IN THE ARRAY WHICH AREN'T MATCHING WHAT THE USER ENTERED
     * 3. AFTER FITLERING OUT THE CORRECT RESULTS, APPEND EACH ONE TO THE DIV WHICH HAS THE ID OF 'RESULTS'
     * 
     */

    resultsPane.innerHTML = '';
    const resultsArray = Object.values(allTrainingPrograms.data.values);

    const filteredData = resultsArray.filter(each => {
        const lowercasename = each.name.toLowerCase();
        const lowercaseInput = input.toLowerCase();
        return lowercasename.includes(lowercaseInput)
    })

    console.log('after filtering -> ', filteredData)

    filteredData.forEach(each => {
        resultsPane.innerHTML +=
            `<div class = "card">
            <h5> ${each.name} </h5> 
            <p> ${each.price} cedis </p>
            <p> ${each.duration} </p> 
        </div>`

    })

    console.log(resultsPane)
}

//prospects' performance
let allStudents = null;

async function fetchStudents() {
    const response = await fetch('http://localhost/codingChallenge/api/students.php');
    console.log('value -> ', response);
    allStudents = await response.json();
    console.log('converting object to array -> ', Object.values(allStudents.data.values))
    const resultsArray = Object.values(allStudents.data.values);

    // resultsArray.forEach(each => {
    //     resultsArray.innerHTML +=
    //         `<div class = "card">
    //             <h5> ${each.name} </h5> 
    //             <p> ${each.price} cedis </p>
    //             <p> ${each.duration} </p> 
    //     </div>`

}

const ctx = "pchart";
const labels = ["A", "B", "C"];
const dataset = {
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
};

const pchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels,
        ...dataset,
    }
})








