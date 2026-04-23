// =============================================
//  THE PLAYGROUND — main.js
//  Dashboard logic — no need to edit this file
// =============================================

// ---- Clock ----
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const el = document.getElementById('clock');
  if (el) el.textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

// ---- Build date ----
const bd = document.getElementById('build-date');
if (bd) bd.textContent = `last updated ${new Date().toLocaleDateString('en-AU', { day:'numeric', month:'short', year:'numeric' })}`;

// ---- Stats ----
function updateStats(filtered) {
  const live  = EXPERIMENTS.filter(e => e.status === 'live').length;
  const wip   = EXPERIMENTS.filter(e => e.status === 'wip').length;
  document.getElementById('stat-total').textContent = EXPERIMENTS.length;
  document.getElementById('stat-live').textContent  = live;
  document.getElementById('stat-wip').textContent   = wip;
  document.getElementById('stat-ideas').textContent = IDEAS.length;
}

// ---- Card builders ----
function makeCard(exp, delay) {
  const card = document.createElement('div');
  card.className = 'exp-card' + (exp.file ? ' has-link' : '');
  card.style.animationDelay = `${delay * 60}ms`;
  card.dataset.category = exp.category;

  if (exp.file) {
    card.addEventListener('click', () => { window.location.href = exp.file; });
  }

  const catLabel = CATEGORIES[exp.category] || exp.category;
  const badgeClass = { live: 'badge-live', wip: 'badge-wip', idea: 'badge-idea' }[exp.status] || 'badge-idea';
  const badgeText  = { live: 'Live', wip: 'In Progress', idea: 'Idea' }[exp.status] || 'Idea';
  const arrow = exp.file ? '<span class="card-arrow">→</span>' : '';

  card.innerHTML = `
    <span class="card-category">${catLabel}</span>
    <div class="card-icon">${exp.icon}</div>
    <div class="card-name">${exp.name}</div>
    <div class="card-desc">${exp.desc}</div>
    <div class="card-footer">
      <span class="badge ${badgeClass}">${badgeText}</span>
      ${arrow}
    </div>
  `;
  return card;
}

function makeIdeaCard(idea, delay) {
  return makeCard({ ...idea, status: 'idea', file: '' }, delay);
}

function makeAddCard() {
  const a = document.createElement('a');
  a.className = 'add-card';
  a.href = 'https://claude.ai';
  a.target = '_blank';
  a.rel = 'noopener';
  a.innerHTML = `<span class="add-plus">+</span><span>Build a new experiment with Claude</span>`;
  return a;
}

// ---- Render grid ----
function renderGrid(filter) {
  const grid = document.getElementById('exp-grid');
  grid.innerHTML = '';

  const exps = filter === 'all'
    ? EXPERIMENTS
    : EXPERIMENTS.filter(e => e.category === filter);

  const ideasFiltered = filter === 'all'
    ? IDEAS
    : IDEAS.filter(i => i.category === filter);

  let delay = 0;

  // Live experiments
  if (exps.length > 0) {
    const label = document.createElement('div');
    label.className = 'section-label';
    label.textContent = '// experiments';
    grid.appendChild(label);
    exps.forEach(e => grid.appendChild(makeCard(e, delay++)));
  }

  // Ideas queue
  if (ideasFiltered.length > 0) {
    const label2 = document.createElement('div');
    label2.className = 'section-label';
    label2.textContent = '// ideas queue — build these next';
    grid.appendChild(label2);
    ideasFiltered.forEach(i => grid.appendChild(makeIdeaCard(i, delay++)));
  }

  // Always show the add card
  grid.appendChild(makeAddCard());
}

// ---- Filter buttons ----
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGrid(btn.dataset.filter);
  });
});

// ---- Init ----
updateStats();
renderGrid('all');
