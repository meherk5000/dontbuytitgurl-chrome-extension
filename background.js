chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "open_new_tab") {
      chrome.tabs.create({ url: "https://www.example.com" }); 
    }
  });
  