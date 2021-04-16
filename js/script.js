function ageInYear() {
    let date = new Date();
    let dob = document.getElementById("dobEntered").value;
    let ageAtDateOf = document.getElementById("getAgeInput").value;
    let ageCon = document.querySelector(".ageContainer");
    let year = document.getElementById('years');
    let month = document.getElementById('months');
    let week = document.getElementById('weeks');
    let day = document.getElementById('days');

    let m = moment(date);
    let modDob = moment(dob);
    let modAtd = moment(ageAtDateOf);

    if (Number(modDob.format('YYYY')) > Number(modAtd.format('YYYY')) || (dob == "" ) || (ageAtDateOf == "")){
        alert('Enter valid Date of Birth');
    } else {

    }


    const date1 = new Date(dob);
    const date2 = new Date(ageAtDateOf);
    console.log(getDifferenceInMonths(date1,date2));
    console.log(getDifferenceInDays(date1, date2));
    console.log(getDifferenceInHours(date1, date2));
    console.log(getDifferenceInMinutes(date1, date2));
    console.log(getDifferenceInSeconds(date1, date2));

    
    ageCon.style.display = "block";
    year.innerText = Math.floor(getDifferenceInYears(date1, date2)) + " years";
    month.innerText = Math.floor(getDifferenceInMonths(date1, date2)) + " months";
    // day.innerText = Math.floor(getDifferenceInDays(date1, date2)) + " days";

function getDifferenceInYears(date1, date2){
    const diffInMs = Math.abs(date2 - date1);
    // return (diffInMs - (diffInMs / 2.6280E+9)) / 3.1536E+10;
    return diffInMs / 3.1536E+10;
}

    function getDifferenceInMonths(date1, date2){
        const diffInMs = Math.abs(date2 - date1);
        const mo = diffInMs / 2.6280E+9;
        return mo - (Math.floor(diffInMs / 3.1536E+10) * 12) ;
    }

    function getDifferenceInDays(date1, date2) {
        const diffInMs = Math.abs(date2 - date1);
        const day = diffInMs / (86400000);
        return day % (Math.floor(diffInMs / (3.6000E+6)) * 30);
    }

    function getDifferenceInHours(date1, date2) {
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / (3.6000E+6);
    }

    function getDifferenceInMinutes(date1, date2) {
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / (1000 * 60);
    }

    function getDifferenceInSeconds(date1, date2) {
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / 1000;
    }

}

let calAge = document.getElementById("calculateAge");
calAge.onclick = function () {
    ageInYear();
}
// Victor.Aremu