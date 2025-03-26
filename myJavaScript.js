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

        document.getElementById("submit-window").classList.add("hide");

        sideBarOpen = true;
    }
}

document.getElementById("Kontaktformular").addEventListener("submit", async function(event){
    event.preventDefault();

    console.log("log");
    // Daten für den JSON-Body
    const data = {
        elternName: event.target.ElternName.value,
        kindName: event.target.KindName.value,

        email: event.target.email.value,
        telefonnummer: event.target.Telefonnummer.value,

        kurs: event.target.kurs.value
    };

    var url = "https://prod-26.germanywestcentral.logic.azure.com:443/workflows/7229a76a19154f9a9445cc81c13da92b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=-_EHtNJ8p7FrV802hBoB4gYMpAi9WhB0ub-TZLczayM";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if(response.ok) {
            document.getElementById("submit-window").classList.remove("hide");

            // Clear the form here
            this.reset();

            //location.reload();
        } else {
            const errorData = await response.json();
            alert("Fehler bei der Übermittlung: " + JSON.stringify(errorData));
        }
    } catch (error) {
        alert("Fehler bei der Übermittlung: " + error.message);
    }
});

function openQuestion(element){

    var dropdownContent = element.children[1];
    dropdownContent.classList.toggle("fragen_dropdown-content_open");

    //dropdown Arrow
    var dropdownFrage = element.children[0];
    var arrow_down = dropdownFrage.children[1];
    if(arrow_down.style.transform.includes("scaleY(-1)")) arrow_down.style.transform = "scaleY(1)";
    else arrow_down.style.transform = "scaleY(-1)";
}

//handy zurückbutton
window.addEventListener("popstate", function (event) {
    
    if(sideBarOpen)
    {
        openProbetrainingsAnmeldung();
    }

});
