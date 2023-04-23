var audio = document.getElementById("play");

let dest = new Date("April 20, 2023 00:00:00");
let finale = new Date("May 20, 2023 16:00:00");


setInterval(() => {
    let now = new Date().getTime();

    let tav = dest - now;
    let tavFinal = finale - now;

    var nap = Math.floor(tav/(1000*60*60*24));
    var ora = Math.floor((tav % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var perc = Math.floor((tav % (1000 * 60 * 60)) / (1000 * 60));
    var mp = Math.floor((tav % (1000 * 60)) / 1000);

    var napFinal = Math.floor(tavFinal/(1000*60*60*24));
    var oraFinal = Math.floor((tavFinal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var percFinal = Math.floor((tavFinal % (1000 * 60 * 60)) / (1000 * 60));
    var mpFinal = Math.floor((tavFinal % (1000 * 60)) / 1000);


    let formazando = [nap,ora,perc,mp];
    let formazandoFinal = [napFinal, oraFinal, percFinal, mpFinal];
    let tombok = [formazando, formazandoFinal];

    for (let i = 0; i < tombok.length; i++) {
        for (let j = 0; j < formazando.length; j++) {
            if(tombok[i][j] < 10) {
                tombok[i][j] = "0"+tombok[i][j];
            }   
        }
    }
   

    


    //document.getElementById("ct").innerHTML = `${formazandoFinal[0]} : ${formazandoFinal[1]} : ${formazandoFinal[2]} : ${formazandoFinal[3]}`;
    document.getElementById("ct2").innerHTML = `${formazandoFinal[0]} : ${formazandoFinal[1]} : ${formazandoFinal[2]} : ${formazandoFinal[3]}`;
    document.getElementById("ctFinal").innerHTML = `${formazandoFinal[0]} : ${formazandoFinal[1]} : ${formazandoFinal[2]} : ${formazandoFinal[3]}`;

    if(tavFinal < 0) {
        clearInterval();
        window.location.href = "https://www.twitch.tv/kriszhadvice";
    } /*else if(tav < 0) {
        clearInterval();
        window.location.href = "https://www.youtube.com/playlist?list=PLK15uKRMQy-2SMM_sQlwSbFIL_QvDxpSE";

    }*/
}, 1000);

audio.onended = function() {  
    audio.volume = 0.2;
    audio.setAttribute("src", `ctdwn_phase5.mp3`);
    audio.volume = 0.2;
}



