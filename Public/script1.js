const btn = document.querySelector("#btn")


function getInputValue(e) { 
     e.preventDefault()
     let input1 = document.getElementById("input1");
     let input2 = document.getElementById("input2");
     console.log("Username: " + input1.value)
     console.log("Password: " + input2.value)
     input1.value = ""
     input2.value = ""
   }
btn.addEventListener("click",getInputValue)