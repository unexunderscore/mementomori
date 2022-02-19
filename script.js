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
        mDiv.classList.add("year");
        mDiv.classList.add("d-flex");
        mDiv.classList.add("flex-row");
        container.append(mDiv);
        }
    for (let i=1; i<=52; i++) {
        $("#container").append(multipleBoxes());
    }
    sDate.classList.add("hide");
}