

// Accordian Feature

const accordianTitles = document.querySelectorAll(".accordian-title");

accordianTitles.forEach((accordianTitle) => {
   accordianTitle.addEventListener("click", () => {
     if (accordianTitle.classList.contains("is-open")) {
       accordianTitle.classList.remove("is-open");
     } else { 
       const accordianTitlesWithIsOpen = document.querySelectorAll(".is-open")
       accordianTitlesWithIsOpen.forEach((accordianTitleWithIsOpen) => {
         accordianTitleWithIsOpen.classList.remove("is-open");
       });
       
       accordianTitle.classList.add("is-open");
     }
   })
})


// function search() {
  
  var searchButton = document.querySelector(".search"); 
  
  searchButton.addEventListener("click", () => {

    let userLocation = document.querySelector('#location-select').value;

    if (userLocation == "") {
      document.querySelectorAll('.property[data-location]').forEach((property) => {

        property.style.display = "";
        
      });

      return 
    }

    document.querySelectorAll('.property').forEach((property) => {
      property.style.display = "none";
    });


    document.querySelectorAll('.property[data-location="' + userLocation + '"]').forEach((property) => {

      property.style.display = "";
    });
  })



  // Burger Menu

  burger = document.querySelector('.burger');
  nav = document.querySelector('.gn');

  burger.addEventListener('click', function () {
    nav.classList.toggle('gn-active');
    burger.classList.toggle('burger-active');
  })
  