//Adafruit IO Config
let username = "XXXX";
let activeKey = "XXXX";

const IO = new AdafruitIO(username, activeKey);

let sensorLightLevel = 0;

IO.setLimit(1);

setInterval(function() {
    IO.getData("light", function(data) {
        sensorLightLevel = data.json[0].value;
        console.log(sensorLightLevel);
        document.getElementById("sensorLightLevel").innerText = sensorLightLevel;
    });
}, 5000);

let idealLevel = document.getElementById("gradValueDisplay").innerText;
document.getElementById("gradValueDisplay").addEventListener("input", function() {
    idealLevel = document.getElementById("gradValueDisplay").innerText;
    console.log("Ideal Light Level changed to: " + idealLevel);
})

let graduationValue = true; 

let graduationSwitch = document.querySelector("#graduationToggle");

graduationSwitch.addEventListener("change", function() {
    if (graduationSwitch.checked) {
        graduationValue = true; 
    }else {
        graduationValue = false;
    }
});

let ventana;
let curtain;

 let leftX = 0;
let rightX = 0;

async function setup(){
    createCanvas(800, 400);
    ventana = await loadImage('images/window.png');
    curtain = await loadImage('images/curtain.png');
}

function draw(){

    background("#F6EFDE");
    image(ventana, 0, 0, width, height);

   
   
    
     if(graduationValue == true){
         if(sensorLightLevel > idealLevel){
            leftX = 0;
            rightX = width/2;
        }else if(sensorLightLevel < idealLevel){
            leftX = -200;
            rightX = width - 200;
            
        }
    }

    image(curtain, leftX, 0, width/2, height);
    image(curtain, rightX, 0, width/2, height);
        
   


    
}