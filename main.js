function verify() {
    var inputMonth = document.getElementById('month').value;
    inputMonth = parseInt(inputMonth);

    switch (inputMonth) {
        case 1: alert("January"); break;
        case 2: alert("February"); break;
        case 3: alert("March"); break;
        case 4: alert("April"); break;
        case 5: alert("May"); break;
        case 6: alert("June"); break;
        case 7: alert("July"); break;
        case 8: alert("August"); break;
        case 9: alert("September"); break;
        case 10: alert("October"); break;
        case 11: alert("November"); break;
        case 12: alert("December"); break;
        default: alert("Please enter a number from 1 to 12");
    }
}