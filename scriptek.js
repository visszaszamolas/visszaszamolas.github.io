var audio = document.getElementById("play");


let v = "aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1qVzdzRGloX0NwUQ==";

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

    let formazando = [nap,ora,perc,mp];
    for (let i = 0; i < formazando.length; i++) {
        if(formazando[i] < 10) {
            formazando[i] = "0"+formazando[i];
        }
        
    }

    document.getElementById("ct").innerHTML = `${formazando[0]} : ${formazando[1]} : ${formazando[2]} : ${formazando[3]}`;
    document.getElementById("ct2").innerHTML = `${formazando[0]} : ${formazando[1]} : ${formazando[2]} : ${formazando[3]}`;

    if(tav < 0) {
        clearInterval();
        document.getElementById("ct").innerHTML = "-----";
        document.getElementById("ct2").innerHTML = "-----";

    }
}, 1000);

audio.onended = function() {  

    audio.volume = 0.25;
    audio.setAttribute("src", `ctdwn_phase2.mp3`);
    audio.volume = 0.25;
 
 }
 
