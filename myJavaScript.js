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

    var url = "";

    alert("fetch");
    return;

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
            document.getElementById("Kontaktformular").reset();

            location.reload();
        } else {
            const errorData = await response.json();
            alert("Fehler bei der Übermittlung: " + JSON.stringify(errorData));
        }
    } catch (error) {
        alert("Fehler bei der Übermittlung: " + error.message);
    }
});

