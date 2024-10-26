const questions = [
    "Do you need this product?",
    "Have you thought about this purchase?",
    "Will this bring long-term value?",
    "Is this purchase a priority?",
    "Do you still want to proceed?"
  ];
  
  let currentQuestionIndex = 0;
  let points = 0;
  
  function updateQuestion() {
    document.getElementById("questionText").innerText = questions[currentQuestionIndex];
    document.getElementById("questionNumber").innerText = currentQuestionIndex + 1;
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
  