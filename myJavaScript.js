function openHamburger(){
    document.getElementById("nav-menu").classList.toggle("open");
}

var sideBarOpen = false;

function openProbetrainingsAnmeldung(){

    const display = document.getElementById("Probetrainingsanmeldung");
    const coverImage = document.getElementById("CoverImage");
    
    if(sideBarOpen) {
        display.classList.add("sideBarClosing");
        display.classList.remove("sideBarOpening");
        // display.style.animation = "fadeOut .5s ease-out forwards";
        //coverImage.style.animation = "fadeOutCoverImage .9s ease-out forwards";
        coverImage.style.visibility = "hidden";

        sideBarOpen = false;
    }
    else {
        display.classList.add("sideBarOpening");
        display.classList.remove("sideBarClosing");
        // display.style.animation = "fadeIn .5s ease-out forwards";
        //coverImage.style.animation = "fadeInCoverImage .5s ease-out forwards";
        coverImage.style.visibility = "visible";

        sideBarOpen = true;
    }
}