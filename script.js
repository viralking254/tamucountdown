const daysValue = document.querySelector('#Days');
const hoursValue = document.querySelector('#Hours');
const minutesValue = document.querySelector('#Minutes');
const secondsValue = document.querySelector('#Seconds');
const countdownDateTime = new Date(2022, 09, 10, 18, 42, 00).getTime();

function countDown() {
    const dateTimeNow = new Date() .getTime();
    let difference = countdownDateTime - dateTimeNow;
//days
const daysValueNumber = Math.floor(difference/(1000 * 60 * 60 * 24))
//hours
const hoursValueNumber = Math.floor(difference/ (1000 * 60 * 60) % 24)
//minutes
const minutesValueNumber = Math.floor(difference/(1000*60) % 60)
//seconds
const secondsValueNumber = Math.floor(difference/(1000) % 60 )

daysValue.innerHTML = daysValueNumber;
hoursValue.innerHTML = minutesValueNumber;
minutesValue.innerHTML = minutesValueNumber;
secondsValue.innerHTML = secondsValueNumber;

console.log(daysValueNumber, hoursValueNumber, minutesValueNumber, secondsValueNumber)
}

countDown();
setInterval(countDown, 1000);