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

// project section
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
    title: "Jackpot Reviews",
    desktop: "img/portfolio/desk-jackpotreviews.avif",
    mobile: "img/portfolio/mob-jackpotreviews.avif",
    link: "https://jackpotreviews.online/",
  },
  {
    title: "Casino Prophet",
    desktop: "img/portfolio/desk-casinoprophet.avif",
    mobile: "img/portfolio/mob-casinoprophet.avif",
    link: "https://casinoprophet.online/public/",
  },
  {
    title: "Sports Odds",
    desktop: "img/portfolio/desk-thesportsodds.avif",
    mobile: "img/portfolio/mob-thesportsodds.avif",
    link: "https://thesportsodds.online/",
  },
  {
    title: "Fortune Mobile",
    desktop: "img/portfolio/desk-fortunemobile.avif",
    mobile: "img/portfolio/mob-fortunemobile.avif",
    link: "https://fortunemobilegames.online/",
  },
  {
    title: "82Lottery",
    desktop: "img/portfolio/desk-82lottery.avif",
    mobile: "img/portfolio/mob-82lottery.avif",
    link: "https://82lotterygames.online/",
  },
  {
    title: "King Of Sports",
    desktop: "img/portfolio/desk-kingofsports.avif",
    mobile: "img/portfolio/mob-kingofsports.avif",
    link: "https://kingofsportsgames.online/",
  },
  {
    title: "Vbet",
    desktop: "img/portfolio/desk-vbet.avif",
    mobile: "img/portfolio/mob-vbet.avif",
    link: "https://vbetcasinogames.online/",
  },
  {
    title: "YetiCasino",
    desktop: "img/portfolio/desk-yeticasino.avif",
    mobile: "img/portfolio/mob-yeticasino.avif",
    link: "https://yeticasinogames.online/",
  },
  {
    title: "Bcasino",
    desktop: "img/portfolio/desk-bcasino.avif",
    mobile: "img/portfolio/mob-bcasino.avif",
    link: "https://bcasinogames.online/",
  },
  {
    title: "Grandivy",
    desktop: "img/portfolio/desk-grandivy.avif",
    mobile: "img/portfolio/mob-grandivy.avif",
    link: "https://grandivygames.online/",
  },
  {
    title: "Yaa Casino",
    desktop: "img/portfolio/desk-yaacasino.avif",
    mobile: "img/portfolio/mob-yaacasino.avif",
    link: "https://yaacasinogames.online/",
  },
  {
    title: "Playboom",
    desktop: "img/portfolio/desk-playboom.avif",
    mobile: "img/portfolio/mob-playboom.avif",
    link: "https://playboom24kgames.online/",
  },
  {
    title: "Paripesa",
    desktop: "img/portfolio/desk-paripesa.avif",
    mobile: "img/portfolio/mob-paripesa.avif",
    link: "https://paripesagames.online/",
  },
  {
    title: "Slot Planet",
    desktop: "img/portfolio/desk-slotplanet.avif",
    mobile: "img/portfolio/mob-slotplanet.avif",
    link: "https://slotplanetgames.online/",
  },
  {
    title: "21Casino",
    desktop: "img/portfolio/desk-21casino.avif",
    mobile: "img/portfolio/mob-21casino.avif",
    link: "https://21casinogames.online/",
  },
  {
    title: "Betobet",
    desktop: "img/portfolio/desk-betobet.avif",
    mobile: "img/portfolio/mob-betobet.avif",
    link: "https://betobetgames.online/",
  },
  {
    title: "Betkwiff",
    desktop: "img/portfolio/desk-betkwiff.avif",
    mobile: "img/portfolio/mob-betkwiff.avif",
    link: "https://betkwiffgames.online/",
  },
  {
    title: "Mrplay",
    desktop: "img/portfolio/desk-mrplay.avif",
    mobile: "img/portfolio/mob-mrplay.avif",
    link: "https://mrplaycasinogames.online/",
  },
  {
    title: "Melbet",
    desktop: "img/portfolio/desk-melbet.avif",
    mobile: "img/portfolio/mob-melbet.avif",
    link: "https://melbetjiligames.online/",
  },
  {
    title: "Queenplay",
    desktop: "img/portfolio/desk-queenplay.avif",
    mobile: "img/portfolio/mob-queenplay.avif",
    link: "https://queenplaygames.online/",
  },
  {
    title: "Regent",
    desktop: "img/portfolio/desk-regent.avif",
    mobile: "img/portfolio/mob-regent.avif",
    link: "https://regentgames.online/",
  },
  {
    title: "Shangrila",
    desktop: "img/portfolio/desk-shangrila.avif",
    mobile: "img/portfolio/mob-shangrila.avif",
    link: "https://shangrilagames.online/",
  },
  {
    title: "Spinrio",
    desktop: "img/portfolio/desk-spinrio.avif",
    mobile: "img/portfolio/mob-spinrio.avif",
    link: "https://spinriogames.online/",
  },
  {
    title: "24Bet",
    desktop: "img/portfolio/desk-24bet.avif",
    mobile: "img/portfolio/mob-24bet.avif",
    link: "https://24betgames.online/",
  },
  {
    title: "Weltbet",
    desktop: "img/portfolio/desk-weltbet.avif",
    mobile: "img/portfolio/mob-weltbet.avif",
    link: "https://weltbetgames.online/",
  },
  {
    title: "Spinyoo",
    desktop: "img/portfolio/desk-spinyoo.avif",
    mobile: "img/portfolio/mob-spinyoo.avif",
    link: "https://spinyoogames.online/",
  },
  {
    title: "Lalabet",
    desktop: "img/portfolio/desk-lalabet.avif",
    mobile: "img/portfolio/mob-lalabet.avif",
    link: "https://lalabetcasinogames.online/",
  },
  {
    title: "QBet",
    desktop: "img/portfolio/desk-qbet.avif",
    mobile: "img/portfolio/mob-qbet.avif",
    link: "https://qbetcasinogames.online/",
  },
  {
    title: "Betspino",
    desktop: "img/portfolio/desk-betspino.avif",
    mobile: "img/portfolio/mob-betspino.avif",
    link: "https://betspinogames.online/",
  },
  {
    title: "Heycasino",
    desktop: "img/portfolio/desk-heycasino.avif",
    mobile: "img/portfolio/mob-heycasino.avif",
    link: "https://heycasinogames.online/",
  },
  {
    title: "Zotabet",
    desktop: "img/portfolio/desk-zotabet.avif",
    mobile: "img/portfolio/mob-zotabet.avif",
    link: "https://zotabetgames.online/",
  },
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
