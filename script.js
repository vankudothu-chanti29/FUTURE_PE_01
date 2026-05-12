// MOBILE MENU TOGGLE

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav");

if(menuBtn){
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}


// SMOOTH SCROLLING

document.querySelectorAll('nav a').forEach(link => {

  link.addEventListener('click', function(e) {

    e.preventDefault();

    const targetId = this.getAttribute('href');

    if(targetId !== "#"){

      const targetSection = document.querySelector(targetId);

      if(targetSection){

        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: "smooth"
        });

      }
    }

  });

});


// CONTACT FORM VALIDATION

const form = document.querySelector(".contact-form");

if(form){

  form.addEventListener("submit", function(e){

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let isValid = true;

    inputs.forEach(input => {

      if(input.value.trim() === ""){

        input.style.border = "1px solid red";
        isValid = false;

      } else {

        input.style.border = "1px solid #ccc";

      }

    });

    if(isValid){

      alert("Appointment Request Submitted Successfully!");

      form.reset();

    } else {

      alert("Please fill all fields.");

    }

  });

}


// BUTTON ANIMATION

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "scale(1.05)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "scale(1)";

  });

});


// STICKY HEADER SHADOW

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if(window.scrollY > 50){

    header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";

  } else {

    header.style.boxShadow = "none";

  }

});


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".card, .testimonial, .doctor-section, .contact-form");

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll(){

  const windowHeight = window.innerHeight;

  revealElements.forEach(element => {

    const elementTop = element.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){

      element.style.opacity = "1";
      element.style.transform = "translateY(0)";

    }

  });

}


// INITIAL STYLE FOR ANIMATION

revealElements.forEach(element => {

  element.style.opacity = "0";
  element.style.transform = "translateY(40px)";
  element.style.transition = "all 0.6s ease";

});

revealOnScroll();
