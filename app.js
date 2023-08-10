console.log("alright alright alright");

// 1. create a variable to store our vizcontainer

const vizBox = document.getElementById("vizContainer");

// 2. create a variable for dashboard options

const options = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};

// 3. create something which holds the url

const url =
  "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia?:language=en-US&:display_count=n&:origin=viz_share_link";

// 4. define our function to build dashboard

function initViz() {
  const viz = new tableau.Viz(vizBox, url, options);
}

// 5. controlling when function is run

document.addEventListener("DOMContentLoaded", initViz);
