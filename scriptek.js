var audio = document.getElementById("play");


console.log("https://www.youtube.com/watch?v=jW7sDih_CpQ");

let dest = new Date("Feb 20, 2023 00:00:00");

function lower() {
        audio.volume = 0.25;
}

setInterval(() => {
    let now = new Date().getTime();

    let tav = dest - now;

    let nap = Math.floor(tav/(1000*60*60*24));
    var ora = Math.floor((tav % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var perc = Math.floor((tav % (1000 * 60 * 60)) / (1000 * 60));
    var mp = Math.floor((tav % (1000 * 60)) / 1000);

    document.getElementById("ct").innerHTML = `${nap} : ${ora} : ${perc} : ${mp}`;
    document.getElementById("ct2").innerHTML = `${nap} : ${ora} : ${perc} : ${mp}`;

    if(tav < 0) {
        clearInterval();
        document.getElementById("ct").innerHTML = "-----";
        document.getElementById("ct2").innerHTML = "-----";

    }
}, 1000);

audio.onended = function() {  

    audio.volume = 0.25;
    audio.setAttribute("src", `ctdwn.mp3`);
    audio.volume = 0.25;
 
 }
 
