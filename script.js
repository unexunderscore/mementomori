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
const nowMonth = date.getMonth();
// Get day
const nowDay = date.getDay();

//Setting end year of calendar
let endYear = document.getElementById("deathDate").value;

// Selecting input value
let birthday = document.getElementById("birthday").value;
const birthYear = Number(birthday.substring(0, 4));


// Selecting date container
let sDate = document.getElementById("sDate");

// Checking the difference between years (this number will be set for rows)
const yearDiff = nowYear-birthYear;


// Container
const container = document.getElementById("container");

// Selecting div-title classes
let divTitle = document.getElementsByClassName("div-title");


// Selecting boxes
let dBoxes = document.getElementsByClassName("boxes"); 

// Convert year diff to weeks
let weeks = yearDiff*52;

// Creating a div box
function multipleBoxes() {
        $(".year").append('<div class="boxes"></div>');
}

// Append a div box to main div in the container
function drawBoxes() {
    let endYear = document.getElementById("deathDate").value;
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
for(let y=0; y<weeks; y++){
    dBoxes[y].classList.add("pastDiv");
}
}

