


filter();
fetchTrainingPrograms();



const resultsPane = document.getElementById('results')
const searchInput = document.getElementById('search')


const allTrainingPrograms = null;

async function fetchTrainingPrograms(){
    const response = await fetch('http://localhost/codingChallenge/api/training-program.php');
    // const text = await response.text();
    // console.log(text);
    allTrainingPrograms = await response.json();
    //for every item in the trainingPrograms.data.values array, create a div and append it to the resultspane

    //because its an object, we first have to get the values in the object as an array.
    //we can do that by Object.values(trainingPrograms.data.values)
    console.log('converting object to array -> ', Object.values(trainingPrograms.data.values))
    const resultsArray = Object.values(trainingPrograms.data.values);


    // console.log('the number of items in the array is ', resultsArray.length)

    for (i = 0; i < resultsArray.length; i++) {
        const div = `<div>${resultsArray[i].name}</div>`
        resultsPane.innerHTML += div;
    }
}
