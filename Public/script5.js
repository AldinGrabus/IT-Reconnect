class Raspored {
  constructor(profesor, predmet, brojCasova, kabinet){
      this.profesor = profesor;
      this.predmet = predmet;
      this.brojCasova = brojCasova;
      this.kabinet = kabinet;
  }
};
let lista = [
];
let dani = [
  ["", "", "", "", "","",""],
  ["", "", "", "", "","",""],
  ["", "", "", "", "","",""],
  ["", "", "", "", "","",""],
  ["", "", "", "", "","",""]
];
let profInput = document.querySelector(".prof");
let predmetInput = document.querySelector(".predmet");
let brojInput = document.querySelector(".broj");
let kabinet = document.querySelector(".kabinet");
document.addEventListener("keydown", e=>{
  if(e.key==="Enter") {
      lista.push(new Raspored(profInput.value, predmetInput.value, brojInput.value, kabinet.value));
      document.querySelector(".display").innerHTML += `<div class="singleDisplay">
       <h3>${profInput.value}</h3> 
       <h3>${predmetInput.value}</h3>
       <h3>${brojInput.value}</h3>
       <h3>${kabinet.value}</h3>
       </div>`;
      profInput.value = "";
      predmetInput.value = "";
      brojInput.value = "";
      kabinet.value = "";
  }
});
function kraj(){
  let kombinacije = ["00","01","02","03","04","05","06","10","11","12","13","14","15","16", "20","21","22","23","24","25","26","30","31","32","33","34","35", "36","40","41","42","43","44","45","46"]; 
  lista.forEach(e=>{
      let uneseno = 0;
      if(e.brojCasova>2){
          let split1 = e.brojCasova-2;
          while(uneseno<split1){
              let tacanCas = Math.floor(Math.random() * kombinacije.length);
              let dan = parseInt(kombinacije[tacanCas].charAt(0));
              let cas = parseInt(kombinacije[tacanCas].charAt(1));
              if(dani[dan][cas]==""){
              dani[dan][cas] = e.profesor;
              kombinacije.splice(tacanCas, 1);
              uneseno++;
          }
          }
          uneseno=0;
          
          let split2 = 2;
          while(uneseno<split2){
              let tacanCas = Math.floor(Math.random() * kombinacije.length);
              let dan = parseInt(kombinacije[tacanCas].charAt(0));
              let cas = parseInt(kombinacije[tacanCas].charAt(1));
              console.log(dani[dan][cas]);
              if(dani[dan][cas]==""){dani[dan][cas] = e.profesor;
                  kombinacije.splice(tacanCas, 1);
                  uneseno++;}
          }
              uneseno=0;
      }
      else if (e.brojCasova==2){
          while(uneseno != e.brojCasova){
              let tacanCas = Math.floor(Math.random() * kombinacije.length);
              let dan = parseInt(kombinacije[tacanCas].charAt(0));
              let cas = parseInt(kombinacije[tacanCas].charAt(1));
              if(dani[dan][cas]==""){dani[dan][cas] = e.profesor;
                  kombinacije.splice(tacanCas, 1);
                  uneseno++;}
                  }
              uneseno=0;
      }
      else{
          let kraj = false;
          for(let i=0;i<5;i++){
              for(let j = 0;j<7;j++){
                  if(dani[i][j] === ""){
                      dani[i][j] = e.profesor;
                      let index = kombinacije.indexOf(parseInt(i+j));
                      kombinacije.splice(index, 1);
                      kraj = true;
                      if(kraj == true) break;
                  }
              }
              if(kraj == true) break;
          }
      };
  });
  console.log(dani);
}