/*==================================================
        HAPPY BIRTHDAY KITKAT ❤️
        PREMIUM SCRIPT.JS
        PART 1
==================================================*/

"use strict";

/*=========================
GLOBAL ELEMENTS
=========================*/

const scenes = document.querySelectorAll(".scene");

const music = document.getElementById("bgMusic");

const flame = document.getElementById("flame");

const smoke = document.getElementById("smoke");

const wishText = document.getElementById("wishText");

let currentScene = "loadingPage";

let musicStarted = false;


/*=========================
SHOW PAGE
=========================*/

function showPage(id){

    scenes.forEach(scene=>{

        scene.classList.remove("active");

    });

    const page=document.getElementById(id);

    if(page){

        page.classList.add("active");

        currentScene=id;

    }

}


/*=========================
LOADING SCREEN
=========================*/

window.addEventListener("load",()=>{

    createStars();

    createFloatingHearts();

    createShootingStars();

    createGlowOrbs();

    createBalloons();

    setTimeout(()=>{

        showPage("passwordPage");

    },3400);

});


/*=========================
PASSWORD KEYPAD
=========================*/

let entered="";

const dots=document.querySelectorAll(".passwordDots span");

const keypad=document.querySelectorAll(".keypad button");

const error=document.getElementById("passwordError");

const hiddenInput=document.getElementById("passwordInput");


keypad.forEach(btn=>{

    btn.addEventListener("click",()=>{

        const value=btn.innerText;

        if(value==="⌫"){

            entered=entered.slice(0,-1);

            updateDots();

            return;

        }

        if(value==="#"){

            entered="";

            updateDots();

            return;

        }

        if(!isNaN(value) && entered.length<4){

            entered+=value;

            updateDots();

        }

    });

});


function updateDots(){

    hiddenInput.value=entered;

    dots.forEach((dot,index)=>{

        if(index<entered.length){

            dot.classList.add("active");

        }

        else{

            dot.classList.remove("active");

        }

    });

}


/*=========================
UNLOCK
Password : 0202
=========================*/

document.getElementById("unlockBtn").addEventListener("click",()=>{

    if(entered==="0202"){

        error.innerHTML="";

        unlockAnimation();

    }

    else{

        error.innerHTML=
        "She knows it ❤️";

        entered="";

        updateDots();

    }

});


function unlockAnimation(){

    const card=document.querySelector(".glassLockCard");

    card.style.transform="scale(.92)";

    card.style.opacity=".7";

    setTimeout(()=>{

        card.style.transition=".8s";

        card.style.transform="scale(1.4)";

        card.style.opacity="0";

    },250);

    setTimeout(()=>{

        showPage("envelopePage");

    },900);

}


/*=========================
ENVELOPE
=========================*/

document.getElementById("openLetter").addEventListener("click",()=>{

    const envelope=document.getElementById("envelope");

    envelope.style.transition="1s";

    envelope.style.transform="translateY(-30px) rotateX(180deg)";

    setTimeout(()=>{

        showPage("welcomePage");
        const video = document.getElementById("welcomeVideo");

video.currentTime = 0;
video.play();
        startMusic();

    },900);

});

/*=========================
WELCOME VIDEO ENDED
=========================*/

const welcomeVideo = document.getElementById("welcomeVideo");
const welcomeContent = document.getElementById("welcomeContent");

if (welcomeVideo && welcomeContent) {

    // Hide the text initially
    welcomeContent.classList.remove("show");

    // Show the text only after video ends
    welcomeVideo.addEventListener("ended", () => {
        welcomeContent.classList.add("show");
    });

}
/*=========================
WELCOME PAGE
=========================*/

document.getElementById("startJourney").addEventListener("click",()=>{

    const page=document.getElementById("welcomePage");

    page.style.animation="fadeOut .8s";

    setTimeout(()=>{

        showPage("cakePage");
        const cakeVideo = document.getElementById("cakeVideo");

if (cakeVideo) {
    cakeVideo.currentTime = 0;
    cakeVideo.play().catch(() => {});
}

    },700);

});


/*=========================
BACKGROUND MUSIC
=========================*/

function startMusic(){

    if(musicStarted) return;

    musicStarted=true;

    music.volume=0;

    music.play().catch(()=>{});

    let volume=0;

    const fade=setInterval(()=>{

        volume+=0.02;

        if(volume>=0.35){

            volume=0.35;

            clearInterval(fade);

        }

        music.volume=volume;

    },120);

}


/*=========================
FLOATING HEARTS
=========================*/

function createFloatingHearts(){

    const container=document.getElementById("floatingHearts");

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        const emojis=["❤️","💕","💖","💗","💓"];

        heart.innerHTML=
        emojis[Math.floor(Math.random()*emojis.length)];

        heart.style.left=Math.random()*100+"%";

        heart.style.fontSize=
        (18+Math.random()*20)+"px";

        heart.style.animationDuration=
        (7+Math.random()*5)+"s";

        container.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },12000);

    },550);

}


/*=========================
STARS
=========================*/

function createStars(){

    const container=document.getElementById("stars");

    for(let i=0;i<180;i++){

        const star=document.createElement("span");

        star.className="star";

        star.style.left=Math.random()*100+"%";

        star.style.top=Math.random()*100+"%";

        star.style.animationDelay=
        Math.random()*4+"s";

        star.style.opacity=Math.random();

        container.appendChild(star);

    }

}


/*=========================
SHOOTING STARS
=========================*/

function createShootingStars(){

    const sky=document.getElementById("shootingStars");

    setInterval(()=>{

        const star=document.createElement("div");

        star.className="shooting";

        star.style.left=(-100)+"px";

        star.style.top=
        Math.random()*40+"%";

        sky.appendChild(star);

        setTimeout(()=>{

            star.remove();

        },3500);

    },4000);

}


/*=========================
BALLOONS
=========================*/

function createBalloons(){

    const container=document.getElementById("balloonsContainer");

    const colors=[
    "red",
    "pink",
    "purple",
    "blue",
    "yellow"
    ];

    setInterval(()=>{

        const balloon=document.createElement("div");

        balloon.className="balloon";

        balloon.classList.add(

        colors[
        Math.floor(Math.random()*colors.length)
        ]

        );

        balloon.style.left=
        Math.random()*100+"%";

        balloon.style.animationDuration=
        (10+Math.random()*5)+"s";

        container.appendChild(balloon);

        setTimeout(()=>{

            balloon.remove();

        },16000);

    },1800);

}


/*=========================
GLOW ORBS
=========================*/

function createGlowOrbs(){

    const bg=document.getElementById("background");

    ["one","two","three"].forEach(name=>{

        const glow=document.createElement("div");

        glow.className="glow "+name;

        bg.appendChild(glow);

    });

}


/*=========================
FADE OUT
=========================*/

const style=document.createElement("style");

style.innerHTML=`

@keyframes fadeOut{

from{

opacity:1;

}

to{

opacity:0;

transform:scale(1.05);

}

}

`;

document.head.appendChild(style);
/*==================================================
        HAPPY BIRTHDAY KITKAT ❤️
        PREMIUM SCRIPT.JS
        PART 2
        Cake • Microphone • Fireworks
==================================================*/


/*=========================
CAKE VARIABLES
=========================*/

const micButton = document.getElementById("micButton");

let candleBlown = false;

let audioContext = null;

let analyser = null;

let microphone = null;

let micStream = null;


/*=========================
START MICROPHONE
=========================*/

micButton.addEventListener("click", startListening);

async function startListening(){

    if(candleBlown) return;

    micButton.disabled = true;

    micButton.innerHTML = "🎤 Listening... Blow the Candle";

    try{

        micStream = await navigator.mediaDevices.getUserMedia({

            audio:true

        });

        audioContext = new(window.AudioContext||window.webkitAudioContext)();

        microphone = audioContext.createMediaStreamSource(micStream);

        analyser = audioContext.createAnalyser();

        analyser.fftSize = 512;

        analyser.smoothingTimeConstant = .82;

        microphone.connect(analyser);

        detectBlow();

    }

    catch(e){

        micButton.disabled=false;

        micButton.innerHTML="🎤 Microphone Blocked";

        alert("Please allow microphone permission.");

    }

}


/*=========================
DETECT BLOW
=========================*/

function detectBlow(){

    const data = new Uint8Array(analyser.frequencyBinCount);

    function listen(){

        if(candleBlown) return;

        analyser.getByteFrequencyData(data);

        let volume=0;

        for(let i=0;i<data.length;i++){

            volume+=data[i];

        }

        volume/=data.length;

        if(volume>42){

            blowOutCandle();

            return;

        }

        requestAnimationFrame(listen);

    }

    listen();

}


/*=========================
BLOW OUT CANDLE
=========================*/

function blowOutCandle(){

    candleBlown=true;

    flame.style.transition=".4s";

    flame.style.opacity="0";

    flame.style.transform="translateX(-50%) scale(.2)";

    smoke.style.display="block";

    smoke.style.animation="smokeRise 3s forwards";

    micButton.innerHTML="✨ Make A Wish";

    wishText.classList.add("show");

    wishText.innerHTML="💖 Close your eyes... Make a Wish...";

    stopMicrophone();

    createSmokeParticles();
    
setTimeout(() => {

    showPage("celebrationPage");

    const celebrationVideo = document.getElementById("celebrationVideo");

    if (celebrationVideo) {
        celebrationVideo.currentTime = 0;
        celebrationVideo.play().catch(() => {});
    }

    stopFireworks();

}, 3200);

}


/*=========================
STOP MICROPHONE
=========================*/

function stopMicrophone(){

    if(micStream){

        micStream.getTracks().forEach(track=>{

            track.stop();

        });

    }

}


/*=========================
SMOKE PARTICLES
=========================*/

function createSmokeParticles(){

    for(let i=0;i<18;i++){

        const s=document.createElement("div");

        s.style.position="absolute";

        s.style.width="12px";

        s.style.height="12px";

        s.style.borderRadius="50%";

        s.style.left=(190+Math.random()*35)+"px";

        s.style.top=(40+Math.random()*15)+"px";

        s.style.background="rgba(255,255,255,.7)";

        s.style.filter="blur(3px)";

        s.style.pointerEvents="none";

        s.style.transition="3s";

        document.getElementById("cakeArea").appendChild(s);

        requestAnimationFrame(()=>{

            s.style.transform=

            `translate(${Math.random()*80-40}px,-${120+Math.random()*80}px) scale(2.4)`;

            s.style.opacity="0";

        });

        setTimeout(()=>s.remove(),3200);

    }

}


/*==================================================
        FIREWORKS ENGINE
==================================================*/

const canvas=document.getElementById("fireworksCanvas");

const ctx=canvas.getContext("2d");

let fireworks = [];
let particles = [];

let fireworksRunning = false;
let fireworksInterval = null;

function resizeCanvas(){

    canvas.width=window.innerWidth;

    canvas.height=window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize",resizeCanvas);


/*=========================
FIREWORK CLASS
=========================*/

class Firework{

    constructor(){

        this.x=Math.random()*canvas.width;

        this.y=canvas.height;

        this.targetY=80+Math.random()*canvas.height*.45;

        this.speed=6+Math.random()*3;

        this.color=`hsl(${Math.random()*360},100%,65%)`;

    }

    update(){

        this.y-=this.speed;

        if(this.y<=this.targetY){

            explode(this.x,this.y,this.color);

            return false;

        }

        return true;

    }

    draw(){

        ctx.beginPath();

        ctx.arc(this.x,this.y,3,0,Math.PI*2);

        ctx.fillStyle=this.color;

        ctx.fill();

    }

}


/*=========================
EXPLOSION
=========================*/

function explode(x,y,color){

    for(let i=0;i<80;i++){

        particles.push({

            x,

            y,

            dx:(Math.random()-.5)*8,

            dy:(Math.random()-.5)*8,

            alpha:1,

            color,

            size:2+Math.random()*3

        });

    }

}


/*=========================
PARTICLE UPDATE
=========================*/

function updateParticles(){

    particles=particles.filter(p=>p.alpha>0);

    particles.forEach(p=>{

        p.x+=p.dx;

        p.y+=p.dy;

        p.dy+=.03;

        p.alpha-=.012;

    });

}


/*=========================
DRAW PARTICLES
=========================*/

function drawParticles(){

    particles.forEach(p=>{

        ctx.globalAlpha=p.alpha;

        ctx.beginPath();

        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

        ctx.fillStyle=p.color;

        ctx.fill();

    });

    ctx.globalAlpha=1;

}


/*=========================
ANIMATION LOOP
=========================*/
function animateFireworks(){

    if (fireworksRunning) return;

    fireworksRunning = true;

    function loop(){

        if (!fireworksRunning) return;

        ctx.clearRect(0,0,canvas.width,canvas.height);

        fireworks = fireworks.filter(f => f.update());

        fireworks.forEach(f => f.draw());

        updateParticles();

        drawParticles();

        requestAnimationFrame(loop);

    }

    loop();

}
function stopFireworks(){

    fireworksRunning = false;

    clearInterval(fireworksInterval);

    fireworks = [];

    particles = [];

    ctx.clearRect(0,0,canvas.width,canvas.height);

}
/*=========================
CONFETTI
=========================*/

function createConfetti(){

    const container=document.getElementById("confettiContainer");

    const colors=["red","blue","green","yellow","pink","purple"];

    for(let i=0;i<180;i++){

        const c=document.createElement("div");

        c.className="confetti "+colors[Math.floor(Math.random()*colors.length)];

        c.style.left=Math.random()*100+"%";

        c.style.animationDuration=(3+Math.random()*3)+"s";

        c.style.animationDelay=(Math.random()*2)+"s";

        container.appendChild(c)

        setTimeout(()=>c.remove(),6500);

    }

}


/*=========================
START CELEBRATION
=========================*/

function startCelebration(){



    createConfetti();


}


/*=========================
NEXT PAGE
=========================*/

/*==================================================
        HAPPY BIRTHDAY KITKAT ❤️
        PREMIUM SCRIPT.JS
        PART 3A
        Gallery • Letter • Photo Viewer
==================================================*/


/*=========================
GALLERY
=========================*/

const galleryButton=document.getElementById("galleryButton");
const letterButton=document.getElementById("letterButton");

if(galleryButton){

galleryButton.addEventListener("click",()=>{

    showPage("galleryPage");

    animateGallery();

});

}

if(letterButton){

letterButton.addEventListener("click",()=>{

    showPage("letterPage");

    startLetterTyping();

    animateFireworks();

fireworksInterval = setInterval(()=>{
    fireworks.push(new Firework());
},650);

});

}


/*=========================
GALLERY ANIMATION
=========================*/

function animateGallery(){

    const photos=document.querySelectorAll(".photo");

    photos.forEach((photo,index)=>{

        photo.style.opacity="0";

        photo.style.transform="translateY(80px) scale(.8)";

        setTimeout(()=>{

            photo.style.transition=".8s";

            photo.style.opacity="1";

            photo.style.transform="translateY(0) scale(1)";

        },index*180);

    });

}


/*=========================
PHOTO CLICK EFFECT
=========================*/

document.querySelectorAll(".photo").forEach(photo=>{

photo.addEventListener("click",()=>{

    photo.classList.toggle("zoom");

});

});


/*=========================
LETTER MESSAGE
=========================*/

const birthdayLetter=`Happy Birthday Dobi ❤️

Thank you for being one of the most
            beautiful parts of my life

Thoda dheet hu ,kitni baar block bhi hua 
and still i'm here and you are here as well
managing all this through with all highs and lows.

I hope this year you clear all your exams and 
We can go on a trip that's pending 
since from day 1.

Never stop smiling,
because your smile makes me happier the most
and its also look good on your face😝.

Happy Birthday once again🥳.
With lots of love,
Akarsh ❤️`;


/*=========================
TYPEWRITER EFFECT
=========================*/

let typingIndex=0;

function startLetterTyping(){

    typingIndex=0;

    const box=document.getElementById("letterText");

    box.innerHTML="";

    typeNextCharacter(box);

}

function typeNextCharacter(box){

    if(typingIndex>=birthdayLetter.length){

        return;

    }

    box.innerHTML+=birthdayLetter.charAt(typingIndex);

    typingIndex++;

    box.scrollTop=box.scrollHeight;

    setTimeout(()=>{

        typeNextCharacter(box);

    },35);

}


/*=========================
LETTER BUTTON
=========================*/

const giftButton=document.getElementById("giftButton");

if(giftButton){

    giftButton.addEventListener("click",()=>{

        stopFireworks();

        showPage("giftPage");

    });

}


/*=========================
SMALL HEART BURST
=========================*/

function createMiniHeartBurst(x,y){

    for(let i=0;i<15;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left=x+"px";

        heart.style.top=y+"px";

        heart.style.pointerEvents="none";

        heart.style.fontSize=(18+Math.random()*18)+"px";

        heart.style.transition="1.6s ease-out";

        document.body.appendChild(heart);

        requestAnimationFrame(()=>{

            heart.style.transform=

            `translate(${Math.random()*220-110}px,-${Math.random()*220}px)
             rotate(${Math.random()*360}deg)
             scale(.4)`;

            heart.style.opacity="0";

        });

        setTimeout(()=>{

            heart.remove();

        },1700);

    }

}


/*=========================
PHOTO HEART EFFECT
=========================*/

document.querySelectorAll(".photo").forEach(photo=>{

photo.addEventListener("click",(e)=>{

    createMiniHeartBurst(

        e.clientX,

        e.clientY

    );

});

});
/*==================================================
        HAPPY BIRTHDAY KITKAT ❤️
        PREMIUM SCRIPT.JS
        PART 3B
        Gift • Final Screen • Sparkles • Ending
==================================================*/


/*=========================
GIFT PAGE
=========================*/

const giftBox=document.getElementById("giftBox");

if(giftBox){

giftBox.addEventListener("click",openGift);

}

function openGift(){

    giftBox.style.pointerEvents="none";

    giftBox.style.transition=".9s";

    giftBox.style.transform="scale(1.25) rotate(15deg)";

    giftBox.style.filter="drop-shadow(0 0 40px hotpink)";

    createGiftSparkles();

    setTimeout(()=>{

        createHeartExplosion();

    },700);

    setTimeout(()=>{

        showPage("finalPage");

        startFinalScene();

    },1500);

}


/*=========================
HEART EXPLOSION
=========================*/

function createHeartExplosion(){

    for(let i=0;i<120;i++){

        const heart=document.createElement("div");

        heart.innerHTML=["❤️","💖","💕","💗"][Math.floor(Math.random()*4)];

        heart.style.position="fixed";

        heart.style.left=(window.innerWidth/2)+"px";

        heart.style.top=(window.innerHeight/2)+"px";

        heart.style.fontSize=(18+Math.random()*30)+"px";

        heart.style.pointerEvents="none";

        heart.style.transition="2s ease-out";

        document.body.appendChild(heart);

        requestAnimationFrame(()=>{

            const angle=Math.random()*Math.PI*2;

            const distance=150+Math.random()*350;

            heart.style.transform=`
                translate(
                    ${Math.cos(angle)*distance}px,
                    ${Math.sin(angle)*distance}px
                )
                rotate(${Math.random()*720}deg)
                scale(.3)
            `;

            heart.style.opacity="0";

        });

        setTimeout(()=>{

            heart.remove();

        },2200);

    }

}


/*=========================
GIFT SPARKLES
=========================*/

function createGiftSparkles(){

    for(let i=0;i<60;i++){

        const s=document.createElement("div");

        s.style.position="fixed";

        s.style.width="8px";

        s.style.height="8px";

        s.style.borderRadius="50%";

        s.style.background="white";

        s.style.left=(window.innerWidth/2)+"px";

        s.style.top=(window.innerHeight/2)+"px";

        s.style.pointerEvents="none";

        s.style.boxShadow="0 0 12px white";

        s.style.transition="1.5s";

        document.body.appendChild(s);

        requestAnimationFrame(()=>{

            s.style.transform=`
                translate(
                    ${Math.random()*500-250}px,
                    ${Math.random()*500-250}px
                )
                scale(0)
            `;

            s.style.opacity="0";

        });

        setTimeout(()=>{

            s.remove();

        },1700);

    }

}


/*=========================
FINAL SCENE
=========================*/

function startFinalScene(){

    animateFinalMessage();

    startFinalHearts();

    startSparkleRain();

}


/*=========================
FINAL CARD
=========================*/

function animateFinalMessage(){

    const card=document.querySelector(".finalCard");

    if(!card) return;

    card.style.opacity="0";

    card.style.transform="translateY(80px) scale(.9)";

    setTimeout(()=>{

        card.style.transition="1.4s";

        card.style.opacity="1";

        card.style.transform="translateY(0) scale(1)";

    },300);

}


/*=========================
FLOATING HEARTS
=========================*/

function startFinalHearts(){

    setInterval(()=>{

        const h=document.createElement("div");

        h.innerHTML=["❤️","💕","💖","💗"][Math.floor(Math.random()*4)];

        h.style.position="fixed";

        h.style.left=Math.random()*100+"vw";

        h.style.bottom="-50px";

        h.style.fontSize=(18+Math.random()*26)+"px";

        h.style.pointerEvents="none";

        h.style.transition="8s linear";

        document.body.appendChild(h);

        requestAnimationFrame(()=>{

            h.style.transform=`
                translateY(-120vh)
                rotate(${Math.random()*720}deg)
            `;

            h.style.opacity="0";

        });

        setTimeout(()=>{

            h.remove();

        },8000);

    },450);

}


/*=========================
SPARKLE RAIN
=========================*/

function startSparkleRain(){

    setInterval(()=>{

        const star=document.createElement("div");

        star.innerHTML="✨";

        star.style.position="fixed";

        star.style.left=Math.random()*100+"vw";

        star.style.top="-30px";

        star.style.fontSize=(10+Math.random()*20)+"px";

        star.style.pointerEvents="none";

        star.style.transition="6s linear";

        document.body.appendChild(star);

        requestAnimationFrame(()=>{

            star.style.transform=`
                translateY(120vh)
                rotate(${Math.random()*360}deg)
            `;

            star.style.opacity="0";

        });

        setTimeout(()=>{

            star.remove();

        },6000);

    },250);

}


/*=========================
FINAL MESSAGE GLOW
=========================*/

setInterval(()=>{

    const forever=document.querySelector(".forever");

    if(forever){

        forever.style.textShadow=
        `
        0 0 15px hotpink,
        0 0 35px deeppink,
        0 0 60px hotpink
        `;

        setTimeout(()=>{

            forever.style.textShadow="none";

        },900);

    }

},1800);


/*=========================
EASTER EGG
=========================*/

let taps=0;

const finalCard=document.querySelector(".finalCard");

if(finalCard){

finalCard.addEventListener("click",()=>{

    taps++;

    if(taps===7){

        taps=0;

        massiveHeartRain();

    }

});

}


function massiveHeartRain(){

    for(let i=0;i<250;i++){

        setTimeout(()=>{

            const h=document.createElement("div");

            h.innerHTML="💖";

            h.style.position="fixed";

            h.style.left=Math.random()*100+"vw";

            h.style.top="-50px";

            h.style.fontSize=(15+Math.random()*25)+"px";

            h.style.pointerEvents="none";

            h.style.transition="7s linear";

            document.body.appendChild(h);

            requestAnimationFrame(()=>{

                h.style.transform="translateY(120vh)";

                h.style.opacity="0";

            });

            setTimeout(()=>{

                h.remove();

            },7000);

        },i*20);

    }

}


/*=========================
ENDING MUSIC FADE
=========================*/

window.addEventListener("beforeunload",()=>{

    if(!music) return;

    let v=music.volume;

    const fade=setInterval(()=>{

        v-=0.05;

        if(v<=0){

            music.pause();

            clearInterval(fade);

        }

        music.volume=Math.max(v,0);

    },100);

});


console.log("❤️ Happy Birthday KitKat Website Loaded Successfully ❤️");