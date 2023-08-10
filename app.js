console.log("alright alright alright");

let viz;

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
  viz = new tableau.Viz(vizBox, url, options);
}

// 5. controlling when function is run

document.addEventListener("DOMContentLoaded", initViz);

// 6. adding pdf export button functionality

document.addEventListener("DOMContentLoaded", function () {
  const exportPdfButton = document.getElementById("exportPdf");

  exportPdfButton.addEventListener("click", exportPdfFunction);

  function exportPdfFunction() {
    viz.showExportPDFDialog();
  }
});

// 7. adding ppt export button functionality

document.addEventListener("DOMContentLoaded", function () {
  const exportPptButton = document.getElementById("exportPpt");

  exportPptButton.addEventListener("click", exportPptFunction);

  function exportPptFunction() {
    viz.showExportPowerPointDialog();
  }
});
