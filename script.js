// Checking js is working with html 
const greetings = ("Hi there");
console.log(greetings);

// Get today date
const date = new Date();
const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];



// Getting present dates 
// Get year
const nowYear = date.getFullYear();
// Get month
const nowMonth = date.getMonth()+1;
// Get day
const nowDay = date.getDate();

//Setting end year of calendar
let endYear = document.getElementById("deathDate").value;


// Selecting date container
let sDate = document.getElementById("sDate");

// Container
const container = document.getElementById("container");

// Selecting div-title classes
let divTitle = document.getElementsByClassName("div-title");


// Selecting boxes
let dBoxes = document.getElementsByClassName("boxes"); 

// Selecting middle box container

let mBox = document.getElementById("middleBox");

// Creating a div box
function multipleBoxes() {
        $(".year").append('<div class="boxes"></div>');
}

// Append a div box to main div in the container
function drawBoxes() {
    // Middle box remove vh to move everything upper
    mBox.style.marginTop = "0";
    // Getting the birthday value (year-mm-dd)
    let birthday = document.getElementById("birthday").value;
    // Cutting down the year from value and making number from it
    const birthYear = Number(birthday.substring(0, 4));
    // Cutting down the month from value and making number from it
    const birthMonth = Number(birthday.substring(5, 7));
    // Cutting down the month from value and making number from it
    const dayOfBirth = Number(birthday.substring(8));

    // Present year we subtraction the birth year. 
    const yearDiff = nowYear-birthYear;

    // yearDiff convert to months
    let yearDiffInMonths = yearDiff*12;

    

    // Setting the end year of the callendar
    let endYear = document.getElementById("deathDate").value;


    // Setting month diff
    let monthMinus = 0;
    let monthPlus = 0;
    let monthDiff = nowMonth-birthMonth;
    // DayDiff
    let dayDiff = 0;
    dayDiff = nowDay-dayOfBirth;

    /*
    if(nowMonth>=birthMonth){
        monthPlus = nowMonth-birthMonth; 
    } else {
        monthMinus = birthMonth-nowMonth; 
    }
    let pastWeeks = Math.round(((yearDiffInMonths-monthMinus+monthPlus+(dayDiff/28))/12)*52); COPIED FROM TWO LINES UNDER
    */
    console.log(Math.round(dayDiff/7));
    console.log("Mathround: " + (Math.round(((yearDiffInMonths+monthDiff)/12))));
    console.log("Without Mathround: " + ((((yearDiffInMonths+monthDiff+(dayDiff/28))/12)*52)));
    console.log("Floor: " + (Math.floor(yearDiffInMonths+monthDiff+(dayDiff/28))/12));

    let pastWeeks = Math.round(((yearDiffInMonths+monthDiff+(dayDiff/28))/12)*52);
    // Convert year diff to weeks
    let weeks = (yearDiff*52);
    
    // Creating endYear times a div with classlist of year
    for(let i=1; i<=endYear; i++){
        let mDiv = document.createElement("div");
        mDiv.classList.add("year","d-flex","flex-row");
        container.append(mDiv);
        let label = document.createElement("div");
        
        }
    for (let i=1; i<=52; i++) {
        $("#container").append(multipleBoxes());
        
    }
    $(".year").append('<div class="div-title"></div>');
    sDate.classList.add("hide");
    
//Selecting last div (div-title) every 5th
for(let k=1; k<=divTitle.length; k++){
    if((k+1)%5==0){
        let chosenDiv = divTitle[k];
        chosenDiv.classList.add("divfifth");
        chosenDiv.innerHTML = k+1;
    }
}

//Selecting bday lenght divs
for(let y=0; y<pastWeeks; y++){
    dBoxes[y].classList.add("pastDiv");
}

}
mBox.style.marginTop = "20vh";
