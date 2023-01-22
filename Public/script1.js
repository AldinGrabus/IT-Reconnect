
/*Kod za prikazivanje dodatnih informacija o školama */

const dugmeTravnik = document.getElementById('dugmeTravnik');
const viseTravnik = document.getElementById('viseTravnik');


dugmeTravnik.onclick = function () {
  if (viseTravnik.style.display !== "block") {
    viseTravnik.style.display = "block";
  } else {
    viseTravnik.style.display = "none";
  }
};
