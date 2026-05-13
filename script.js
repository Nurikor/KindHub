const quickTasks = [
  {
    id: 1,
    title: "Carry a bag to the door",
    details: "5 min · neighbor building, ground floor",
    points: 12,
    visionAssist: false
  },
  {
    id: 2,
    title: "Read expiry date on a package",
    details: "Here & now · video or photo assist",
    points: 18,
    visionAssist: true
  },
  {
    id: 3,
    title: "Point the way to the clinic",
    details: "10 min · spoken directions only",
    points: 14,
    visionAssist: false
  },
  {
    id: 4,
    title: "Describe a crossing for navigation",
    details: "Vision assist · short live call",
    points: 22,
    visionAssist: true
  },
  {
    id: 5,
    title: "Pick up bread on your way",
    details: "Errand · reimbursed by ward",
    points: 16,
    visionAssist: false
  },
  {
    id: 6,
    title: "Read the bus line on the LED board",
    details: "Here & now · 2 min video",
    points: 20,
    visionAssist: true
  }
];

const taskFeed = document.getElementById("taskFeed");
const pointsEl = document.getElementById("points");
const ratingEl = document.getElementById("rating");
const visionEl = document.getElementById("visionCount");
const specialtyEl = document.getElementById("specialty");
const confirmationEl = document.getElementById("confirmation");
const contrastBtn = document.getElementById("contrastBtn");
const fontBtn = document.getElementById("fontBtn");

let points = 0;
let visionAssists = 0;

function getLevel(value) {
  if (value >= 80) return "Pro";
  if (value >= 45) return "Reliable helper";
  if (value >= 18) return "Active volunteer";
  return "Beginner";
}

function getSpecialty(visionCount) {
  if (visionCount >= 3) return "Navigation Guru";
  if (visionCount >= 1) return "Vision guide (in training)";
  return "—";
}

function updatePassport() {
  if (pointsEl) pointsEl.textContent = String(points);
  if (ratingEl) ratingEl.textContent = getLevel(points);
  if (visionEl) visionEl.textContent = String(visionAssists);
  if (specialtyEl) specialtyEl.textContent = getSpecialty(visionAssists);
}

function renderTasks() {
  if (!taskFeed) return;
  taskFeed.innerHTML = "";

  quickTasks.forEach((task) => {
    const taskItem = document.createElement("article");
    taskItem.className = "task-item";
    const badge = task.visionAssist
      ? '<span class="task-badge" aria-label="Vision assistance">Vision</span>'
      : "";
    taskItem.innerHTML = `
      <h4>${task.title} ${badge}</h4>
      <p class="task-meta">${task.details}</p>
      <p><strong>Recorded hours (demo):</strong> +${task.points} pts</p>
      <button type="button" data-task-id="${task.id}">
        Log completion
      </button>
    `;
    taskFeed.appendChild(taskItem);
  });
}

function onTaskComplete(event) {
  const button = event.target;
  if (button.tagName !== "BUTTON") return;

  const taskId = Number(button.getAttribute("data-task-id"));
  const task = quickTasks.find((item) => item.id === taskId);
  if (!task) return;

  points += task.points;
  if (task.visionAssist) visionAssists += 1;
  updatePassport();
  if (confirmationEl) {
    confirmationEl.textContent =
      "Logged to your demo passport. In the full product this syncs to verified hours and task types.";
  }

  button.disabled = true;
  button.textContent = "Logged";
}

function setupAccessibilityControls() {
  if (!contrastBtn || !fontBtn) return;
  contrastBtn.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
  });

  fontBtn.addEventListener("click", () => {
    document.body.classList.toggle("readable-font");
  });
}

if (taskFeed) {
  taskFeed.addEventListener("click", onTaskComplete);
}
setupAccessibilityControls();
updatePassport();
renderTasks();
