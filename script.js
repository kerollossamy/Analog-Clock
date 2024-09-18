let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

function updateClock() {
    let day = new Date();
    let ms = day.getMilliseconds();

    let hh = day.getHours() * 30 + day.getMinutes() / 2 + day.getSeconds() / 120;
    let mm = day.getMinutes() * 6 + day.getSeconds() / 10;
    let ss = day.getSeconds() * 6 + ms / 1000 * 6;

    hr.style.transform = `rotateZ(${hh}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    requestAnimationFrame(updateClock);
}


requestAnimationFrame(updateClock());