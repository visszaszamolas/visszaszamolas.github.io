var audio = document.getElementById("play");
let effect = document.getElementById("coreEffect");
let playable = false;


let dest = new Date("March 20, 2023 00:00:00");
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
   

    


    document.getElementById("ct").innerHTML = `${formazando[0]} : ${formazando[1]} : ${formazando[2]} : ${formazando[3]}`;
    document.getElementById("ct2").innerHTML = `${formazando[0]} : ${formazando[1]} : ${formazando[2]} : ${formazando[3]}`;
    document.getElementById("ctFinal").innerHTML = `🟣 ${formazandoFinal[0]} : ${formazandoFinal[1]} : ${formazandoFinal[2]} : ${formazandoFinal[3]}`;

    if(tavFinal < 0) {
        clearInterval();
        window.location.href = "https://www.twitch.tv/kriszhadvice";
    } else if(tav < 0) {
        clearInterval();
        window.location.href = "https://www.youtube.com/playlist?list=PLK15uKRMQy-2SMM_sQlwSbFIL_QvDxpSE";

    }
}, 1000);

audio.onended = function() {  
    audio.volume = 0.5;
    audio.setAttribute("src", `ctdwn_phase3.mp3`);
    audio.volume = 0.5;
}

effect.onended = function() {
    playable = true;
}

  function coreSound() {
      if(playable) {
        effect.setAttribute("src", 'core.mp3');
        effect.volume = 0.5;
        effect.play();
        playable = false;
      } 
 }
