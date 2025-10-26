let hour = document.getElementById("hours");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");

let currentTime = new Date();

hour.innerHTML = currentTime.getHours();
mins.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();
