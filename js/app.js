// Language Changer

const langChanger = () => {
  const esSelector = document.querySelector(".es-lang-selector");
  const enSelector = document.querySelector(".en-lang-selector");
  const esElements = document.querySelectorAll(".lang-es");
  const enElements = document.querySelectorAll(".lang-en");
  // Change Language handler
  enSelector.addEventListener("click", () => {
    esElements.forEach( el => el.classList.add("hidden"));
    enElements.forEach( el => el.classList.remove("hidden"));
  });
  esSelector.addEventListener("click", () => {
    enElements.forEach( el => el.classList.add("hidden"));
    esElements.forEach( el => el.classList.remove("hidden"));
  });
}

// Responsive Menu

const responsiveMenu = () => {
  const bars = document.querySelector(".nav__bars");
  const barIcon = document.querySelector(".fa-bars");
  const closeIcon = document.querySelector(".fa-times");
  const navLinks = document.querySelector(".nav__links");
  const navLogo = document.querySelector(".nav__logo");
  const navItems = document.querySelectorAll(".nav__links-item")
  // Menu open handler
  bars.addEventListener("click", () => {
    if(navLinks.classList.contains("nav__links-active")) {
      navLinks.classList.remove("nav__links-active");
      navLogo.classList.add("nav__box-shadow");
      barIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    } else {
      navLinks.classList.add("nav__links-active");
      navLogo.classList.remove("nav__box-shadow");
      barIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    }
  });
  // Close menu when click a link
  for ( let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", () => {
      if(navLinks.classList.contains("nav__links-active")) {
        navLinks.classList.remove("nav__links-active");
        navLogo.classList.add("nav__box-shadow");
        barIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      }
    });
  };
};

// Proyects Slider

let slideIndex = 1;
const nextSlide = (n) => {
  slideIndex += n;
  console.log(slideIndex);
  displaySlide(slideIndex);
};
const displaySlide = (n) => {
  const slides = document.querySelectorAll('.proyect-card');
  slideIndex > slides.length ? slideIndex = 1 : slideIndex;
  for ( let i = 0; i < slides.length ; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
};
displaySlide(slideIndex);

// Particles

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.2,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 50
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

// Execute the scripts

langChanger();
responsiveMenu();