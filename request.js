fetchTrainingPrograms();



const resultsPane = document.getElementById('results')
const searchInput = document.getElementById('search')


searchInput.addEventListener('keyup', (event) => {
    filterData(event.target.value);
});
searchInput.addEventListener('focus', () => {
    resultsPane.style.display = "block";
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

    filteredData.forEach(each => { resultsPane.innerHTML += `<div>${each.name}</div>` })
    console.log(resultsPane)
}
