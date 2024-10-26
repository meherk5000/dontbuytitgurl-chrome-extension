chrome.storage.sync.get(["points", "moneySaved"], ({ points = 0, moneySaved = 0 }) => {
    document.getElementById("points").textContent = points;
    document.getElementById("moneySaved").textContent = moneySaved.toFixed(2);
  
    let status = "I have no self control fr 😕";
    if (points >= 500) status = "Y'all I'm trying 🥲";
    if (points >= 1000) status = "Saving money is my passion 😼";
    if (points >= 2000) status = "Frugal Icon 🎉";
  
    document.getElementById("status").textContent = status;
  });
  