const targetWords = [
  "worddd"
]

const dictionary = [
  "worddd",
  "potter",
  "malfoy",
  "hagrid",
  "abroad",
  "accept",
  "access",
  "across",
  "acting",
  "action",
  "active",
  "actual",
  "advice",
  "advise",
  "affect",
  "afford",
  "afraid",
  "agency",
  "agenda",
  "almost",
  "always",
  "amount",
  "animal",
  "annual",
  "answer",
  "anyone",
  "anyway",
  "appeal",
  "appear",
  "around",
  "arrive",
  "artist",
  "aspect",
  "assess",
  "assist",
  "assume",
  "attack",
  "attend",
  "august",
  "author",
  "avenue",
  "backed",
  "barely",
  "battle",
  "beauty",
  "became",
  "become",
  "before",
  "behalf",
  "behind",
  "belief",
  "belong",
  "berlin",
  "better",
  "beyond",
  "bishop",
  "border",
  "bottle",
  "bottom",
  "bought",
  "branch",
  "breath",
  "bridge",
  "bright",
  "broken",
  "budget",
  "burden",
  "bureau",
  "button",
  "camera",
  "cancer",
  "cannot",
  "carbon",
  "career",
  "castle",
  "casual",
  "caught",
  "center",
  "centre",
  "chance",
  "change",
  "charge",
  "choice",
  "choose",
  "chosen",
  "church",
  "circle",
  "client",
  "closed",
  "closer",
  "coffee",
  "column",
  "combat",
  "coming",
  "common",
  "comply",
  "copper",
  "corner",
  "costly",
  "county",
  "couple",
  "course",
  "covers",
  "create",
  "credit",
  "crisis",
  "custom",
  "damage",
  "danger",
  "dealer",
  "debate",
  "decade",
  "decide",
  "defeat",
  "defend",
  "define",
  "degree",
  "demand",
  "depend",
  "deputy",
  "desert",
  "design",
  "desire",
  "detail",
  "detect",
  "device",
  "differ",
  "dinner",
  "direct",
  "doctor",
  "dollar",
  "domain",
  "double",
  "driven",
  "driver",
  "during",
  "easily",
  "eating",
  "editor",
  "effect",
  "effort",
  "eighth",
  "either",
  "eleven",
  "emerge",
  "empire",
  "employ",
  "enable",
  "ending",
  "energy",
  "engage",
  "engine",
  "enough",
  "ensure",
  "entire",
  "entity",
  "equity",
  "escape",
  "estate",
  "ethnic",
  "exceed",
  "except",
  "excess",
  "expand",
  "expect",
  "expert",
  "export",
  "extend",
  "extent",
  "fabric",
  "facing",
  "factor",
  "failed",
  "fairly",
  "fallen",
  "family",
  "famous",
  "father",
  "fellow",
  "female",
  "figure",
  "filing",
  "finger",
  "finish",
  "fiscal",
  "flight",
  "flying",
  "follow",
  "forced",
  "forest",
  "forget",
  "formal",
  "format",
  "former",
  "foster",
  "fought",
  "fourth",
  "french",
  "friend",
  "future",
  "garden",
  "gather",
  "gender",
  "german",
  "global",
  "golden",
  "ground",
  "growth",
  "guilty",
  "handed",
  "handle",
  "happen",
  "hardly",
  "headed",
  "health",
  "height",
  "hidden",
  "holder",
  "honest",
  "impact",
  "import",
  "income",
  "indeed",
  "injury",
  "inside",
  "intend",
  "intent",
  "invest",
  "island",
  "itself",
  "jersey",
  "joseph",
  "junior",
  "killed",
  "labour",
  "latest",
  "latter",
  "launch",
  "lawyer",
  "leader",
  "league",
  "leaves",
  "legacy",
  "length",
  "lesson",
  "letter",
  "lights",
  "likely",
  "linked",
  "liquid",
  "listen",
  "little",
  "living",
  "losing",
  "lucent",
  "luxury",
  "mainly",
  "making",
  "manage",
  "manner",
  "manual",
  "margin",
  "marine",
  "marked",
  "market",
  "martin",
  "master",
  "matter",
  "mature",
  "medium",
  "member",
  "memory",
  "mental",
  "merely",
  "merger",
  "method",
  "middle",
  "miller",
  "mining",
  "minute",
  "mirror",
  "mobile",
  "modern",
  "modest",
  "module",
  "moment",
  "morris",
  "mostly",
  "mother",
  "motion",
  "moving",
  "murder",
  "museum",
  "mutual",
  "myself",
  "narrow",
  "nation",
  "native",
  "nature",
  "nearby",
  "nearly",
  "nights",
  "nobody",
  "normal",
  "notice",
  "notion",
  "number",
  "object",
  "obtain",
  "office",
  "offset",
  "online",
  "option",
  "orange",
  "origin",
  "output",
  "oxford",
  "packed",
  "palace",
  "parent",
  "partly",
  "patent",
  "people",
  "period",
  "permit",
  "person",
  "phrase",
  "picked",
  "planet",
  "player",
  "please",
  "plenty",
  "pocket",
  "police",
  "policy",
  "prefer",
  "pretty",
  "prince",
  "prison",
  "profit",
  "proper",
  "proven",
  "public",
  "pursue",
  "raised",
  "random",
  "rarely",
  "rather",
  "rating",
  "reader",
  "really",
  "reason",
  "recall",
  "recent",
  "record",
  "reduce",
  "reform",
  "regard",
  "regime",
  "region",
  "relate",
  "relief",
  "remain",
  "remote",
  "remove",
  "repair",
  "repeat",
  "replay",
  "report",
  "rescue",
  "resort",
  "result",
  "retail",
  "retain",
  "return",
  "reveal",
  "review",
  "reward",
  "riding",
  "rising",
  "robust",
  "ruling",
  "safety",
  "salary",
  "sample",
  "saving",
  "saying",
  "scheme",
  "school",
  "screen",
  "search",
  "season",
  "second",
  "secret",
  "sector",
  "secure",
  "seeing",
  "select",
  "seller",
  "senior",
  "series",
  "server",
  "settle",
  "severe",
  "sexual",
  "should",
  "signal",
  "signed",
  "silent",
  "silver",
  "simple",
  "simply",
  "single",
  "sister",
  "slight",
  "smooth",
  "social",
  "solely",
  "sought",
  "source",
  "soviet",
  "speech",
  "spirit",
  "spoken",
  "spread",
  "spring",
  "square",
  "stable",
  "status",
  "steady",
  "stolen",
  "strain",
  "stream",
  "street",
  "stress",
  "strict",
  "strike",
  "string",
  "strong",
  "struck",
  "studio",
  "submit",
  "sudden",
  "suffer",
  "summer",
  "summit",
  "supply",
  "surely",
  "survey",
  "switch",
  "symbol",
  "system",
  "taking",
  "talent",
  "target",
  "taught",
  "tenant",
  "tender",
  "tennis",
  "thanks",
  "theory",
  "thirty",
  "though",
  "threat",
  "thrown",
  "ticket",
  "timely",
  "timing",
  "tissue",
  "toward",
  "travel",
  "treaty",
  "trying",
  "twelve",
  "twenty",
  "unable",
  "unique",
  "united",
  "unless",
  "unlike",
  "update",
  "useful",
  "valley",
  "varied",
  "vendor",
  "versus",
  "victim",
  "vision",
  "visual",
  "volume",
  "walker",
  "wealth",
  "weekly",
  "weight",
  "wholly",
  "window",
  "winner",
  "winter",
  "within",
  "wonder",
  "worker",
  "wright",
  "writer",
  "yellow",
]

// CONSTANTS
const WORD_LENGTH = 6;
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