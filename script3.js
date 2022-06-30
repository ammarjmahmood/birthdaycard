const targetWords = [
  "ninja"
]

const dictionary = [
  "ninja",
  "about",
  "above",
  "abuse",
  "actor",
  "acute",
  "admit",
  "adopt",
  "adult",
  "after",
  "again",
  "agent",
  "agree",
  "ahead",
  "alarm",
  "album",
  "alert",
  "alike",
  "alive",
  "allow",
  "alone",
  "along",
  "alter",
  "among",
  "anger",
  "angle",
  "angry",
  "apart",
  "apple",
  "apply",
  "arena",
  "argue",
  "arise",
  "array",
  "aside",
  "asset",
  "audio",
  "audit",
  "avoid",
  "award",
  "aware",
  "badly",
  "baker",
  "bases",
  "basic",
  "basis",
  "beach",
  "began",
  "begin",
  "begun",
  "being",
  "below",
  "bench",
  "billy",
  "birth",
  "black",
  "blame",
  "blind",
  "block",
  "blood",
  "board",
  "boost",
  "booth",
  "bound",
  "brain",
  "brand",
  "bread",
  "break",
  "breed",
  "brief",
  "bring",
  "broad",
  "broke",
  "brown",
  "build",
  "built",
  "buyer",
  "cable",
  "calif",
  "carry",
  "catch",
  "cause",
  "chain",
  "chair",
  "chart",
  "chase",
  "cheap",
  "check",
  "chest",
  "chief",
  "child",
  "china",
  "chose",
  "civil",
  "claim",
  "class",
  "clean",
  "clear",
  "click",
  "clock",
  "close",
  "coach",
  "coast",
  "could",
  "count",
  "court",
  "cover",
  "craft",
  "crash",
  "cream",
  "crime",
  "cross",
  "crowd",
  "crown",
  "curve",
  "cycle",
  "daily",
  "dance",
  "dated",
  "dealt",
  "death",
  "debut",
  "delay",
  "depth",
  "doing",
  "doubt",
  "dozen",
  "draft",
  "drama",
  "drawn",
  "dream",
  "dress",
  "drill",
  "drink",
  "drive",
  "drove",
  "dying",
  "eager",
  "early",
  "earth",
  "eight",
  "elite",
  "empty",
  "enemy",
  "enjoy",
  "enter",
  "entry",
  "equal",
  "error",
  "event",
  "every",
  "exact",
  "exist",
  "extra",
  "faith",
  "false",
  "fault",
  "fiber",
  "field",
  "fifth",
  "fifty",
  "fight",
  "final",
  "first",
  "fixed",
  "flash",
  "fleet",
  "floor",
  "fluid",
  "focus",
  "force",
  "forth",
  "forty",
  "forum",
  "found",
  "frame",
  "frank",
  "fraud",
  "fresh",
  "front",
  "fruit",
  "fully",
  "funny",
  "giant",
  "given",
  "glass",
  "globe",
  "going",
  "grace",
  "grade",
  "grand",
  "grant",
  "grass",
  "great",
  "green",
  "gross",
  "group",
  "grown",
  "guard",
  "guess",
  "guest",
  "guide",
  "happy",
  "harry",
  "heart",
  "heavy",
  "hence",
  "henry",
  "horse",
  "hotel",
  "house",
  "human",
  "ideal",
  "image",
  "index",
  "inner",
  "input",
  "issue",
  "japan",
  "jimmy",
  "joint",
  "jones",
  "judge",
  "known",
  "label",
  "large",
  "laser",
  "later",
  "laugh",
  "layer",
  "learn",
  "lease",
  "least",
  "leave",
  "legal",
  "level",
  "lewis",
  "light",
  "limit",
  "links",
  "lives",
  "local",
  "logic",
  "loose",
  "lower",
  "lucky",
  "lunch",
  "lying",
  "magic",
  "major",
  "maker",
  "march",
  "maria",
  "match",
  "maybe",
  "mayor",
  "meant",
  "media",
  "metal",
  "might",
  "minor",
  "minus",
  "mixed",
  "model",
  "money",
  "month",
  "moral",
  "motor",
  "mount",
  "mouse",
  "mouth",
  "movie",
  "music",
  "needs",
  "never",
  "newly",
  "night",
  "noise",
  "north",
  "noted",
  "novel",
  "nurse",
  "occur",
  "ocean",
  "offer",
  "often",
  "order",
  "other",
  "ought",
  "paint",
  "panel",
  "paper",
  "party",
  "peace",
  "peter",
  "phase",
  "phone",
  "photo",
  "piece",
  "pilot",
  "pitch",
  "place",
  "plain",
  "plane",
  "plant",
  "plate",
  "point",
  "pound",
  "power",
  "press",
  "price",
  "pride",
  "prime",
  "print",
  "prior",
  "prize",
  "proof",
  "proud",
  "prove",
  "queen",
  "quick",
  "quiet",
  "quite",
  "radio",
  "raise",
  "range",
  "rapid",
  "ratio",
  "reach",
  "ready",
  "refer",
  "right",
  "rival",
  "river",
  "robin",
  "roger",
  "roman",
  "rough",
  "round",
  "route",
  "royal",
  "rural",
  "scale",
  "scene",
  "scope",
  "score",
  "sense",
  "serve",
  "seven",
  "shall",
  "shape",
  "share",
  "sharp",
  "sheet",
  "shelf",
  "shell",
  "shift",
  "shirt",
  "shock",
  "shoot",
  "short",
  "shown",
  "sight",
  "since",
  "sixth",
  "sixty",
  "sized",
  "skill",
  "sleep",
  "slide",
  "small",
  "smart",
  "smile",
  "smith",
  "smoke",
  "solid",
  "solve",
  "sorry",
  "sound",
  "south",
  "space",
  "spare",
  "speak",
  "speed",
  "spend",
  "spent",
  "split",
  "spoke",
  "sport",
  "staff",
  "stage",
  "stake",
  "stand",
  "start",
  "state",
  "steam",
  "steel",
  "stick",
  "still",
  "stock",
  "stone",
  "stood",
  "store",
  "storm",
  "story",
  "strip",
  "stuck",
  "study",
  "stuff",
  "style",
  "sugar",
  "suite",
  "super",
  "sweet",
  "table",
  "taken",
  "taste",
  "taxes",
  "teach",
  "teeth",
  "terry",
  "texas",
  "thank",
  "theft",
  "their",
  "theme",
  "there",
  "these",
  "thick",
  "thing",
  "think",
  "third",
  "those",
  "three",
  "threw",
  "throw",
  "tight",
  "times",
  "tired",
  "title",
  "today",
  "topic",
  "total",
  "touch",
  "tough",
  "tower",
  "track",
  "trade",
  "train",
  "treat",
  "trend",
  "trial",
  "tried",
  "tries",
  "truck",
  "truly",
  "trust",
  "truth",
  "twice",
  "under",
  "undue",
  "union",
  "unity",
  "until",
  "upper",
  "upset",
  "urban",
  "usage",
  "usual",
  "valid",
  "value",
  "video",
  "virus",
  "visit",
  "vital",
  "voice",
  "waste",
  "watch",
  "water",
  "wheel",
  "where",
  "which",
  "while",
  "white",
  "whole",
  "whose",
  "woman",
  "women",
  "world",
  "worry",
  "worse",
  "worst",
  "worth",
  "would",
  "wound",
  "write",
  "wrong",
  "wrote",
  "yield",
  "young",
  "youth",
]

// CONSTANTS
const WORD_LENGTH = 5;
const FLIP_ANIMATION_DURATION = 750
const DANCE_ANIMATION_DURATION = 500

const keyboard = document.querySelector("[data-keyboard]") // get the keyboard
const alertContainer = document.querySelector("[data-alert-container]") // get the empty div container for alerts
const guessGrid = document.querySelector("[data-guess-grid]") // get the grid of tiles
const offsetFromDate = new Date(2022, 0, 1); // starting date
const msOffset = Date.now() - offsetFromDate // get difference in milliseconds
const dayOffset = msOffset / 1000 / 60 / 60 / 24 // convert to days
// const targetWord = targetWords[Math.floor(dayOffset)] // get the word in the array at that index, and every day, a new index
const targetWord = targetWords[0] // get the word in the array at that index, and every day, a new index

startInteraction()

function startInteraction() { // start listening for clicks and keypresses
  document.addEventListener("click", handleMouseClick) 
  document.addEventListener("keydown", handleKeyPress)
}

function stopInteraction() { // remove the event listeners for clicks and keypresses, effectively making the user unable to interact or type anything
  document.removeEventListener("click", handleMouseClick)
  document.removeEventListener("keydown", handleKeyPress)
}

function handleMouseClick(e) {
  if (e.target.matches("[data-key")) { // if event target is a key, press that key
    pressKey(e.target.dataset.key)
    return
  }

  if (e.target.matches("[data-enter]")) { // if user clicks enter, submit the guess
    submitGuess()
    return
  }

  if (e.target.matches("[data-delete]")) { // if user clicks delete, remove that key
    deleteKey()
    return
  }
}

function handleKeyPress(e) {
  if (e.key === "Enter") { // if the key is enter, submit guess
    submitGuess()
    return
  }
  
  if (e.key === "Backspace" || e.key === "Delete") { // if user presses backspace or delete, delete key
    deleteKey()
  }

  if (e.key.match(/^[a-z]$/)) { // regex for one single letter between a and z
    pressKey(e.key)
    return
  }
}

function pressKey(key) { // add key to first tile in grid
  const activeTiles = getActiveTiles() // get array of active tiles
  if (activeTiles.length >= WORD_LENGTH) return // make sure that user cannot keep typing after 5 letters
  const nextTile = guessGrid.querySelector(":not([data-letter])") // returns the first tile that doesn't have a value
  nextTile.dataset.letter = key.toLowerCase() // add the letter to the tile's dataset
  nextTile.textContent = key // make the html the key
  nextTile.dataset.state = "active" // set it to active
}

function deleteKey() {
  const activeTiles = getActiveTiles() // get array of active tiles
  const lastTile = activeTiles[activeTiles.length - 1] // get the last active tile
  if (lastTile === null) return // if that tile doesn't have any content, return
  lastTile.textContent = "" // set the text content to an empty string
  delete lastTile.dataset.state // delete active state
  delete lastTile.dataset.letter // delete letter dataset
}

function getActiveTiles() {
  return guessGrid.querySelectorAll('[data-state="active"]')
    // return all the tiles that have the state of active
}

function submitGuess() {
  const activeTiles = [...getActiveTiles()] // get the array of active tiles
  if (activeTiles.length !== WORD_LENGTH) { // if the guess isn't long enough, can't submit it!
    showAlert("Not enough letters!")
    shakeTiles(activeTiles)
    return
  }

  const guess = activeTiles.reduce((word, tile) => { // sum the array of individual letters into a string
    return word + tile.dataset.letter
  }, "") // returns a string
  
  if (!dictionary.includes(guess)) { // when the guess isn't a real word
    showAlert("Not in word list!")
    shakeTiles(activeTiles)
    return
  }

  stopInteraction()
  activeTiles.forEach((...params) => flipTile(...params, guess)) // flip tile animation
}

function flipTile(tile, index, array, guess) {
  const letter = tile.dataset.letter
  const key = keyboard.querySelector(`[data-key="${letter}"i]`) // get each key - the i makes it case insensitive
  setTimeout(() => {
    tile.classList.add("flip")
  }, index * FLIP_ANIMATION_DURATION / 2)

  tile.addEventListener("transitionend", () => {
    tile.classList.remove("flip") // remvoe flip class for animation
    if (targetWord[index] === letter) {
      tile.dataset.state = "correct"
      key.classList.add("correct") // while flipping, if it's the right location and right letter, add correct class
    } else if (targetWord.includes(letter)) { // otherwise if word includes letter, add wrong location class
      tile.dataset.state = "wrong-location"
      key.classList.add("wrong-location")
    } else { // else add wrong class
      tile.dataset.state = "wrong" 
      key.classList.add("wrong")
    }

    if (index === array.length - 1) { // if last tile, user can start interacting again
      tile.addEventListener("transitionend", () => {
        startInteraction()
        checkWinLose(guess, array)
      }, { once: true})
    }
  }, { once: true })
}

function showAlert(message, duration = 1000) {
  const alert = document.createElement("div") // get the empty alert div
  alert.textContent = message // add message
  alert.classList.add("alert") // add alert class
  alertContainer.prepend(alert) 
  if (duration == null) return
  setTimeout(() => {
    alert.classList.add("hide")
    alert.addEventListener("transitionend", () => {
      alert.remove()
    })
  }, duration)
}

function shakeTiles(tiles) {
  tiles.forEach(tile => {
    tile.classList.add("shake")
    tile.addEventListener("animationend", () => {
      tile.classList.remove("shake")
    }, { once: true })
  })
}

function checkWinLose(guess, tiles) {
  if (guess === targetWord) {
    showAlert("ALL THAT IS LEFT IS YOUR SUPRISE", 5000)
    danceTiles(tiles)
    stopInteraction()
    setTimeout(myFunction, 5000);
    return
  }

  const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])") // get all empty tiles

  if (remainingTiles.length === 0) { // if no more remaining tiles
    showAlert("🚨LOSER DETECTED!🚨")
    showAlert(`The word was: ${targetWord.toUpperCase()}`, null)
    stopInteraction
  }
}

function myFunction() {
  location.replace("index4.html")
}


function danceTiles(tiles) {
  tiles.forEach((tile, index) => {
    setTimeout(() => {
      tile.classList.add("dance")
      tile.addEventListener(
        "animationend",
        () => {
          tile.classList.remove("dance")
        },
        { once: true }
      )
    }, (index * DANCE_ANIMATION_DURATION) / 5)
  })
}