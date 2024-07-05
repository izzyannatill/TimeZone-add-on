function showSelectedCity(event) {

let parisTime = moment().tz("Europe/Paris").format("dddd, MMMM D, YYYY H:ma");
let tokyoTime = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY H:ma");
let sydneyTime = moment().tz("Australia/Sydney").format("dddd, MMMM D, YYYY H:ma");

if (event.target.length > 0) {
    console.log(event.target.value);
}
if (event.target.value === "paris") {
    alert(`It is ${parisTime} in Europe/Paris`);
}
if (event.target.value === "sydney") {
    alert(`It is ${sydneyTime} in Australia/Sydney`);
}
if (event.target.value === "tokyo") {
    alert(`It is ${tokyoTime} in Asia/Tokyo`);
}
}

let citySelect = document.querySelector("#cities");

citySelect.addEventListener("change", showSelectedCity);
