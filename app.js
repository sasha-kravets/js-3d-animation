const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".info__title");
const photo = document.querySelector(".card__image-container .card__image");
const resume = document.querySelector(".resume");
const description = document.querySelector(".info h3");
const techStack = document.querySelector(".info__tech");

// Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  // Popout
  title.style.transform = "translateZ(150px)";
  photo.style.transform = "translateZ(200px)";
  description.style.transform = "translateZ(125px)";
  techStack.style.transform = "translateZ(100px)";
  resume.style.transform = "translateZ(75px)";
});

// Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  // Popback
  title.style.transform = "translateZ(0px)";
  photo.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  techStack.style.transform = "translateZ(0px)";
  resume.style.transform = "translateZ(0px)";
});