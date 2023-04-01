


// Get the navigation buttons
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");

// Get the current pathname without the leading slash
const currentPage = window.location.pathname.substring(1);

// Add click event listeners to the navigation buttons
leftButton.addEventListener("click", () => {
  switch (currentPage) {
    case "index.html":
    case "":
      window.location.href = "option1.html";
      break;
    case "option2.html":
      window.location.href = "index.html";
      break;
    default:
      break;
  }
});

rightButton.addEventListener("click", () => {
  switch (currentPage) {
    case "index.html":
    case "":
      window.location.href = "option2.html";
      break;
    case "option1.html":
      window.location.href = "index.html";
      break;
    default:
      break;
  }
});
