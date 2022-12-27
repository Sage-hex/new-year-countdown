const daysEl= document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minsEl= document.getElementById('mins');
const secondsEl= document.getElementById('secs');

let newYear = '1 January 2023';

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    
    const totalSeconds = (newYearDate - currentDate)/1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor(totalSeconds/60)%60;
    
    const secs = Math.floor(totalSeconds)%60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = secs;
    console.log(daysEl)
}
countdown();

//initialized countdown
setInterval(countdown, 1000);

if (newYear == newYearDate) {
    let newYear = '1 January 2024'
}