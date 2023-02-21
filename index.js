const showLinks = (id) => {
   var elem = document.getElementById(id);
   var ulchild = elem.nextElementSibling;
   //if(!elem) { 
   // alert("error: not found!");
   // } else {
      if (ulchild.style.display == "block") {
         ulchild.style.display = "none";
      } else {
        ulchild.style.display = "block";
      }
   //}
};

button.addEventListener("click", showLinks);