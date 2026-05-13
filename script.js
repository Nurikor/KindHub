const quickTasks = [
  {
    id: 1,
    title: "Донести сумку до двери",
    details: "5 мин · соседний корпус, 1 этаж",
    points: 12,
    visionAssist: false
  },
  {
    id: 2,
    title: "Прочитать срок годности",
    details: "Здесь и сейчас · фото или видео",
    points: 18,
    visionAssist: true
  },
  {
    id: 3,
    title: "Показать дорогу к клинике",
    details: "10 мин · только устные указания",
    points: 14,
    visionAssist: false
  },
  {
    id: 4,
    title: "Описать переход для навигации",
    details: "Помощь зрением · короткий звонок",
    points: 22,
    visionAssist: true
  },
  {
    id: 5,
    title: "Зайти за хлебом по пути",
    details: "Поручение · оплата чека подопечным",
    points: 16,
    visionAssist: false
  },
  {
    id: 6,
    title: "Прочитать номер автобуса",
    details: "Здесь и сейчас · 2 мин видео",
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
  if (value >= 80) return "Профи";
  if (value >= 45) return "Надёжный помощник";
  if (value >= 18) return "Активный волонтёр";
  return "Новичок";
}

function getSpecialty(visionCount) {
  if (visionCount >= 3) return "Гуру навигации";
  if (visionCount >= 1) return "Зрячий гид (обучение)";
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
      ? '<span class="task-badge" aria-label="Помощь зрением">Зрение</span>'
      : "";
    taskItem.innerHTML = `
      <h4>${task.title} ${badge}</h4>
      <p class="task-meta">${task.details}</p>
      <p><strong>Засчитано (демо):</strong> +${task.points} баллов</p>
      <button type="button" data-task-id="${task.id}">
        Отметить выполнение
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
      "Записано в демо-паспорт. В полной версии это синхронизируется с верифицированными часами.";
  }

  button.disabled = true;
  button.textContent = "Выполнено";
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
