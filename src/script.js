function showSelectedCity(event) {
if (event.target.length > 0) {
    console.log(event.target.value);
}
if (event.target.value === "paris") {
    alert("Paris!");
}
if (event.target.value === "sydney") {
    alert("Sydney!");
}
if (event.target.value === "tokyo") {
    alert("Tokyo!");
}
}

let citySelect = document.querySelector("#cities");

citySelect.addEventListener("change", showSelectedCity);
