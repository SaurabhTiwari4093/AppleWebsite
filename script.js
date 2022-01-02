document.querySelector("#mac_pro").onclick=function(){
  display_MacPro();
};
function display_MacPro(){
    document.querySelector(".MacAir").style.display="none";
    document.querySelector(".iMacPro").style.display="none";
    document.querySelector(".MacPro").style.display="block";
}

document.querySelector("#imac_pro").onclick=function(){
  display_iMacPro();
};
function display_iMacPro(){
    document.querySelector(".MacAir").style.display="none";
    document.querySelector(".MacPro").style.display="none";
    document.querySelector(".iMacPro").style.display="block";
}

document.querySelector("#mac_air").onclick=function(){
  display_MacAir();
};
function display_MacAir(){
    document.querySelector(".MacPro").style.display="none";
    document.querySelector(".iMacPro").style.display="none";
    document.querySelector(".MacAir").style.display="block";
}
