function Persona(nom, cognom, edat) {
    this.nom = nom;
    this.cognom = cognom;
    this.edat = edat;
}

Persona.prototype.mostrarInfo = function () {
    return "Nom: " + this.nom + "<br>Cognom: " + this.cognom + "<br>Edat: " + this.edat;
};

function RecopilarInfo() {
    var nom = prompt("Introdueix el teu nom:");
    var cognom = prompt("Introdueix el teu cognom:");
    var edat = prompt("Introdueix la teva edat:");

    persona = new Persona(nom, cognom, edat);
}

function MostrarInfo() {
    var infoContainer = document.getElementById("infoContainer");
    infoContainer.innerHTML = persona.mostrarInfo();
}

document.getElementById("botonRecopilar").addEventListener("click", RecopilarInfo);
document.getElementById("botonMostrar").addEventListener("click", MostrarInfo);

