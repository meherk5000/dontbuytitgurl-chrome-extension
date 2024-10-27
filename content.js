// Check if the current page is a checkout page
function isCheckoutPage() {
  return window.location.href.toLowerCase().includes("checkout");
}

// Show overlay reminding the user to answer questions
const overlay = document.createElement("div");
function showReminderOverlay() {
  overlay.id = "dontBuyItGurlOverlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(255, 192, 203, 0.9)"; 
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = "10000";
  overlay.style.fontSize = "24px";
  overlay.style.textAlign = "center";
  
  const message = document.createElement("div");
  message.textContent = "Please go back to the dontbuyitgurl page... You have questions to answer 🤨";
  
  overlay.appendChild(message);
  document.body.appendChild(overlay);
}

// Function to open the questionnaire in a new tab
function openQuestionnaireTab() {
  chrome.runtime.sendMessage({ action: "openQuestionnaire" });
}

// If on a checkout page, show overlay and open questionnaire
if (isCheckoutPage()) {
  showReminderOverlay();
  openQuestionnaireTab();
}
