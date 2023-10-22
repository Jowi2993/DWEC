function Persona(nom, cognom, edat) {
    this.nom = nom;
    this.cognom = cognom;
    this.edat = edat;
}

function RecopilarInfo() {
    var nom = prompt("Introdueix el teu nom:");
    var cognom = prompt("Introdueix el teu cognom:");
    var edat = prompt("Introdueix la teva edat:");

    persona = new Persona(nom, cognom, edat);
}

function MostrarInfo() {
    var infoContainer = document.getElementById("infoContainer");
   if (persona) {
            infoContainer.innerHTML = " Aquí tens la teva informació: <li>Nom: " + persona.nom + "<li>Cognom: " + persona.cognom + "<li>Edat: " + usuario.edat;
        } else {
            infoContainer.innerHTML = "No s'ha guardat la informació.";
        }
    }
    var botonGuardar = document.getElementById("botonRecopilar");
    var botonMostrar = document.getElementById("botonMostrar");

    btnGuardar.addEventListener("click", obtenerInformacion);
    btnMostrar.addEventListener("click", mostrarInformacion);
