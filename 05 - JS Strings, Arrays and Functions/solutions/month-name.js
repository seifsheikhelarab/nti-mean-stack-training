//Write a JavaScript function to get the month name from a particular date.

function monthName(date) {
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[date.getMonth()];
}

console.log(monthName(new Date()));