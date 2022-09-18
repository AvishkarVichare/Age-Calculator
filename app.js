const container = document.querySelector('.container');
const error = document.querySelector('.error');

let dInput = document.querySelector('#dob');


function getAge() {

    return dInput.value
}

function calcAge() {

    let age = getAge();
    const ageArr = age.split('-')
    // console.log(ageArr) // year month day

    let now = new Date();

    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    console.log(year,month,day)
    console.log(year - ageArr[0],
        month - ageArr[1], day - ageArr[2])
    return {
        years: year - ageArr[0],
        months: month - ageArr[1],
        days: day - ageArr[2],
    }
}

function displayAge() {
    let ourAge = calcAge()
    // console.log(ourAge)

    for (e in ourAge) {
        if (ourAge[e] < 0) {
            error.style.display = 'block';
        
        }
        else {
            error.style.display = 'none';
            container.querySelector('.age span').innerText = ourAge[e];
        }
    }

    container.querySelector('.age :nth-child(1)').innerText = ourAge.years;
    container.querySelector('.age :nth-child(2)').innerText = ourAge.months;
    container.querySelector('.age :nth-child(3)').innerText = ourAge.days;

}

dInput.addEventListener('input', displayAge)


