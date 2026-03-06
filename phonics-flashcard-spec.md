# Phonics Flashcard App — Claude Code Spec

## Overview

A simple, clean phonics flashcard app for young children. Shows a word in large text, the child taps to reveal a picture of that word. Light gamification via a mystery picture that reveals progressively as the child works through cards.

The key design principle: **only show words the child can fully decode.** The parent marks which phonics sounds the child knows, and the app filters to words composed entirely of known sounds. This means the child should be able to read every word they're shown, building confidence rather than frustration.

Built as a single-page React app (Vite + React). Should work well on tablets and phones.

## Core Flow

1. A flashcard shows a **word** in large, friendly text
2. Child taps the card to **reveal a picture** of the word (emoji — see Images section)
3. Child taps "Next" to advance to the next card
4. After every 5 cards, a cell of a **mystery picture grid** is revealed as a reward
5. When all 25 cells are revealed, the full picture is shown with a celebration, and a new mystery picture begins

## Data Model

### Word Entries

Each word is tagged with **all** of its component phonics sounds — not just a "featured" sound. This is what makes the decodability filtering work.

```js
{ word: "ship", sounds: ["sh", "i", "p"], emoji: "🚢" }
{ word: "fish", sounds: ["f", "i", "sh"], emoji: "🐟" }
{ word: "cheese", sounds: ["ch", "ee", "z"], emoji: "🧀" }
{ word: "moon", sounds: ["m", "oo", "n"], emoji: "🌙" }
{ word: "train", sounds: ["t", "r", "ai", "n"], emoji: "🚂" }
{ word: "cake", sounds: ["c", "a_e", "k"], emoji: "🎂" }
```

### Filtering Logic

A word is included in the deck if and only if **every sound in its `sounds` array is in the user's "known sounds" set**:

```js
const deck = allWords.filter(w => w.sounds.every(s => knownSounds.has(s)))
```

This means a child who knows {s, a, t, p, i, n} gets "sat", "pin", "tap", etc. — but not "ship" until "sh" is ticked off.

### Sound Groups

Organise sounds into progressive phases so the settings screen isn't overwhelming. Roughly following UK phonics phases:

**Phase 2 — Single letters:**
s, a, t, p, i, n, m, d, g, o, c, k, ck, e, u, r, h, b, f, l

**Phase 3 — Digraphs & trigraphs:**
sh, ch, th, ng, ai, ee, oo, oa, ar, or, ur, ow, oi, er

**Phase 4 — Consonant clusters (blends):**
bl, br, cl, cr, dr, fl, fr, gl, gr, pl, pr, sc, sk, sl, sm, sn, sp, st, sw, tr

**Phase 5 — Split digraphs & alternatives:**
a_e, i_e, o_e, u_e, ea, ie, ou, ey, ph, wh

Present these as collapsible groups in settings. Allow toggling an entire phase at once as well as individual sounds.

### Word List Requirements

Aim for **5-8 words per sound group**, but every word must be tagged with ALL its component sounds. Use simple, concrete nouns and verbs that a 4-6 year old would know and that have a clear emoji representation.

**Important:** Get the sound decomposition right. "Fish" is [f, i, sh] not [f, i, s, h]. "Cake" is [c, a_e, k] — the split digraph is one sound. This is the trickiest part of the data and worth getting right. When in doubt, think about how a child would sound the word out.

Store word data in a separate `wordData.js` file for easy editing.

## Settings / Known Sounds Selection

Accessed via a **gear icon** in the top corner of the main screen. Opens as a **slide-up panel** overlaying the flashcard area (not a separate page). Tapping outside or hitting a close button dismisses it.

### Layout

- **Word count** at the top: "34 words available" — updates live as sounds are toggled
- Sounds grouped under **phase headings** (Phase 2, Phase 3, etc.)
- Tapping a **phase heading** toggles all sounds in that phase on/off
- Each sound shown as a **chip/button** — tap to toggle
  - Active: filled background (e.g. teal), clearly "on"
  - Inactive: grey outline, clearly "off"
- No save button — changes take effect immediately

### Storage

- Store the set of known sounds in **localStorage** as a JSON array
- Load on startup; update on every toggle
- Key: `knownSounds`
- Default (first visit): Phase 2 sounds all selected, everything else off

## Gamification: Mystery Picture Reveal

- A 5×5 grid (25 cells) starts fully hidden
- Every 5 cards completed, one cell is revealed showing a piece of the mystery picture
- The "mystery picture" is just a large emoji rendered across the grid, or a set of themed emoji cells (e.g. all animal emoji for an "animal" mystery picture)
- Keep a small pool of ~10 mystery pictures that rotate
- When all 25 cells are revealed: celebration animation + "New Picture" button
- Show a small progress bar above the flashcard: "3/5 until next reveal"

Keep this lightweight — it should feel rewarding but not distract from the actual phonics practice.

## Images / Pictures

**Default approach: emoji.** Every word maps to an emoji. This is zero-dependency, works everywhere, and kids recognise them easily.

**Optional future enhancement:** If you want to upgrade to real images later, the data structure supports swapping `emoji` for an `image` URL field. Could use an AI image generation script at build time to create simple cartoon illustrations. But start with emoji — ship it simple.

## Design Guidelines

- **Font:** Use a rounded, child-friendly font — Fredoka or Nunito from Google Fonts
- **Colours:** Warm, cheerful palette. Coral/orange primary, teal secondary, cream background. Avoid harsh contrast.
- **Card:** Large, centered, with generous padding. The word should be BIG (3rem+). The highlighted sound should be a clearly different colour, with a subtle underline.
- **Touch targets:** Everything should be large and easy to tap. Minimum 44px touch targets.
- **Animations:** Subtle but delightful. Card flip or fade for picture reveal. Pop animation for grid cell reveals. Keep it CSS-based where possible.
- **Layout:** Single column, max-width ~500px, centered. Works on phone and tablet.

## Tech Stack

Plain HTML, CSS, and vanilla JavaScript. No frameworks, no build step.

- Single HTML page (or Jinja template if serving from Flask, but there's no real need for a backend here)
- Vanilla JS for all interactivity (card flipping, filtering, settings panel, localStorage)
- CSS for animations and layout
- No npm, no bundler, no React
- Deploy as a static file anywhere, or drop into an existing Flask app as a template

If for any reason a backend is needed later (e.g. storing progress across devices), use Flask + Jinja. But start without it — everything runs client-side.

## File Structure

```
/
  index.html            # Single page — structure, styles, and app shell
  app.js                # All interactivity — card logic, settings, mystery picture
  wordData.js           # Word lists with sound decompositions
  mysteryPictures.js    # Pool of mystery picture configs
  style.css             # Styles
```

Keep it flat. No build step, no src directory.

## Nice-to-haves (don't build unless quick)

- **Text-to-speech:** Use the Web Speech API to read the word aloud when tapped. Simple `speechSynthesis.speak()` call. Add a small speaker icon button.
- **Shuffle mode:** Randomise card order within the active deck (should probably be the default honestly).
- **Session counter:** "You've done 23 words today!" — just a small counter, no pressure.

## What NOT to build

- No accounts / auth
- No backend
- No complex scoring or streaks
- No timed modes or pressure mechanics
- No multi-step onboarding — it should be immediately usable
