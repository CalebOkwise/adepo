window.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname === '/index.html') {
    const body = document.body;
    const descriptionHeader = document.querySelector('.description-header');
    const descriptionText = document.querySelector('.description-text');
    const descriptionColumnText = document.getElementById('description-column-text');
    const menuCircle = document.getElementById('menu-circle');
    const menuCircle1 = document.getElementById('menu-circle1');
    const menuCircle2 = document.getElementById('menu-circle2');
    const pagMarker1 = document.getElementById('pag1').querySelector('.pag-marker');
    const pagMarker2 = document.getElementById('pag2').querySelector('.pag-marker');
    const pagMarker3 = document.getElementById('pag3').querySelector('.pag-marker');
    const mobileText = document.getElementById('description-column-text');
    const mobileButton = document.getElementById('mobile-button');
    const borderColor = document.getElementById("borderColor");
    const borderColor1 = document.getElementById("borderColor1");
    const borderColo2 = document.getElementById("borderColor2");

    // Set the background image
    body.style.backgroundImage = 'url("images/background-img.png")';

    // Set default colors
    pagMarker1.style.backgroundColor = 'transparent';
    pagMarker2.style.backgroundColor = 'transparent';
    pagMarker3.style.backgroundColor = 'transparent';

    //
    const menuCurvedLine1 = document.querySelector('.menu-curved-line');
    const menuCurvedLine2 = document.querySelector('.menu-curved-line1');
    const menuCurvedLine3 = document.querySelector('.menu-curved-line2');

    // Add transitions
    pagMarker1.style.transition = 'background-color 0.3s ease';
    pagMarker2.style.transition = 'background-color 0.3s ease';
    pagMarker3.style.transition = 'background-color 0.3s ease';

    function resetBackgroundColors() {
      const pagMarkers = [pagMarker1, pagMarker2, pagMarker3];
      pagMarkers.forEach((marker) => {
        marker.style.backgroundColor = 'transparent';
      });
    }

    function changeBackgroundAndContent(color, header, text, imageUrl, pagMarker) {
      setTimeout(() => {
        body.style.backgroundImage = `url("${imageUrl}")`;
      }, 300);
    
      body.style.transition = 'background-image 0.3s ease'; // Add transition for the background image
    
      resetBackgroundColors(); // Reset the background colors of all pagMarkers
      pagMarker.style.backgroundColor = color; // Update the background color for the relevant pagMarker
      
      descriptionHeader.textContent = header;
      descriptionText.textContent = text;
    }

    function handleClick(event, link) {
      if (window.innerWidth <= 768) {
        event.preventDefault();
        mobileText.style.display = 'flex';
        mobileButton.addEventListener('click', function() {
          window.location.href = link;
        });
      }
    }

    // Add event listeners to the menu-circle elements
    menuCircle.addEventListener('mouseover', function() {
      console.log('Mouseover - menuCircle');
      pagMarker1.style.backgroundColor = 'transparent';
      pagMarker3.style.backgroundColor = 'transparent';
      pagMarker2.style.backgroundColor = 'transparent';
      descriptionColumnText.className = 'description-column-text';
      changeBackgroundAndContent(
        '#774E26',
        'Oil and Gas',
        'Providing services such as constructing rigs, designing pipes and pipelines, carrying out technical, construction works and supplies among others.',
        'images/oil-and-gas.png',
        pagMarker1
      );
      menuCurvedLine2.style.borderTopColor = 'white';
      menuCurvedLine3.style.borderTopColor = 'white';

      // Change the border color of menu curved line 1
      menuCurvedLine1.style.borderTopColor = '#774E26';
      
      //change the border color of the circle
      borderColor.style.border = "3px solid #774E26";
      borderColor1.style.border = "none";
      borderColo2.style.border = "none";
    });

    menuCircle1.addEventListener('mouseover', function() {
      console.log('Mouseover - menuCircle1');
      descriptionColumnText.className = 'description-column-text';
      resetBackgroundColors();
      changeBackgroundAndContent(
        '#4B76E5',
        'Marine Logistics',
        'We ensure the process of planning, implementing and managing the movement of goods and information involved in the ocean carriage.',
        'images/background-img.png',
        pagMarker2
      );
      menuCurvedLine1.style.borderTopColor = 'white';
      menuCurvedLine3.style.borderTopColor = 'white';

      // Change the border color of menu curved line 1
      menuCurvedLine2.style.borderTopColor = '#4B76E5';

      //change the border color of the circle
      borderColor.style.border = "none";
      borderColor1.style.border = "3px solid #4B76E5";
      borderColo2.style.border = "none";
    });

    menuCircle2.addEventListener('mouseover', function() {
      console.log('Mouseover - menuCircle2');
        pagMarker1.style.backgroundColor = 'transparent';
        pagMarker3.style.backgroundColor = 'transparent';
        pagMarker2.style.backgroundColor = 'transparent';
        descriptionColumnText.className = 'description-column-text';
        resetBackgroundColors();
        changeBackgroundAndContent(
        '#FF6D00',
        'Renewable Energy',
        'We find ways to generate energy from (theoretically) unlimited natural resources.',
        'images/renewable-energy.png',
        pagMarker3
      );
      menuCurvedLine1.style.borderTopColor = 'white';
      menuCurvedLine2.style.borderTopColor = 'white';

      // Change the border color of menu curved line 3
      menuCurvedLine3.style.borderTopColor = '#FF6D00';

      //change the border color of the circle
      borderColor.style.border = "none";
      borderColor1.style.border = "none";
      borderColo2.style.border = "3px solid #FF6D00";
    });

    // Click event listeners for mobile devices
    menuCircle.addEventListener('click', function(event) {
      handleClick(event, 'oil-and-gas.html');
    });

    menuCircle1.addEventListener('click', function(event) {
      handleClick(event, 'logistics.html');
    });

    menuCircle2.addEventListener('click', function(event) {
      handleClick(event, 'renewable-energy.html');
    });
  }
});


$(document).ready(function() {
  // breake line after screen resize
  $(window).on('resize', function () {
    console.log('hhhhh');
    var maxWidth = window.matchMedia("(max-width: 50em)");
    if (maxWidth.matches) {
      var linebreak = $('#linebreak');
      linebreak.html(linebreak.text().replace('ease on', 'ease on\n'));
      console.log('im working');
    } else {
      var linebreak = $('#linebreak');
      console.log("i'm also working");
      linebreak.html(linebreak.text().replace('\nease on', ' ease on'));
    }
  });
});


const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

const iconClose = document.querySelector(".icon-close");

iconClose.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? iconClose.setAttribute("aria-expanded", "false")
    : iconClose.setAttribute("aria-expanded", "true");
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.style.backgroundImage = ""; // Remove the background image
});


console.log("hey there");

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".select > .selected");

  selected.innerText = "Services";

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');

    caret.classList.toggle("caret-rotate");
    menu.classList.toggle('menu-open');
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText; 
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");

      options.forEach (option=> {
        option.classList.remove("active");
      });

      option.classList.add('active');
    })
  })

  document.addEventListener('click', event => {
    const isClickedInsideDropdown = dropdown.contains(event.target);
    if (!isClickedInsideDropdown) {
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
    }
  });
});

const checkbox = document.querySelector('.terms-and-conditions-checkbox');
const submitButton = document.getElementById('submit-button');
const errorMessage = document.querySelector('.error-message');

// submitButton.addEventListener('click', (event) => {
//   if (!checkbox.classList.contains('checked')) {
//     event.preventDefault();
//     errorMessage.style.display = 'block';
//   } else {
//     errorMessage.style.display = 'none';
//   }
// });

// checkbox.addEventListener('click', () => {
//   checkbox.classList.toggle('checked');
//   submitButton.classList.toggle('white', checkbox.classList.contains('checked'));
//   errorMessage.style.display = 'none';
// });

$(document).ready(function() {
  $("#open-popup").click(function(event) {
    event.preventDefault();

    // Get form data
    var formData = {
      email: $("#email").val(),
      numberOfTons: $("#number-of-tons").val(),
      pickUpCoordinate: $("#pick-up-coordinate").val()
    };

    // Simulate form submission delay
    setTimeout(function() {
      // Show pop-up
      $("body").addClass("active-popup");
      $(".page-container").addClass("active-popup");
    }, 1000); // Adjust the delay time as needed
  });

  $(".close-btn, .page-container").click(function(event) {
    if (
      $(event.target).is(".close-btn") ||
      $(event.target).is(".page-container")
    ) {
      // Hide pop-up
      $("body").removeClass("active-popup");
      $(".page-container").removeClass("active-popup");
    }
  });
});