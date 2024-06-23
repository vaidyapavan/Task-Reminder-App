let endDate;
const inputs = document.querySelectorAll("input");
let alertOneDaySent = false;
let alertOneHourSent = false;
let alertEndTime = false; // Added to track end time alert

const setEndDate = () => {
    const userInput = document.getElementById("user-end-date").value;
    endDate = new Date(userInput);

    if (isNaN(endDate)) {
        alert("Please enter a valid date or enter in the correct format as suggested.");
        return;
    }
    document.getElementById("end-date").innerText = userInput;
    alertOneDaySent = false; // Reset alert status
    alertOneHourSent = false; // Reset alert status
    alertEndTime = false; // Reset alert status
    clock(); 
};

const clock = () => {
    if (!endDate) return;

    const now = new Date();
    const diff = (endDate - now) / 1000;

    if (diff >= 0) {
        const days = Math.floor(diff / 3600 / 24); 
        const hours = Math.floor(diff / 3600) % 24; 
        const minutes = Math.floor(diff / 60) % 60; 
        const seconds = Math.floor(diff % 60); 

        inputs[1].value = days;
        inputs[2].value = hours;
        inputs[3].value = minutes;
        inputs[4].value = seconds;

        if (days === 1 && !alertOneDaySent) {
            alert("Only 1 day left!");
            alertOneDaySent = true; 
        }

        if (hours === 1 && days === 0 && !alertOneHourSent) {
            alert("Only 1 hour left!");
            alertOneHourSent = true; 
        }

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0 && !alertEndTime) {
            alert("Time's up! Your task is due now.");
            alertEndTime = true;
        }

    } else {
        inputs[1].value = 0;
        inputs[2].value = 0;
        inputs[3].value = 0;
        inputs[4].value = 0;
    }
};

setInterval(clock, 1000);
