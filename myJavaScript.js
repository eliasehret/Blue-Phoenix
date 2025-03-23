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

var g = document.getElementById("Kontaktformular");


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
            alert("Formular erfolgreich übermittelt!");

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

//handy zurückbutton
window.addEventListener("popstate", function (event) {
    
    if(sideBarOpen)
    {
        openProbetrainingsAnmeldung();
    }

});
