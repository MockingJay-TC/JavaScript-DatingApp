function ageCalculator() {

    let ageInput = document.getElementById("ageEntered").value;
    let showYear = document.getElementById("age");
    let date = new Date();

    if (ageInput == "" || ageInput <= 0) {
        alert("Enter Valid Age!!! ");
    } else {
        // getting year from the date module
        let birthYear = date.getFullYear() - parseInt(ageInput);
        showYear.innerText = birthYear;
    }
}

let findYear = document.getElementById("getYear");
findYear.onclick = function () {
    ageCalculator();
}
// Victor.Aremu