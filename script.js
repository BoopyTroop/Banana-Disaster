var water; var lightning; var sun; var darkness; var geo; var divine; var time;
var fire; var  spirit; var moon; var energy; var shadow; var cosmic;
var wind; var ice; var star; var light; var dragon; var space;
var earth; var blade; var plasma; var chi; var atmos; var aether;

var randomNumber;
var output;
var power;
var common = [];
var uncommon = [];
var rare = [];
var epic = [];
var legendary = [];
var mythic = [];
var myInterval;
var myTimeout;
var spinbtn;
var mHp = 100;
var mHpTxt;
var myDmg = 0;
var monster;
var monsterInterval;
var pos = 0;
var health;
var speed = 0;



function loadStuff() {

    health = document.getElementById("health");
    monster = document.getElementById("monster");
    mHpTxt = document.getElementById("mHp");
    output = document.getElementById("Output");
    spinbtn = document.getElementById("spinBtn");

    water = {power:50, mp:2, health:1000, rarity:"Common", color:"Grey", name:"Water"};
    fire = {power:75, mp:2, health:800, color:"Grey", rarity:"Common", name:"Fire"};
    wind = {power:35, mp:2, health:1200, color:"Grey", rarity:"Common", name:"Wind"};
    earth = {power:70, mp:2, health:900, color:"Grey", rarity:"Common", name:"Earth"};

    lightning = {power:170, mp:2.5, health:1100, color:"Green", rarity:"Uncommon", sub:fire,wind, name:"Lightning"};
    spirit = {power:150, mp:2.5, health:1300, color:"Green", rarity:"Uncommon", sub:wind,water, name:"Spirit"};
    ice = {power:140, mp:2.5, health:1500, color:"Green", rarity:"Uncommon", sub:water,wind , name:"Ice"};
    blade = {power:180, mp:2.5, health:1000, color:"Green", rarity:"Uncommon", sub:earth,fire , name:"Blade"};

    moon = {power:220, mp:3, health:1500, color:"blue", rarity:"Rare", sub:ice,spirit, name:"Moon"};
    star = {power:250, mp:3, health:1300, color:"blue", rarity:"Rare", sub:spirit,lightning,blade,ice, name:"Star"};
    sun = {power:210, mp:3, health:1750, color:"blue", rarity:"Rare", sub:blade,lightning, name:"Sun"};
    plasma = {power:275, mp:3, health:1150, color:"blue", rarity:"Rare", sub:lightning,blade, name:"Plasma"};

    darkness = {power:300, mp:3.5, health:1500, color:"Purple", rarity:"Epic", sub:moon, name:"Darkness"};
    energy = {power:320, mp:3.5, health:1350, color:"Purple", rarity:"Epic", sub:plasma,sun,star, name:"Energy"};
    light = {power:290, mp:3.5, health:1750, color:"Purple", rarity:"Epic", sub:sun,plasma, name:"Light"};
    chi = {power:280, mp:3.5, health:2000, color:"Purple", rarity:"Epic", sub:star,moon, name:"Chi"};

    geo = {power:375, mp:4, health:2500, color:"Orange", rarity:"Legendary", sub:energy, name:"Geo"};
    shadow = {power:400, mp:4, health:2300, color:"Orange", rarity:"Legendary", sub:darkness, name:"Shadow"};
    dragon = {power:425, mp:4, health:2000, color:"Orange", rarity:"Legendary", sub:light, name:"Dragon"};
    atmos = {power:350, mp:4, health:3000, color:"Orange", rarity:"Legendary", sub:chi, name:"Atmos"};

    divine = {power:500, mp:4.5, health:3500, color:"Black", rarity:"Mythic", sub:atmos,geo, name:"Divine"};
    cosmic = {power:450, mp:4.5, health:4000, color:"Black", rarity:"Mythic", sub:shadow,atmos, name:"Cosmic"};
    space = {power:525, mp:4.5, health:3250, color:"Black", rarity:"Mythic", sub:shadow,atmos,dragon, name:"Space"};
    aether = {power:550, mp:4.5, health:3150, color:"Black", rarity:"Mythic", sub:geo,dragon, name:"Aether"};
    time = {power:600, mp:4.7, health:3750, color:"Red", rarity:"Mythic", sub:atmos, name:"Time"};

    common = [water,fire,wind,earth];
    uncommon = [lightning,spirit,ice,blade];
    rare = [moon,star,sun,plasma];
    epic = [darkness,energy,light,chi];
    legendary = [geo,shadow,dragon,atmos];
    mythic = [divine,cosmic,space,aether,time];

    zombieMove();
}

function spin() {
    spinbtn.disabled = true;
    setTimeout(stopSpin, 2000);
    myInterval = setInterval(chooseClass, 35);
}

function stopSpin() {
    clearInterval(myInterval)
    spinbtn.disabled = false;
}

function chooseClass() {
    randomNumber = Math.floor(Math.random() * 100);

    if (randomNumber >= 50) { //50% Chance
        power = common[Math.floor(Math.random()*common.length)];
    }
    else if (randomNumber > 30) { //20% Chance
        power = uncommon[Math.floor(Math.random()*uncommon.length)];
    }
    else if (randomNumber > 15) { //15% Chance
        power = rare[Math.floor(Math.random()*rare.length)];
    }
    else if (randomNumber > 5) { //10% Chance
        power = epic[Math.floor(Math.random()*epic.length)];
    }
    else if (randomNumber >= 2) { //4% Chance
        power = legendary[Math.floor(Math.random()*legendary.length)];
    }
    else if (randomNumber == 1) { //1% Chance
        power = mythic[Math.floor(Math.random()*mythic.length)];
    }
    else {
        chooseClass();
    }
    console.log(randomNumber + " " + power.name + " " + power.color + " (" + power.rarity + ")");
    output.style.color = power.color;
    output.innerHTML = power.name + " (" + power.rarity + ")";
}

function attack() {
    randomNumber = Math.floor(Math.random() * 99);
    myDmg = randomNumber;
    mHp -= myDmg;
    health.value = mHp; //Or whatever you want to do with it.
    mHpTxt.innerHTML = mHp;
}

function zombieMove() {
    monsterInterval = setInterval(moveZombie, 100);
}

function moveZombie() {
    if (pos >= 1020 || mHp <= 0) {
        //clearInterval(moveZombie);
        pos = 0;
        speed = 0;
        mHp = 100;
        health.value = mHp;
        mHpTxt.innerHTML = "Monster Health: " + mHp + "<br>Monster Speed: " + speed;
    } 
    else {
        pos += speed;
        speed += 0.5;
        monster.style.left = pos + 'px';
        health.value = mHp;
        mHpTxt.innerHTML = "Monster Health: " + mHp + "<br>Monster Speed: " + speed;
    }
}