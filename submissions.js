// submissions.js — post-game stats and coined words for each completed puzzle day
// Add a new entry here each day after submissions close.
// Format:
//   id        — puzzle number (matches id in puzzles.js)
//   topScore  — highest score submitted that day
//   mostWords — most unique words found by one player
//   note      — optional correction/context note shown in archive
//   coins     — array of { word, def, author? } coined-word submissions
//
// TEMPLATE (copy, fill in, paste at TOP of array):
//
// {
//   id: 7,
//   topScore: 0,
//   mostWords: 0,
//   coins: [
//     { word: 'example', def: 'definition here', author: 'anonymous' },
//   ],
// },

const SUBMISSIONS = [

  // ↓↓↓ PASTE NEW ENTRIES AT THE TOP ↓↓↓

  {
    id: 6,
    topScore: 90,
    mostWords: 60,
    coins: [
      { word: 'abtracterration', def: 'something pulled apart by wandering', author: 'september' },
    ],
  },
  {
    id: 5,
    topScore: 110,
    mostWords: 100,
    coins: [
      { word: 'Perspeculation', def: 'Being able to see the possible outcomes of something', author: 'anonymous' },
      { word: 'Comperspectant', def: 'Seeing things the same way; sharing a viewpoint', author: 'Gammarad' },
    ],
  },
  {
    id: 4,
    topScore: 83,
    mostWords: 166,
    coins: [
      { word: 'recompensieve', def: 'to ponder the things we owe each other' },
    ],
  },
  {
    id: 3,
    topScore: 153,
    coins: [
      { word: 'artifictitious', def: 'Something made by a fictional character' },
      { word: 'artefactual', def: 'A fact that has since been disproven by science' },
      { word: 'farticle', def: 'a poorly written article' },
      { word: 'defarticial', def: 'something that is really really unpleasantly artificial' },
      { word: 'artstruct', def: 'the skillful rearrangement of parts into a structure', author: 'anonymous' },
    ],
  },
  {
    id: 2,
    topScore: 54,
    coins: [
      { word: 'corpsacle', def: 'a debacle involving lots of dead bodies', author: 'anonymous' },
    ],
  },
  {
    id: 1,
    topScore: 82,
    note: 'Note: the version live on Day 1 incorrectly listed FUS- (to pour, from Latin fundere) as a root. FUSC- (dark, from Latin fuscus) and FUS- are unrelated — they just look alike. The archive reflects the corrected etymology.',
    coins: [
      { word: 'obfuscnym', def: 'a name that blocks understanding of the thing it\'s naming', author: 'anonymous' },
    ],
  },

  // ↑↑↑ PASTE NEW ENTRIES AT THE TOP ↑↑↑

];
