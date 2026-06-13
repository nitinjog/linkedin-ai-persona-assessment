const questions = [
  {
    text: "A colleague says, 'We should use AI for everything.' What is your first response?",
    answers: [
      ["Yes. Finally, the spreadsheet can become sentient.", 0],
      ["Which exact task are we trying to improve?", 3],
      ["Let's map the workflow, risk, data, cost, and human review points.", 4],
      ["Can we announce an AI transformation program before lunch?", 1]
    ]
  },
  {
    text: "You are asked to write a prompt for a business report. Which one is strongest?",
    answers: [
      ["Write a great report.", 0],
      ["Act as a McKinsey consultant and make it impressive.", 1],
      ["Summarize decisions, risks, numbers, gaps, and recommended next steps.", 4],
      ["Make it sound smart but not too AI-ish.", 2]
    ]
  },
  {
    text: "Which model list suggests someone follows AI beyond the usual headlines?",
    answers: [
      ["ChatGPT, Claude, Gemini.", 1],
      ["DeepSeek, Qwen, Kimi, GLM, Mistral.", 4],
      ["ChatGPT, Canva, Notion, Grammarly.", 0],
      ["Whichever model is trending on my feed today.", 1]
    ]
  },
  {
    text: "Someone says, 'We need AI agents.' What makes it an agent, not just a chatbot?",
    answers: [
      ["It has a cooler name and a darker interface.", 0],
      ["It can use tools, follow steps, check state, and act toward a goal.", 4],
      ["It replies in bullet points without being asked.", 1],
      ["It connects two apps and sends me a notification.", 2]
    ]
  },
  {
    text: "Which group of names belongs in a serious AI conversation?",
    answers: [
      ["Andrew Ng, Fei-Fei Li, Andrej Karpathy, Demis Hassabis.", 4],
      ["Steve Jobs, Warren Buffett, Elon from every second post.", 1],
      ["Tony Stark, Jarvis, Skynet, ChatGPT's cousin.", 0],
      ["Sam Altman, Dario Amodei, Jensen Huang, Ilya Sutskever.", 3]
    ]
  },
  {
    text: "A new open-weight model becomes popular because it is strong and cheap. You:",
    answers: [
      ["Declare the old leaders finished forever.", 0],
      ["Test it on one real task before posting a take.", 3],
      ["Compare quality, latency, privacy, license, and cost per completed task.", 4],
      ["Bookmark 14 threads and use none of them.", 1]
    ]
  },
  {
    text: "Which AI term combo sounds like a real workflow setup?",
    answers: [
      ["Prompt, vibes, magic, scale.", 0],
      ["Tools, memory, loop, skills, evals, human approval.", 4],
      ["Chatbot, caption, carousel, engagement.", 1],
      ["Template, tone, summary, rewrite.", 2]
    ]
  },
  {
    text: "Someone posts, 'This model beats everything on benchmarks.' What do you check?",
    answers: [
      ["Whether the chart looks expensive.", 0],
      ["What the benchmark measures, what it misses, and whether tools were used.", 4],
      ["Whether my favorite influencer agreed.", 1],
      ["Whether it improves one task I actually care about.", 3]
    ]
  },
  {
    text: "Your AI news diet is closest to:",
    answers: [
      ["Official release notes, a few builders, and suspiciously fewer hot takes.", 4],
      ["LinkedIn posts that begin with 'I spent 72 hours testing...'", 1],
      ["One WhatsApp forward, two podcasts, and a graph with no axis label.", 0],
      ["Newsletters, demos, and trying tools before forming opinions.", 3]
    ]
  },
  {
    text: "An AI answer includes a source link. What do you do?",
    answers: [
      ["Click the link and verify it supports the claim.", 4],
      ["Trust it because blue links feel official.", 0],
      ["Ask for three more sources, then check the best one.", 3],
      ["Call it research and move to slide design.", 1]
    ]
  },
  {
    text: "What does 'multimodal AI' mean in practical terms?",
    answers: [
      ["It works with text, images, audio, video, or files depending on the task.", 4],
      ["It means the app has many pricing plans.", 0],
      ["It can look at a screenshot and help debug or explain it.", 3],
      ["It makes prettier images than last year's model.", 1]
    ]
  },
  {
    text: "Your most honest LinkedIn AI habit is:",
    answers: [
      ["Turning one useful workflow into a tasteful post, not a prophecy.", 3],
      ["Writing '10 prompts that changed my life' after changing one heading.", 0],
      ["Explaining tradeoffs even when the comments wanted magic.", 4],
      ["Saving 400 tools and using the same three.", 2]
    ]
  }
];

const personas = [
  {
    min: 0,
    level: "Level 1",
    title: "Prompt Potato With Wi-Fi",
    summary: "You know AI is important, mostly because everyone says it before selling a course. Your superpower is enthusiasm. Your weakness is believing every demo has already shipped.",
    badges: ["Vibe-first", "Carousel vulnerable", "Still counts letters manually"],
    colors: ["#f3b33d", "#ffe6a3", "#0a66c2"]
  },
  {
    min: 11,
    level: "Level 2",
    title: "AI Carousel Field Reporter",
    summary: "You have seen the demos, saved the threads, and survived the screenshots. You know AI can be brilliant and ridiculous, often inside the same meeting.",
    badges: ["Meme-aware", "Prompt tinkerer", "Cautiously online"],
    colors: ["#ef6f7b", "#ffd0d6", "#0a66c2"]
  },
  {
    min: 21,
    level: "Level 3",
    title: "Agentic Middle Manager",
    summary: "You can translate hype into workflows, which makes you dangerous in meetings. You are not fully expert, but you have stopped calling every automation an AI agent.",
    badges: ["Workflow fluent", "Tool stack collector", "Demo skeptic"],
    colors: ["#32c89a", "#d7fff1", "#084d92"]
  },
  {
    min: 32,
    level: "Level 4",
    title: "Model Menu Sommelier",
    summary: "You know when to use a frontier model, when to use a cheaper open model, and when to use a spreadsheet. People ask you questions. You answer with caveats.",
    badges: ["Eval-minded", "Cost-aware", "Qwen/Kimi literate"],
    colors: ["#0a66c2", "#cfe7ff", "#32c89a"]
  },
  {
    min: 42,
    level: "Level 5",
    title: "Benchmark Baba of LinkedIn",
    summary: "You can discuss reasoning, agents, multimodal systems, open weights, and model economics without turning into a press release. Rare. Slightly alarming.",
    badges: ["Signal rich", "Receipts available", "Hot-take resistant"],
    colors: ["#17212b", "#e6eef7", "#f3b33d"]
  }
];

let current = 0;
const selections = new Array(questions.length).fill(null);

const intro = document.querySelector("#intro");
const quiz = document.querySelector("#quiz");
const result = document.querySelector("#result");
const questionCard = document.querySelector("#question-card");
const progressLabel = document.querySelector("#progress-label");
const meterFill = document.querySelector("#meter-fill");
const backBtn = document.querySelector("#back-btn");
const nextBtn = document.querySelector("#next-btn");
const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn");
const copyBtn = document.querySelector("#copy-btn");
const shareBtn = document.querySelector("#share-btn");
const downloadBtn = document.querySelector("#download-btn");

startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  quiz.classList.remove("hidden");
  renderQuestion();
});

questionCard.addEventListener("change", (event) => {
  if (event.target.name === "answer") {
    selections[current] = Number(event.target.value);
    nextBtn.disabled = false;
  }
});

backBtn.addEventListener("click", () => {
  if (current > 0) {
    current -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  const checked = questionCard.querySelector("input:checked");
  if (!checked) return;
  selections[current] = Number(checked.value);
  if (current < questions.length - 1) {
    current += 1;
    renderQuestion();
  } else {
    showResult();
  }
});

restartBtn.addEventListener("click", () => {
  current = 0;
  selections.fill(null);
  result.classList.add("hidden");
  intro.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

copyBtn.addEventListener("click", async () => {
  const persona = getPersona();
  const text = makeShareText(persona);
  await navigator.clipboard.writeText(text);
  copyBtn.textContent = "Copied";
  setTimeout(() => (copyBtn.textContent = "Copy LinkedIn post"), 1400);
});

shareBtn.addEventListener("click", async () => {
  const persona = getPersona();
  const text = makeShareText(persona);
  if (navigator.share) {
    await navigator.share({ title: persona.title, text });
  } else {
    await navigator.clipboard.writeText(text);
    shareBtn.textContent = "Copied share text";
    setTimeout(() => (shareBtn.textContent = "Share result"), 1400);
  }
});

downloadBtn.addEventListener("click", () => {
  const persona = getPersona();
  const svg = makeDownloadCard(persona);
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const image = new Image();
  image.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 630;
    const context = canvas.getContext("2d");
    context.drawImage(image, 0, 0);
    canvas.toBlob((pngBlob) => {
      const pngUrl = URL.createObjectURL(pngBlob);
      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = `${persona.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.png`;
      link.click();
      URL.revokeObjectURL(pngUrl);
      URL.revokeObjectURL(url);
    }, "image/png");
  };
  image.src = url;
});

function renderQuestion() {
  const question = questions[current];
  progressLabel.textContent = `Question ${current + 1} of ${questions.length}`;
  meterFill.style.width = `${((current + 1) / questions.length) * 100}%`;
  backBtn.disabled = current === 0;
  nextBtn.disabled = selections[current] === null;
  nextBtn.textContent = current === questions.length - 1 ? "Reveal persona" : "Next";

  questionCard.innerHTML = `
    <legend>${question.text}</legend>
    <div class="answers">
      ${question.answers
        .map(
          ([label, score], index) => `
            <label class="answer">
              <input type="radio" name="answer" value="${score}" ${selections[current] === score ? "checked" : ""}>
              <span><strong>${String.fromCharCode(65 + index)}.</strong>${label}</span>
            </label>
          `
        )
        .join("")}
    </div>
  `;
}

function getScore() {
  return selections.reduce((total, score) => total + (score ?? 0), 0);
}

function getPersona() {
  const score = getScore();
  return [...personas].reverse().find((persona) => score >= persona.min);
}

function showResult() {
  const persona = getPersona();
  const score = getScore();
  quiz.classList.add("hidden");
  result.classList.remove("hidden");
  document.querySelector("#result-level").textContent = persona.level;
  document.querySelector("#result-score").textContent = `${score}/${questions.length * 4}`;
  document.querySelector("#result-title").textContent = persona.title;
  document.querySelector("#result-summary").textContent = persona.summary;
  document.querySelector("#persona-art").innerHTML = makeAvatar(persona);
  document.querySelector("#result-badges").innerHTML = persona.badges
    .map((badge) => `<span class="badge">${badge}</span>`)
    .join("");
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function makeShareText(persona) {
  const score = getScore();
  return `I took The LinkedIn AI Persona Assessment and got: ${persona.title} (${persona.level}). Score: ${score}/${questions.length * 4}. I will now be adding "agentic" to my headline responsibly.`;
}

function makeAvatar(persona) {
  const [main, soft, accent] = persona.colors;
  const score = getScore();
  const glasses = score > 30 ? `<path d="M95 132h38M167 132h38M133 132c7-7 27-7 34 0" fill="none" stroke="#17212b" stroke-width="7" stroke-linecap="round"/><circle cx="112" cy="132" r="21" fill="none" stroke="#17212b" stroke-width="7"/><circle cx="188" cy="132" r="21" fill="none" stroke="#17212b" stroke-width="7"/>` : "";
  const crown = score > 41 ? `<path d="M82 69l28-30 32 28 34-31 31 32-8 34H91z" fill="${accent}" stroke="#17212b" stroke-width="6" stroke-linejoin="round"/>` : "";
  return `
    <svg viewBox="0 0 300 300" role="img" aria-label="${persona.title}">
      <rect x="18" y="18" width="264" height="264" rx="34" fill="${soft}" stroke="#17212b" stroke-width="6"/>
      <path d="M59 234c16-44 50-66 91-66s75 22 91 66" fill="${main}" stroke="#17212b" stroke-width="6"/>
      <circle cx="150" cy="122" r="70" fill="#ffd8bd" stroke="#17212b" stroke-width="6"/>
      ${crown}
      <path d="M84 105c16-46 108-56 132 4-22-10-48-14-75-12-23 2-42 5-57 8z" fill="${main}" stroke="#17212b" stroke-width="6" stroke-linejoin="round"/>
      <circle cx="124" cy="128" r="7" fill="#17212b"/>
      <circle cx="176" cy="128" r="7" fill="#17212b"/>
      ${glasses}
      <path d="M124 162c17 14 36 14 53 0" fill="none" stroke="#17212b" stroke-width="7" stroke-linecap="round"/>
      <rect x="203" y="193" width="46" height="32" rx="6" fill="#fff" stroke="#17212b" stroke-width="5"/>
      <path d="M214 205h24M214 215h16" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>
    </svg>
  `;
}

function makeDownloadCard(persona) {
  const score = getScore();
  const cleanTitle = escapeXml(persona.title);
  const badgeText = persona.badges.map(escapeXml).join(" | ");
  const avatar = makeAvatar(persona).replace("<svg", "<svg x=\"250\" y=\"120\" width=\"300\" height=\"300\"");
  const summaryLines = wrapText(persona.summary, 54)
    .map((line, index) => `<tspan x="610" y="${346 + index * 34}">${escapeXml(line)}</tspan>`)
    .join("");
  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#f7f9fb"/>
    <rect x="70" y="58" width="1060" height="514" rx="28" fill="#fff" stroke="#d8e1e8" stroke-width="3"/>
    <rect x="70" y="58" width="1060" height="18" rx="9" fill="#0a66c2"/>
    ${avatar}
    <text x="610" y="166" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#084d92">THE LINKEDIN AI PERSONA ASSESSMENT</text>
    <text x="610" y="230" font-family="Arial, sans-serif" font-size="54" font-weight="800" fill="#17212b">${cleanTitle}</text>
    <text x="610" y="292" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#5f6f7f">${persona.level} | ${score}/${questions.length * 4}</text>
    <text font-family="Arial, sans-serif" font-size="25" fill="#5f6f7f">${summaryLines}</text>
    <text x="610" y="492" font-family="Arial, sans-serif" font-size="23" font-weight="700" fill="#084d92">${badgeText}</text>
  </svg>`;
}

function wrapText(text, maxLength) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxLength) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  });
  if (line) lines.push(line);
  return lines.slice(0, 4);
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
