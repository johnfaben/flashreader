// ---- State ----
let knownSounds = new Set();
let deck = [];
let currentIndex = 0;
let answered = false;
let wasCorrect = false;
let chosenWord = null;   // the picture tapped on the current card
let currentChoices = [];          // [{word, emoji}, ...] — 3 options
let cardsCompleted = 0;           // correct answers since last grid reveal
let totalCardsThisSession = 0;
let revealedCells = new Set();
let heldCells = [];        // two centre tiles kept covered until the very end of each picture
let currentMysteryIndex = 0;
let mysteryQueue = [];            // shuffled picture order, so none repeats until all have been shown
let settingsOpen = false;
let voiceEnabled = localStorage.getItem('voiceEnabled') === 'true';

const CARDS_PER_REVEAL = 1;
const GRID_SIZE = 16;        // 4x4 tiles (grid columns are set in style.css)
const CENTRE_CELLS = [5, 6, 9, 10];  // the four middle tiles of the 4x4 grid
const CELLS_PER_REVEAL = 2;  // scattered tiles uncovered per reveal: 8 reveals per picture

// ---- Init ----
function init() {
  loadKnownSounds();
  pickMysteryPicture();
  buildDeck();
  renderMysteryPicture();
  renderOverlayCells();
  renderAll();
}

// ---- LocalStorage ----
// Sounds that at least one word uses; only these get a chip.
const usedSounds = new Set(allWords.flatMap(w => w.sounds));
const chipSounds = new Set(soundGroups.flatMap(g => g.sounds));
const visibleGroups = soundGroups
  .map(g => ({ name: g.name, sounds: g.sounds.filter(s => usedSounds.has(s)) }))
  .filter(g => g.sounds.length > 0);

// A doubled consonant with no chip of its own (tt, pp...) counts as known with its single letter.
function knowsSound(s) {
  if (knownSounds.has(s)) return true;
  return !chipSounds.has(s) && s.length === 2 && s[0] === s[1] && knownSounds.has(s[0]);
}
const wordIsKnown = w => w.sounds.every(knowsSound);

// Choices saved before the sounds were regrouped into units: keep the same words available.
function migrateKnownSounds(old) {
  const renamed = { ow: 'ow|cow', oo: 'oo|moon', ea: 'ea|leaf', ie: 'ie|pie' };
  const next = new Set();
  for (const s of old) {
    if (renamed[s]) next.add(renamed[s]);
    else if (chipSounds.has(s)) next.add(s);
  }
  if (old.has('l')) next.add('ll');
  if (old.has('s')) next.add('ss');
  if (old.has('f')) next.add('ff');
  if (old.has('ou')) next.add('se');
  if (old.has('sw')) { next.add('w'); next.add('wa'); }
  if (old.has('ey')) { next.add('nk'); next.add('o|son'); }
  return next;
}

function loadKnownSounds() {
  const stored = localStorage.getItem('knownSounds');
  if (stored) {
    knownSounds = new Set(JSON.parse(stored));
    if (localStorage.getItem('knownSoundsVersion') !== '2') {
      knownSounds = migrateKnownSounds(knownSounds);
      saveKnownSounds();
    }
  } else {
    knownSounds = new Set(soundGroups[0].sounds);
    saveKnownSounds();
  }
}

function saveKnownSounds() {
  localStorage.setItem('knownSounds', JSON.stringify([...knownSounds]));
  localStorage.setItem('knownSoundsVersion', '2');
}

// ---- Deck ----
function buildDeck() {
  deck = allWords.filter(wordIsKnown);
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

// Shrink a long word so it fits on one line inside the card; the card keeps its usual height.
function fitFlashcardWord() {
  const container = document.getElementById('flashcard');
  const wordEl = container && container.querySelector('.flashcard-word');
  if (!wordEl) return;
  wordEl.style.fontSize = '';
  container.style.minHeight = '';
  container.style.minHeight = container.offsetHeight + 'px';
  const style = getComputedStyle(container);
  const room = container.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
  const width = wordEl.scrollWidth;
  if (width > room) {
    wordEl.style.fontSize = (parseFloat(getComputedStyle(wordEl).fontSize) * room / width) + 'px';
  }
}
window.addEventListener('resize', fitFlashcardWord);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitFlashcardWord);

// ---- Distractor selection ----
function pickChoices(entry) {
  const firstLetter = entry.word[0].toLowerCase();

  // Find other words starting with the same letter (from ALL words, not just deck)
  // Never offer a wrong answer whose picture is the same as (or means the same as) the right one.
  const clashes = w => w.image === entry.image ||
    sameMeaning.some(group => group.includes(entry.word) && group.includes(w.word));
  const sameLetter = allWords.filter(w =>
    w.word[0].toLowerCase() === firstLetter && w.word !== entry.word && !clashes(w)
  );

  // Shuffle and pick up to 2 distractors
  for (let i = sameLetter.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [sameLetter[i], sameLetter[j]] = [sameLetter[j], sameLetter[i]];
  }

  // Two wrong answers must not share a picture with each other either.
  let distractors = [];
  for (const w of sameLetter) {
    if (distractors.length < 2 && !distractors.some(d => d.image === w.image)) distractors.push(w);
  }

  // If we don't have enough same-letter words, fill from other words
  if (distractors.length < 2) {
    const others = allWords.filter(w =>
      w.word !== entry.word &&
      !clashes(w) &&
      w.word[0].toLowerCase() !== firstLetter &&
      !distractors.some(d => d.word === w.word || d.image === w.image)
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
  if (mysteryQueue.length === 0) {
    mysteryQueue = mysteryPictures.map((_, i) => i);
    for (let i = mysteryQueue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mysteryQueue[i], mysteryQueue[j]] = [mysteryQueue[j], mysteryQueue[i]];
    }
    // Don't start a new round with the picture that was just shown
    if (mysteryQueue.length > 1 && mysteryQueue[mysteryQueue.length - 1] === currentMysteryIndex) {
      mysteryQueue.unshift(mysteryQueue.pop());
    }
  }
  currentMysteryIndex = mysteryQueue.pop();
  revealedCells = new Set();
  heldCells = pickHeldCells();
  cardsCompleted = 0;
}

function mysteryPictureSrc(index) {
  return 'art/' + mysteryPictures[index].file;
}

function renderMysteryPicture() {
  // The tiles cover the picture completely, so it can load underneath them
  document.getElementById('mystery-img').src = mysteryPictureSrc(currentMysteryIndex);
  // Warm the cache for the next picture so it is ready when this one is finished
  if (mysteryQueue.length > 0) {
    new Image().src = mysteryPictureSrc(mysteryQueue[mysteryQueue.length - 1]);
  }
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

// The middle of a picture gives it away, so two of the four centre tiles are always the last to go.
// They are a diagonal pair: that leaves the other diagonal showing two separate corners of the
// centre, which is harder to recognise than one joined-up half.
function pickHeldCells() {
  const [a, b, c, d] = CENTRE_CELLS;
  return Math.random() < 0.5 ? [a, d] : [b, c];
}

function revealNextCells() {
  let unrevealed = [];
  for (let i = 0; i < GRID_SIZE; i++) {
    if (!revealedCells.has(i) && !heldCells.includes(i)) unrevealed.push(i);
  }
  if (unrevealed.length === 0) unrevealed = heldCells.filter(i => !revealedCells.has(i));
  const overlay = document.getElementById('mystery-overlay');
  for (let n = 0; n < CELLS_PER_REVEAL && unrevealed.length > 0; n++) {
    const pick = unrevealed.splice(Math.floor(Math.random() * unrevealed.length), 1)[0];
    revealedCells.add(pick);
    const cell = overlay.children[pick];
    if (cell) cell.classList.add('revealed');
  }
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
  fitFlashcardWord();
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
    currentChoices = (prepared && prepared.entry === entry) ? prepared.choices : pickChoices(entry);
    prepareNextCard();
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
        if (choice.word === chosenWord) {
          btn.classList.add('chosen');
          const cross = document.createElement('div');
          cross.className = 'emoji-tick emoji-cross';
          cross.textContent = '✖';
          btn.appendChild(cross);
        }
      }
    } else {
      btn.addEventListener('click', () => handleChoice(choice));
    }

    container.appendChild(btn);
  }
}


// Choose the next card's pictures ahead of time and fetch them, so they are ready when it appears.
let prepared = null;
function prepareNextCard() {
  const entry = deck[currentIndex + 1];
  if (!entry) { prepared = null; return; }
  const choices = pickChoices(entry);
  prepared = {
    entry, choices,
    images: choices.map(c => { const img = new Image(); img.src = 'images/' + c.image; return img; })
  };
}

// ---- Actions ----
function handleChoice(choice) {
  if (answered || deck.length === 0) return;

  const entry = deck[currentIndex];
  answered = true;
  wasCorrect = choice.word === entry.word;
  chosenWord = choice.word;
  totalCardsThisSession++;
  speakWord(entry.word);

  let showingCelebration = false;

  if (wasCorrect) {
    cardsCompleted++;

    if (cardsCompleted % CARDS_PER_REVEAL === 0) {
      revealNextCells();
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
    // The pause covers the spoken word; with the voice off it only needs to show the tick.
    setTimeout(() => {
      handleNext();
    }, voiceEnabled ? 2000 : 1200);
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

// "Well done! You found the puffin!" Photos are named after their subject; a titled artwork keeps its title.
function celebrationMessage(pic) {
  const name = pic.licence ? pic.name.charAt(0).toLowerCase() + pic.name.slice(1) : pic.name;
  return 'Well done! You found ' + (/^the /i.test(name) ? '' : 'the ') + name + '!';
}

function playCelebrationSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.3, ctx.currentTime + i * 0.15);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.15 + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.15);
      osc.stop(ctx.currentTime + i * 0.15 + 0.4);
    });
  } catch (e) { /* silent fallback */ }
}

function showCelebration() {
  if (voiceEnabled) playCelebrationSound();
  const pic = mysteryPictures[currentMysteryIndex];
  // Spoken after the chime (which lasts a little under a second)
  setTimeout(() => speakWord(celebrationMessage(pic)), 900);
  const overlay = document.createElement('div');
  overlay.className = 'celebration';
  overlay.id = 'celebration';
  overlay.innerHTML = `
    <div class="celebration-content">
      <img class="celebration-picture" alt="">
      <h2>Amazing!</h2>
      <p class="celebration-title"></p>
      <p class="celebration-artist"></p>
      <button onclick="dismissCelebration()">New Picture</button>
    </div>`;
  const img = overlay.querySelector('.celebration-picture');
  img.src = mysteryPictureSrc(currentMysteryIndex);
  img.alt = pic.name;
  overlay.querySelector('.celebration-title').textContent = pic.name;
  overlay.querySelector('.celebration-artist').textContent = (pic.licence ? 'Photo: ' : 'by ') + pic.artist;
  document.body.appendChild(overlay);
}

function dismissCelebration() {
  const el = document.getElementById('celebration');
  if (el) el.remove();
  pickMysteryPicture();
  renderMysteryPicture();
  renderOverlayCells();
  handleNext();
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

  const wordCount = allWords.filter(wordIsKnown).length;

  let html = `
    <div class="settings-header">
      <h2>Known Sounds</h2>
      <button class="close-btn" onclick="closeSettings()">&times;</button>
    </div>
    <div class="word-count" id="settings-word-count">${wordCount} words available</div>`;

  for (const group of visibleGroups) {
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
      html += `<button class="sound-chip${active}" data-sound="${sound}" onclick="toggleSound('${sound}')">${chipLabel(sound)}</button>`;
    }
    html += `</div></div>`;
  }

  panel.innerHTML = html;
  document.body.appendChild(panel);
}

// "ow|cow" shows as "ow" with a small "cow" hint.
function chipLabel(sound) {
  const [text, hint] = sound.split('|');
  return hint ? `${text}<span class="chip-hint">${hint}</span>` : text;
}

function updateSettingsUI() {
  const wordCount = allWords.filter(wordIsKnown).length;
  const wcEl = document.getElementById('settings-word-count');
  if (wcEl) wcEl.textContent = `${wordCount} words available`;

  document.querySelectorAll('.sound-chip[data-sound]').forEach(chip => {
    chip.classList.toggle('active', knownSounds.has(chip.dataset.sound));
  });

  for (const group of visibleGroups) {
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
  const group = visibleGroups.find(g => g.name === groupName);
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

// ---- Voice ----
function speakWord(word) {
  if (!voiceEnabled || !window.speechSynthesis) return;
  const utter = new SpeechSynthesisUtterance(word);
  utter.lang = 'en-GB';
  utter.rate = 0.8;
  speechSynthesis.speak(utter);
}

function toggleVoice() {
  voiceEnabled = !voiceEnabled;
  localStorage.setItem('voiceEnabled', voiceEnabled);
  updateVoiceButton();
}

function updateVoiceButton() {
  document.getElementById('voice-btn').textContent = voiceEnabled ? '🔊' : '🔇';
}

// ---- Event Listeners ----
document.addEventListener('DOMContentLoaded', () => {
  init();
  updateVoiceButton();

  document.getElementById('voice-btn').addEventListener('click', toggleVoice);
  document.getElementById('settings-btn').addEventListener('click', openSettings);
});
