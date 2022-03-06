const par1 = document.getElementById('par1');
const down1 = document.getElementById('down1');
const arrow1 = document.getElementById('arrow1');
let active1 = false;

const par2 = document.getElementById('par2');
const down2 = document.getElementById('down2');
const arrow2 = document.getElementById('arrow2');
let active2 = false;

const par3 = document.getElementById('par3');
const down3 = document.getElementById('down3');
const arrow3 = document.getElementById('arrow3');
let active3 = false;

const par4 = document.getElementById('par4');
const down4 = document.getElementById('down4');
const arrow4 = document.getElementById('arrow4');
let active4 = false;

const par5 = document.getElementById('par5');
const down5 = document.getElementById('down5');
const arrow5 = document.getElementById('arrow5');
let active5 = false;

par1.onclick = function(){
    if(!active1){
        par1.style.cssText= "color: hsl(238, 29%, 16%); font-weight: 700;";
        down1.style.cssText= "display: block";
        arrow1.style.cssText = "transform: rotate(180deg);"
        active1 = true;
    }
    else{
        par1.style.cssText= "color: hsl(237, 12%, 33%); font-weight: 400;";
        down1.style.cssText= "display: none"
        arrow1.style.cssText = "transform: rotate(0deg);"
        active1= false;
    }
    
}

par2.onclick = function(){
    if(!active2){
        par2.style.cssText= "color: hsl(238, 29%, 16%); font-weight: 700;";
        down2.style.cssText= "display: block";
        arrow2.style.cssText = "transform: rotate(180deg);"
        active2= true;
    }
    else{
        par2.style.cssText= "color: hsl(237, 12%, 33%); font-weight: 400;";
        down2.style.cssText= "display: none"
        arrow2.style.cssText = "transform: rotate(0deg);"
        active2= false;
    }
    
}

par3.onclick = function(){
    if(!active3){
        par3.style.cssText= "color: hsl(238, 29%, 16%); font-weight: 700;";
        down3.style.cssText= "display: block";
        arrow3.style.cssText = "transform: rotate(180deg);"
        active3= true;
    }
    else{
        par3.style.cssText= "color: hsl(237, 12%, 33%); font-weight: 400;";
        down3.style.cssText= "display: none"
        arrow3.style.cssText = "transform: rotate(0deg);"
        active3= false;
    }
    
}

par4.onclick = function(){
    if(!active4){
        par4.style.cssText= "color: hsl(238, 29%, 16%); font-weight: 700;";
        down4.style.cssText= "display: block";
        arrow4.style.cssText = "transform: rotate(180deg);"
        active4= true;
    }
    else{
        par4.style.cssText= "color: hsl(237, 12%, 33%); font-weight: 400;";
        down4.style.cssText= "display: none"
        arrow4.style.cssText = "transform: rotate(0deg);"
        active4= false;
    }
    
}

par5.onclick = function(){
    if(!active5){
        par5.style.cssText= "color: hsl(238, 29%, 16%); font-weight: 700;";
        down5.style.cssText= "display: block";
        arrow5.style.cssText = "transform: rotate(180deg);"
        active5= true;
    }
    else{
        par5.style.cssText= "color: hsl(237, 12%, 33%); font-weight: 400;";
        down5.style.cssText= "display: none"
        arrow5.style.cssText = "transform: rotate(0deg);"
        active5= false;
    }
    
}
