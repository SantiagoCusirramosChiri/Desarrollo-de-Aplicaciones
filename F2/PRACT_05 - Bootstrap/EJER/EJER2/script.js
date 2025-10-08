const questions = [
  { q: "¿Quién es el protagonista de Hollow Knight?", options: ["El Caballero", "Hornet", "Radiance"], answer: 0 },
  { q: "¿Qué ciudad es el centro del juego?", options: ["Dirtmouth", "Greenpath", "Deepnest"], answer: 0 },
  { q: "¿Qué recurso usa el Caballero para habilidades?", options: ["Alma", "Energía", "Cristales"], answer: 0 },
  { q: "¿Quién es la protagonista de Silksong?", options: ["Hornet", "Grimm", "Mantis Lord"], answer: 0 },
  { q: "¿Qué insecto es Hornet?", options: ["Araña", "Avispa", "Mantis"], answer: 1 },
  { q: "¿Qué habilidad permite curarse?", options: ["Foco", "Descanso", "Meditación"], answer: 0 },
  { q: "¿Cómo se llama la moneda del juego?", options: ["Geo", "Piedras", "Hollow"], answer: 0 },
  { q: "¿Qué estudio desarrolló Hollow Knight?", options: ["Team Cherry", "Supergiant", "FromSoftware"], answer: 0 },
  { q: "¿Qué jefe aparece con música circense?", options: ["Grimm", "Radiance", "Nosk"], answer: 0 },
  { q: "¿Silksong es secuela o precuela?", options: ["Secuela", "Precuela", "Spin-off"], answer: 0 }
];

let current = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next");
const progressEl = document.getElementById("progress");

function loadQuestion() {
  let q = questions[current];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    let btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(i);
    optionsEl.appendChild(btn);
  });
  nextBtn.disabled = true;
  progressEl.textContent = `Pregunta ${current+1} de ${questions.length}`;
  updateBackground();
}

function selectAnswer(i) {
  nextBtn.disabled = false;
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "¡Has completado el quiz!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
}

function updateBackground() {
  let opacity = 0.7 - (current / questions.length) * 0.7; 
  // document.body.style.background = `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity})), 
  // url('https://wallpapers.com/images/hd/waifu-xfvvhbymwzp7io38.jpg') center/cover no-repeat`;
  // document.body.style.background = `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity})), 
  // url('fondo.png') center/cover no-repeat`;

  document.body.style.background = `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity})), 
  url('snk.webp') center/cover no-repeat`;

  document.body.style.transition = "background 0.5s";
}

nextBtn.addEventListener("click", nextQuestion);

loadQuestion();
