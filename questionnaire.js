const questions = [
    "Babe, do you even have the funds for this?",
    "Be honest, have you thought about this purchase?",
    "Will this bring long-term value?",
    "Is this purchase a priority?",
    "Do you still want to proceed?"
  ];

  const questionImages = [
    "images/noMoneyHere.gif",
    "images/disappointedRobot.gif",
    "images/thinkinghead.png",
    "images/why.jpg",
    "images/henrydanger.png"
  ];
  
  let currentQuestionIndex = 0;
  let points = 0;
  
  function updateQuestion() {
    document.getElementById("questionText").innerText = questions[currentQuestionIndex];
    document.getElementById("questionNumber").innerText = currentQuestionIndex + 1;
    document.getElementById("questionImage").src = questionImages[currentQuestionIndex];
  }
  
  function handleAnswer(answer) {
    if (answer === "no") points += 10;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      updateQuestion();
    } else {
      finishQuestionnaire(answer);
    }
  }
  
  function finishQuestionnaire(lastAnswer) {
    if (lastAnswer === "yes") {
      chrome.runtime.sendMessage({ action: "removeBlock" });
    } else {
      alert("Congrats! You saved money and earned points!");
    }
    chrome.storage.sync.set({ points: points });
    window.close();
  }
  
  // Navigate to status page
  document.getElementById("statusBtn").addEventListener("click", () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("status.html") });
  });
  
  document.getElementById("yesBtn").addEventListener("click", () => handleAnswer("yes"));
  document.getElementById("noBtn").addEventListener("click", () => handleAnswer("no"));
  
  updateQuestion();
  