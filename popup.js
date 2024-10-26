chrome.storage.sync.get(["points", "moneySaved"], ({ points = 0, moneySaved = 0 }) => {
    document.getElementById("points").textContent = points;
    document.getElementById("moneySaved").textContent = moneySaved.toFixed(2);
  
    let status = "Bronze";
    if (points > 500) status = "Silver";
    if (points > 1000) status = "Gold";
    if (points > 2000) status = "Platinum";
  
    document.getElementById("statusLevel").textContent = status;
  });
  