function CalculateAge() {

    // input box
    let ageEntered = document.getElementById("ageEntered").value;
    if (ageEntered == "" || ageEntered <= 0) {
        alert("Enter Valid Age!!! ");
    } else {
        // getting year from the date module
        let myYear = new Date().getFullYear();
        let birthYear = myYear - ageEntered;
        let ageInput = document.getElementById("age");
        ageInput.innerText = birthYear;
    }
}

let button = document.getElementById("getYear");
button.onclick = function () {
    CalculateAge()
};
