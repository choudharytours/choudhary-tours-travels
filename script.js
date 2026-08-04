/* ==========================
   MOBILE MENU
========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
document.addEventListener("click", function (e) {
  if (
    navMenu &&
    menuToggle &&
    !navMenu.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    navMenu.classList.remove("active");
  }
});
/* ==========================
   HEADER SCROLL EFFECT
========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.style.background = "rgba(0,0,0,.95)";
  } else {
    header.style.background = "rgba(0,0,0,.88)";
  }
});

/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });

      navMenu.classList.remove("active");
    }

  });
});

/* ==========================
   WHATSAPP BOOKING FORM
========================== */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

bookingForm.addEventListener("submit", function(e){

e.preventDefault();

const name=document.getElementById("name").value;
const mobile=document.getElementById("mobile").value;
const pickup=document.getElementById("pickup").value;
const destination=document.getElementById("destination").value;
const date=document.getElementById("date").value;
const vehicle=document.getElementById("vehicle").value;
const message=document.getElementById("message").value;

const text =
`*New Booking Request*

👤 Name: ${name}

📞 Mobile: ${mobile}

📍 Pickup: ${pickup}

🏁 Destination: ${destination}

📅 Date: ${date}

🚘 Vehicle: ${vehicle}

📝 Message: ${message}`;

window.open(
`https://wa.me/919785289793?text=${encodeURIComponent(text)}`,
"_blank"
);

bookingForm.reset();

});

}

/* ==========================
   SCROLL ANIMATION
========================== */

const cards=document.querySelectorAll(
".service-card,.fleet-card,.faq-item"
);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".6s ease";

observer.observe(card);

});

/* ==========================
   CURRENT YEAR
========================== */

const year=document.getElementById("year");

if(year){
year.textContent=new Date().getFullYear();
}