const tabs = document.querySelectorAll(".feature-tab");
const panes = document.querySelectorAll(".feature-pane");
const featureImage = document.getElementById("featureImage");

const images = {
  tab1: "img/z-web-dev.avif",
  tab2: "img/z-wordpress-dev.avif",
  tab3: "img/z-content.avif",
  tab4: "img/z-link-building.avif",
  tab5: "img/z-keyword.avif",
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Change active tab
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // Show corresponding content
    const target = tab.getAttribute("data-target");
    panes.forEach((pane) => pane.classList.add("d-none"));
    document.getElementById(target).classList.remove("d-none");

    // Change image
    featureImage.src = images[target];
  });
});

// project
const carousel = document.getElementById("portfolio-carousel");

// Duplicate items for seamless infinite scroll
const items = Array.from(carousel.children);
items.forEach((item) => carousel.appendChild(item.cloneNode(true)));

// Drag/swipe for desktop and mobile
let isDown = false,
  startX,
  scrollLeft;
carousel.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});
carousel.addEventListener("mouseleave", () => {
  isDown = false;
});
carousel.addEventListener("mouseup", () => {
  isDown = false;
});
carousel.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  const x = e.pageX - carousel.offsetLeft;
  carousel.scrollLeft = scrollLeft - (x - startX);
});

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].pageX;
  scrollLeft = carousel.scrollLeft;
});
carousel.addEventListener("touchmove", (e) => {
  const x = e.touches[0].pageX;
  carousel.scrollLeft = scrollLeft - (x - startX);
});

// Smooth infinite auto-play fast
let scrollPosition = 0;
const speed = 1.5; // faster speed
function smoothAutoScroll() {
  scrollPosition += speed;
  if (scrollPosition >= carousel.scrollWidth / 2) scrollPosition = 0;
  carousel.scrollLeft = scrollPosition;
  requestAnimationFrame(smoothAutoScroll);
}
smoothAutoScroll();

// Projects data for modal
const projects = [
  {
    title: "football sports blogs",
    desktop: "img/portfolio/latest-football-news.jpg",
    mobile: "img/portfolio/football-mobile.jpg",
    link: "https://latestfootball.news/",
  },
  {
    title: "lottery casino blog",
    desktop: "img/portfolio/jackpot-desktop.jpg",
    mobile: "img/portfolio/jackpot-mobile.jpg",
    link: "https://jackpotlotteryresult.today/",
  },
  {
    title: "portfolio",
    desktop: "img/portfolio/portfolio-desktop.jpg",
    mobile: "img/portfolio/portfolio-mobile.jpg",
    link: "#",
  },
];

function renderAllProjects() {
  const container = document.getElementById("allProjects");
  container.innerHTML = "";
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4 position-relative";
    card.innerHTML = `
        <img src="${project.mobile}" class="position-absolute top-0 end-0 mobile-overlay" alt="mobile design">
        <div class="card mt-5">
          <a href="${project.link}" target="_blank">
            <img src="${project.desktop}" class="card-img-top" alt="${project.title}">
          </a>
          <div class="card-body">
            <h5 class="card-title text-capitalize">${project.title}</h5>
          </div>
        </div>`;
    container.appendChild(card);
  });
}

document.getElementById("seeMoreModalBtn").addEventListener("click", () => {
  renderAllProjects();
  new bootstrap.Modal(document.getElementById("portfolioModal")).show();
});
