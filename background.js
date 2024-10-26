chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "openQuestionnaire") {
    chrome.tabs.create({ url: "questionnaire.html" });
  } else if (request.action === "removeBlock") {
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      function: removeOverlay
    });
  }
});

function removeOverlay() {
  const overlay = document.getElementById("dontBuyItGurlOverlay");
  if (overlay) overlay.remove();
}
