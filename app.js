// ---- State ----
let knownSounds = new Set();
let deck = [];
let currentIndex = 0;
let answered = false;
let wasCorrect = false;
let currentChoices = [];          // [{word, emoji}, ...] — 3 options
let cardsCompleted = 0;           // correct answers since last grid reveal
let totalCardsThisSession = 0;
let revealedCells = new Set();
let currentMysteryIndex = 0;
let settingsOpen = false;

const CARDS_PER_REVEAL = 1;
const GRID_SIZE = 16;

// ---- Init ----
function init() {
  loadKnownSounds();
  pickMysteryPicture();
  buildDeck();
  renderMysteryCanvas();
  renderOverlayCells();
  renderAll();
}

// ---- LocalStorage ----
function loadKnownSounds() {
  const stored = localStorage.getItem('knownSounds');
  if (stored) {
    knownSounds = new Set(JSON.parse(stored));
  } else {
    knownSounds = new Set(soundGroups[0].sounds);
    saveKnownSounds();
  }
}

function saveKnownSounds() {
  localStorage.setItem('knownSounds', JSON.stringify([...knownSounds]));
}

// ---- Deck ----
function buildDeck() {
  deck = allWords.filter(w => w.sounds.every(s => knownSounds.has(s)));
  shuffleDeck();
  currentIndex = 0;
  answered = false;
}

function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// ---- Distractor selection ----
function pickChoices(entry) {
  const firstLetter = entry.word[0].toLowerCase();

  // Find other words starting with the same letter (from ALL words, not just deck)
  const sameLetter = allWords.filter(w =>
    w.word[0].toLowerCase() === firstLetter && w.word !== entry.word
  );

  // Shuffle and pick up to 2 distractors
  for (let i = sameLetter.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [sameLetter[i], sameLetter[j]] = [sameLetter[j], sameLetter[i]];
  }

  let distractors = sameLetter.slice(0, 2);

  // If we don't have enough same-letter words, fill from other words
  if (distractors.length < 2) {
    const others = allWords.filter(w =>
      w.word !== entry.word &&
      w.word[0].toLowerCase() !== firstLetter &&
      !distractors.some(d => d.word === w.word)
    );
    for (let i = others.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [others[i], others[j]] = [others[j], others[i]];
    }
    distractors = distractors.concat(others.slice(0, 2 - distractors.length));
  }

  // Combine correct + distractors and shuffle
  const choices = [entry, ...distractors];
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }

  return choices;
}

// ---- Mystery Picture ----
function pickMysteryPicture() {
  currentMysteryIndex = Math.floor(Math.random() * mysteryPictures.length);
  revealedCells = new Set();
  cardsCompleted = 0;
}

function renderMysteryCanvas() {
  const canvas = document.getElementById('mystery-canvas');
  const wrapper = document.getElementById('mystery-wrapper');
  const size = wrapper.clientWidth;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  mysteryPictures[currentMysteryIndex].draw(ctx, size, size);
}

function renderOverlayCells() {
  const overlay = document.getElementById('mystery-overlay');
  overlay.innerHTML = '';
  for (let i = 0; i < GRID_SIZE; i++) {
    const cell = document.createElement('div');
    cell.className = 'overlay-cell' + (revealedCells.has(i) ? ' revealed' : '');
    overlay.appendChild(cell);
  }
}

function revealNextCell() {
  if (revealedCells.size >= GRID_SIZE) return;
  const unrevealed = [];
  for (let i = 0; i < GRID_SIZE; i++) {
    if (!revealedCells.has(i)) unrevealed.push(i);
  }
  const pick = unrevealed[Math.floor(Math.random() * unrevealed.length)];
  revealedCells.add(pick);

  const overlay = document.getElementById('mystery-overlay');
  const cell = overlay.children[pick];
  if (cell) cell.classList.add('revealed');
}

// ---- Render ----
function renderAll() {
  renderCard();
  renderChoices();
}

function renderCard() {
  const container = document.getElementById('flashcard');

  if (deck.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No words available!</p>
        <p>Tap the gear icon to select more sounds.</p>
      </div>`;
    return;
  }

  const entry = deck[currentIndex];
  container.innerHTML = `<div class="flashcard-word">${entry.word}</div>`;
}

function renderChoices() {
  const container = document.getElementById('emoji-choices');

  if (deck.length === 0) {
    container.innerHTML = '';
    return;
  }

  if (!answered) {
    // Generate new choices if we don't have them yet
    const entry = deck[currentIndex];
    currentChoices = pickChoices(entry);
  }

  container.innerHTML = '';
  const correctWord = deck[currentIndex].word;

  for (const choice of currentChoices) {
    const btn = document.createElement('button');
    btn.className = 'emoji-btn';

    const img = document.createElement('img');
    img.src = 'images/' + choice.image;
    img.alt = choice.word;
    img.draggable = false;
    btn.appendChild(img);

    if (answered) {
      btn.classList.add('disabled');
      if (choice.word === correctWord) {
        btn.classList.add('correct');
        if (wasCorrect) {
          const tick = document.createElement('div');
          tick.className = 'emoji-tick';
          tick.textContent = '\u2714';
          btn.appendChild(tick);
        }
      } else if (!wasCorrect) {
        btn.classList.add('wrong');
      }
    } else {
      btn.addEventListener('click', () => handleChoice(choice));
    }

    container.appendChild(btn);
  }
}


// ---- Actions ----
function handleChoice(choice) {
  if (answered || deck.length === 0) return;

  const entry = deck[currentIndex];
  answered = true;
  wasCorrect = choice.word === entry.word;
  totalCardsThisSession++;

  let showingCelebration = false;

  if (wasCorrect) {
    cardsCompleted++;

    if (cardsCompleted % CARDS_PER_REVEAL === 0) {
      revealNextCell();
      if (revealedCells.size >= GRID_SIZE) {
        showingCelebration = true;
        setTimeout(showCelebration, 2000);
      }
    }
  } else {
    // Re-insert this word later in the deck
    const copy = { ...entry };
    const insertAt = Math.min(currentIndex + 4 + Math.floor(Math.random() * 3), deck.length);
    deck.splice(insertAt, 0, copy);
  }

  renderChoices();

  // Auto-advance after a delay (skip if celebration is about to show)
  if (!showingCelebration) {
    setTimeout(() => {
      handleNext();
    }, 2000);
  }
}

function handleNext() {
  if (deck.length === 0) return;

  currentIndex++;
  if (currentIndex >= deck.length) {
    shuffleDeck();
    currentIndex = 0;
  }

  answered = false;
  wasCorrect = false;
  currentChoices = [];
  renderAll();
}

function showCelebration() {
  const pic = mysteryPictures[currentMysteryIndex];
  const overlay = document.createElement('div');
  overlay.className = 'celebration';
  overlay.id = 'celebration';
  overlay.innerHTML = `
    <div class="celebration-content">
      <div class="celebration-canvas-wrap">
        <canvas id="celebration-canvas"></canvas>
      </div>
      <h2>Amazing!</h2>
      <p>You revealed the ${pic.name}!</p>
      <button onclick="dismissCelebration()">New Picture</button>
    </div>`;
  document.body.appendChild(overlay);

  requestAnimationFrame(() => {
    const canvas = document.getElementById('celebration-canvas');
    const wrap = canvas.parentElement;
    const size = wrap.clientWidth;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    pic.draw(ctx, size, size);
  });
}

function dismissCelebration() {
  const el = document.getElementById('celebration');
  if (el) el.remove();
  pickMysteryPicture();
  renderMysteryCanvas();
  renderOverlayCells();
}

// ---- Settings ----
function openSettings() {
  settingsOpen = true;
  renderSettings();
}

function closeSettings() {
  settingsOpen = false;
  const overlay = document.getElementById('settings-overlay');
  const panel = document.getElementById('settings-panel');
  if (overlay) overlay.remove();
  if (panel) panel.remove();
}

function renderSettings() {
  closeSettings();
  settingsOpen = true;

  const overlay = document.createElement('div');
  overlay.className = 'settings-overlay';
  overlay.id = 'settings-overlay';
  overlay.onclick = closeSettings;
  document.body.appendChild(overlay);

  const panel = document.createElement('div');
  panel.className = 'settings-panel';
  panel.id = 'settings-panel';
  panel.onclick = (e) => e.stopPropagation();

  const wordCount = allWords.filter(w => w.sounds.every(s => knownSounds.has(s))).length;

  let html = `
    <div class="settings-header">
      <h2>Known Sounds</h2>
      <button class="close-btn" onclick="closeSettings()">&times;</button>
    </div>
    <div class="word-count" id="settings-word-count">${wordCount} words available</div>`;

  for (const group of soundGroups) {
    const allOn = group.sounds.every(s => knownSounds.has(s));
    html += `
      <div class="sound-group">
        <div class="sound-group-header">
          <h3>${group.name}</h3>
          <button class="group-toggle" data-group="${group.name}" onclick="toggleGroup('${group.name}')">${allOn ? 'All off' : 'All on'}</button>
        </div>
        <div class="sound-chips">`;
    for (const sound of group.sounds) {
      const active = knownSounds.has(sound) ? ' active' : '';
      html += `<button class="sound-chip${active}" data-sound="${sound}" onclick="toggleSound('${sound}')">${sound}</button>`;
    }
    html += `</div></div>`;
  }

  panel.innerHTML = html;
  document.body.appendChild(panel);
}

function updateSettingsUI() {
  const wordCount = allWords.filter(w => w.sounds.every(s => knownSounds.has(s))).length;
  const wcEl = document.getElementById('settings-word-count');
  if (wcEl) wcEl.textContent = `${wordCount} words available`;

  document.querySelectorAll('.sound-chip[data-sound]').forEach(chip => {
    chip.classList.toggle('active', knownSounds.has(chip.dataset.sound));
  });

  for (const group of soundGroups) {
    const allOn = group.sounds.every(s => knownSounds.has(s));
    const btn = document.querySelector(`.group-toggle[data-group="${group.name}"]`);
    if (btn) btn.textContent = allOn ? 'All off' : 'All on';
  }
}

function toggleSound(sound) {
  if (knownSounds.has(sound)) {
    knownSounds.delete(sound);
  } else {
    knownSounds.add(sound);
  }
  saveKnownSounds();
  buildDeck();
  updateSettingsUI();
  renderAll();
}

function toggleGroup(groupName) {
  const group = soundGroups.find(g => g.name === groupName);
  if (!group) return;
  const allOn = group.sounds.every(s => knownSounds.has(s));
  for (const s of group.sounds) {
    if (allOn) {
      knownSounds.delete(s);
    } else {
      knownSounds.add(s);
    }
  }
  saveKnownSounds();
  buildDeck();
  updateSettingsUI();
  renderAll();
}

// ---- Event Listeners ----
document.addEventListener('DOMContentLoaded', () => {
  init();

  document.getElementById('settings-btn').addEventListener('click', openSettings);

  window.addEventListener('resize', () => {
    renderMysteryCanvas();
  });
});
