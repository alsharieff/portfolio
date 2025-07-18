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
