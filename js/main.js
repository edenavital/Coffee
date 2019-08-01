//Pre-loader
let loader;
function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loader.style.opacity = opacity;
    window.setTimeout(function() {
      loadNow(opacity - 0.1);
    }, 100);
  }
}

function displayContent() {
  loader.style.display = "none";
  loader.style.opacity = 0;
  document.getElementById("content").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
  loader = document.getElementById("loader");
  loadNow(1);
});

//Reuseable functions:
//Reuseable function - Disabling all the inputs after clicking on Submit
function disableInputs(inputs) {
  inputs.forEach(input => {
    input.disabled = true;
    input.style.animation = "elementDisappearance 1s 1 forwards";
    input.style.pointerEvents = "none";
  });
}

//Reuseable function - Apply "after subscribe" properties / changes
function subFunc(title, sentence) {
  //hide content
  title.style.animation = "fadeOut 1s 1 forwards";
  sentence.style.animation = "fadeOut 1s 1 forwards";

  //Make changes, and fade in the content
  setTimeout(function() {
    title.style.color = "green";

    if (title.textContent === "Join Our Newsletter") {
      title.innerHTML = "You have successfully subscribed!";
      title.style.position = "relative";
      title.style.top = "165px";
      setTimeout(function() {
        modalContent.style.height = "74px";
      }, 1000);
    } else {
      title.innerHTML = "The message has been sent!";
    }

    title.style.animation = "fadeIn 1s 1 forwards";
    sentence.style.visibility = "hidden";
  }, 1000);
}

/*============================================================================================================================================================*/

//Modal pop up functionality
const modal = document.querySelector("#bg-modal");
const modalContent = document.querySelector("#modal-window");
document.querySelector("#subscribe-btn").addEventListener("click", function(e) {
  e.preventDefault();

  modal.style.animation = "fadeIn 1s 1 forwards";
  modal.style.display = "flex";
  modalContent.style.animation = "elementEntrance 1s 1 forwards";
});

document.querySelector("#close-btn").addEventListener("click", function() {
  modal.style.animation = "fadeOut 1s 1 forwards";
  modalContent.style.animation = "elementDisappearanceModal 1s 1 forwards";
});

//Pop up - Subscribe Form functionality
//Using an input tag and not a button tag because the type=submit validates the Name, Email inputs automatically without js)

const subscribeInputs = document.querySelectorAll("#subscribe-form input");
const submitBtn = document.querySelector("#submit-btn");

function submitSubscribe() {
  disableInputs(subscribeInputs);
  modalContent.querySelector("img").style.animation =
    "elementDisappearance 1s 1 forwards";

  //Getting the current title & sentence
  const title = document.querySelector("#text-before-submit h2");
  const sentence = document.querySelector("#text-before-submit p");
  //Functionality once the user submit the form
  subFunc(title, sentence);

  setTimeout(function() {
    modalContent.style.animation = "contactScale 1s 1 forwards";
  }, 1000);
}

//Contact Page
const contactForm = document.querySelector("#content-contact");
const contactInputs = document.querySelectorAll("#contact-form input");
const textarea = document.querySelector("form textarea");
const submitContact = document.querySelector("#submit-contact");

function submitContactForm() {
  const title = document.querySelector("#content-contact h1");
  const sentence = document.querySelector("#content-contact p");

  //Disabling the input & textarea
  disableInputs(contactInputs);
  textarea.disabled = true;
  textarea.style.animation = "elementDisappearance 1s 1 forwards";

  subFunc(title, sentence);

  setTimeout(function() {
    contactForm.style.animation = "contactScale 1s 1 forwards";
  }, 1000);

  //Use the "after submit" function with the same text from the Modal Pop Up"
}

//Scroll to the top of the page button. (Modify the icon appearance...)
const up = document.querySelector("#scroll-up-icon");
up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

//Scroll slider

//Debounce - the function will run less times per 1 scroll

function debounce(func, wait = 5, immediate = true) {
  console.log("TCL: debounce -> debounce", debounce);
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

//Running the functions only on the specified images
const sliderImages = document.querySelectorAll(".coffee-img, .about-img");

//Once the image is peaking, reveal it
function checkslide(e) {
  console.count(e);
  sliderImages.forEach(sliderImage => {
    // Half way through the image
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.style.animation = "elementEntrance 1s 1 forwards";
    }
  });
}

window.addEventListener("scroll", debounce(checkslide));
