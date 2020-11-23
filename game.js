let anwer = document.getElementsByClassName("anwer");
let yes = document.getElementById("yes");
let no = document.getElementById("no");
yes.addEventListener("click", () => {
  alert("to cung thich cau");
});
no.addEventListener("mouseover", () =>{
   if (anwer[0].style.flexDirection == "row"){
       anwer[0].style.flexDirection = "row-reverse";
    }
     else{ 
       anwer[0].style.flexDirection = "row"
    }
});