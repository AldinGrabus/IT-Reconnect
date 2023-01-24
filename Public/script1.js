
/*Kod za prikazivanje dodatnih informacija o školama */

/*Dugmadi*/
const dugmeTravnik = document.getElementById('dugmeTravnik');
const dugmeTravnik1 = document.getElementById('dugmeTravnik1');
const dugmeVakuf = document.getElementById('dugmeVakuf');

const zatvoriTravnik = document.getElementById('zatvoriTravnik');
const zatvoriTravnik1 = document.getElementById('zatvoriTravnik1');
const zatvoriVakuf = document.getElementById('zatvoriVakuf');

/*Div tagovi*/
const viseTravnik = document.getElementById('viseTravnik');
const viseTravnik1 = document.getElementById('viseTravnik1');
const viseVakuf = document.getElementById('viseVakuf');


const DodajProf = document.getElementById('Dodaj-Raspored-Profesor');
const DodajKab = document.getElementById('Dodaj-Raspored-Profesor');

/*Prikazi*/

dugmeTravnik.onclick = function () {viseTravnik.style.display = "block";};
dugmeTravnik1.onclick = function () {viseTravnik1.style.display = "block";};
dugmeVakuf.onclick = function () {viseVakuf.style.display = "block";};

zatvoriTravnik.onclick = function () {viseTravnik.style.display = "none";};
zatvoriTravnik1.onclick = function () {viseTravnik1.style.display = "none";};
zatvoriVakuf.onclick = function () {viseVakuf.style.display = "none";};


/*Dodavanje profesora konstante*/ 
const profID = document.querySelector("#profID");
const profIme = document.querySelector("#profIme");
const profNorma = document.querySelector("#profNorma");
const dodajProf = document.querySelector("#dodajProf");

/*Dodavanje profesora*/ 
dodajProf.addEventListener("click", e=>{
   if(profID.value!= "" && profIme.value!= "" && profNorma.value!= "" ){
    console.log("gas");
    document.querySelector("#sekcija3 .Uneseno").innerHTML += `<div style ="margin-top: 10px;" class = "dodani-profesori">
    <h1 style = "margin-top: 10px;">ID:  ${profID.value}</h1>
    <div class = "crta"></div>
    <h1 style = "margin-top: 10px;">Ime: ${profIme.value}</h1>
    <div class = "crta"></div>
    <h1 style = "margin-top: 10px;">Broj časova u normi: ${profNorma.value}</h1>
    <div class = "crta"></div>
    <button class = "Ukloni">Ukloni</button>
    </div>`;
    profID.value = "";
    profIme.value = "";
    profNorma.value = "";
   }
   else alert("popunite sva potrebna polja");
});

/*Dodavanje kabineta konstante*/ 
const kabinetIme = document.querySelector("#kabinetIme");
const dodajKab = document.querySelector("#dodajKab");
let nekiID = 7;

/*Dodavanje kabineta*/ 
dodajKab.addEventListener("click", e=>{
   if(kabinetIme.value!= ""  && nekiID%2==1 ){
    document.querySelector("#sekcija4 .lijeviDiv").innerHTML += `<div class = "dodani-kabineti">
    <h2 style = "margin-top: 10px;">ID: ${nekiID}</h2>
    <div class = "crta"></div>
    <h2 style = "margin-top: 10px;">Naziv: ${kabinetIme.value}</h2>
    <div class = "crta"></div>
    <button class = "Ukloni">Ukloni</button>
    </div>`;
    kabinetIme.value = "";
    nekiID++;
   }
   else if(kabinetIme.value!= "" && nekiID%2==0 ){
    document.querySelector("#sekcija4 .desniDiv").innerHTML += `<div class = "dodani-kabineti" style="margin-left: 20px;">
    <h2 style = "margin-top: 10px;">ID: ${nekiID}</h2>
    <div class = "crta"></div>
    <h2 style = "margin-top: 10px;">Naziv: ${kabinetIme.value}</h2>
    <div class = "crta"></div>
    <button class = "Ukloni">Ukloni</button>
  </div>`;
    kabinetIme.value = "";
    nekiID++;
   }
   else alert("popunite sva potrebna polja");
});


/* Ukloni button*/
document.querySelectorAll(".Ukloni").forEach(e=>{
e.addEventListener("click", ()=>{
    console.log(e);
    e.parentElement.remove();
})
});