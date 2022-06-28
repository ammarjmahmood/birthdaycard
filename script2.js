const targetWords = [
  "absolute",
  "birthday",
]

const dictionary = [
  "absolute",
  "birthday",
  "absolute",
  "abstract",
  "academic",
  "accepted",
  "accident",
  "accuracy",
  "accurate",
  "achieved",
  "acquired",
  "activity",
  "actually",
  "addition",
  "adequate",
  "adjacent",
  "adjusted",
  "advanced",
  "advisory",
  "advocate",
  "affected",
  "aircraft",
  "alliance",
  "although",
  "aluminum",
  "analysis",
  "announce",
  "anything",
  "anywhere",
  "apparent",
  "appendix",
  "approach",
  "approval",
  "argument",
  "artistic",
  "assembly",
  "assuming",
  "athletic",
  "attached",
  "attitude",
  "attorney",
  "audience",
  "autonomy",
  "aviation",
  "bachelor",
  "bacteria",
  "baseball",
  "bathroom",
  "becoming",
  "benjamin",
  "birthday",
  "boundary",
  "breaking",
  "breeding",
  "building",
  "bulletin",
  "business",
  "calendar",
  "campaign",
  "capacity",
  "casualty",
  "catching",
  "category",
  "catholic",
  "cautious",
  "cellular",
  "ceremony",
  "chairman",
  "champion",
  "chemical",
  "children",
  "circular",
  "civilian",
  "clearing",
  "clinical",
  "clothing",
  "collapse",
  "colonial",
  "colorful",
  "commence",
  "commerce",
  "complain",
  "complete",
  "composed",
  "compound",
  "comprise",
  "computer",
  "conclude",
  "concrete",
  "conflict",
  "confused",
  "congress",
  "consider",
  "constant",
  "consumer",
  "continue",
  "contract",
  "contrary",
  "contrast",
  "convince",
  "corridor",
  "coverage",
  "covering",
  "creation",
  "creative",
  "criminal",
  "critical",
  "crossing",
  "cultural",
  "currency",
  "customer",
  "database",
  "daughter",
  "daylight",
  "deadline",
  "deciding",
  "decision",
  "decrease",
  "deferred",
  "definite",
  "delicate",
  "delivery",
  "describe",
  "designer",
  "detailed",
  "diabetes",
  "dialogue",
  "diameter",
  "directly",
  "director",
  "disabled",
  "disaster",
  "disclose",
  "discount",
  "discover",
  "disorder",
  "disposal",
  "distance",
  "distinct",
  "district",
  "dividend",
  "division",
  "doctrine",
  "document",
  "domestic",
  "dominant",
  "dominate",
  "doubtful",
  "dramatic",
  "dressing",
  "dropping",
  "duration",
  "dynamics",
  "earnings",
  "economic",
  "educated",
  "efficacy",
  "eighteen",
  "election",
  "electric",
  "eligible",
  "emerging",
  "emphasis",
  "employee",
  "endeavor",
  "engaging",
  "engineer",
  "enormous",
  "entirely",
  "entrance",
  "envelope",
  "equality",
  "equation",
  "estimate",
  "evaluate",
  "eventual",
  "everyday",
  "everyone",
  "evidence",
  "exchange",
  "exciting",
  "exercise",
  "explicit",
  "exposure",
  "extended",
  "external",
  "facility",
  "familiar",
  "featured",
  "feedback",
  "festival",
  "finished",
  "firewall",
  "flagship",
  "flexible",
  "floating",
  "football",
  "foothill",
  "forecast",
  "foremost",
  "formerly",
  "fourteen",
  "fraction",
  "franklin",
  "frequent",
  "friendly",
  "frontier",
  "function",
  "generate",
  "generous",
  "genomics",
  "goodwill",
  "governor",
  "graduate",
  "graphics",
  "grateful",
  "guardian",
  "guidance",
  "handling",
  "hardware",
  "heritage",
  "highland",
  "historic",
  "homeless",
  "homepage",
  "hospital",
  "humanity",
  "identify",
  "identity",
  "ideology",
  "imperial",
  "incident",
  "included",
  "increase",
  "indicate",
  "indirect",
  "industry",
  "informal",
  "informed",
  "inherent",
  "initiate",
  "innocent",
  "inspired",
  "instance",
  "integral",
  "intended",
  "interact",
  "interest",
  "interior",
  "internal",
  "interval",
  "intimate",
  "intranet",
  "invasion",
  "involved",
  "isolated",
  "judgment",
  "judicial",
  "junction",
  "keyboard",
  "landlord",
  "language",
  "laughter",
  "learning",
  "leverage",
  "lifetime",
  "lighting",
  "likewise",
  "limiting",
  "literary",
  "location",
  "magazine",
  "magnetic",
  "maintain",
  "majority",
  "marginal",
  "marriage",
  "material",
  "maturity",
  "maximize",
  "meantime",
  "measured",
  "medicine",
  "medieval",
  "memorial",
  "merchant",
  "midnight",
  "military",
  "minimize",
  "minister",
  "ministry",
  "minority",
  "mobility",
  "modeling",
  "moderate",
  "momentum",
  "monetary",
  "moreover",
  "mortgage",
  "mountain",
  "mounting",
  "movement",
  "multiple",
  "national",
  "negative",
  "nineteen",
  "northern",
  "notebook",
  "numerous",
  "observer",
  "occasion",
  "offering",
  "official",
  "offshore",
  "operator",
  "opponent",
  "opposite",
  "optimism",
  "optional",
  "ordinary",
  "organize",
  "original",
  "overcome",
  "overhead",
  "overseas",
  "overview",
  "painting",
  "parallel",
  "parental",
  "patented",
  "patience",
  "peaceful",
  "periodic",
  "personal",
  "persuade",
  "petition",
  "physical",
  "pipeline",
  "platform",
  "pleasant",
  "pleasure",
  "politics",
  "portable",
  "portrait",
  "position",
  "positive",
  "possible",
  "powerful",
  "practice",
  "precious",
  "pregnant",
  "presence",
  "preserve",
  "pressing",
  "pressure",
  "previous",
  "princess",
  "printing",
  "priority",
  "probable",
  "probably",
  "producer",
  "profound",
  "progress",
  "property",
  "proposal",
  "prospect",
  "protocol",
  "provided",
  "provider",
  "province",
  "publicly",
  "purchase",
  "pursuant",
  "quantity",
  "question",
  "rational",
  "reaction",
  "received",
  "receiver",
  "recovery",
  "regional",
  "register",
  "relation",
  "relative",
  "relevant",
  "reliable",
  "reliance",
  "religion",
  "remember",
  "renowned",
  "repeated",
  "reporter",
  "republic",
  "required",
  "research",
  "reserved",
  "resident",
  "resigned",
  "resource",
  "response",
  "restrict",
  "revision",
  "rigorous",
  "romantic",
  "sampling",
  "scenario",
  "schedule",
  "scrutiny",
  "seasonal",
  "secondly",
  "security",
  "sensible",
  "sentence",
  "separate",
  "sequence",
  "sergeant",
  "shipping",
  "shortage",
  "shoulder",
  "simplify",
  "situated",
  "slightly",
  "software",
  "solution",
  "somebody",
  "somewhat",
  "southern",
  "speaking",
  "specific",
  "spectrum",
  "sporting",
  "standard",
  "standing",
  "standout",
  "sterling",
  "straight",
  "strategy",
  "strength",
  "striking",
  "struggle",
  "stunning",
  "suburban",
  "suitable",
  "superior",
  "supposed",
  "surgical",
  "surprise",
  "survival",
  "sweeping",
  "swimming",
  "symbolic",
  "sympathy",
  "syndrome",
  "tactical",
  "tailored",
  "takeover",
  "tangible",
  "taxation",
  "taxpayer",
  "teaching",
  "tendency",
  "terminal",
  "terrible",
  "thinking",
  "thirteen",
  "thorough",
  "thousand",
  "together",
  "tomorrow",
  "touching",
  "tracking",
  "training",
  "transfer",
  "traveled",
  "treasury",
  "triangle",
  "tropical",
  "turnover",
  "ultimate",
  "umbrella",
  "universe",
  "unlawful",
  "unlikely",
  "valuable",
  "variable",
  "vertical",
  "victoria",
  "violence",
  "volatile",
  "warranty",
  "weakness",
  "weighted",
  "whatever",
  "whenever",
  "wherever",
  "wildlife",
  "wireless",
  "withdraw",
  "woodland",
  "workshop",
  "yourself",
]

// CONSTANTS
const WORD_LENGTH = 8;
const FLIP_ANIMATION_DURATION = 750
const DANCE_ANIMATION_DURATION = 500

const keyboard = document.querySelector("[data-keyboard]") // get the keyboard
const alertContainer = document.querySelector("[data-alert-container]") // get the empty div container for alerts
const guessGrid = document.querySelector("[data-guess-grid]") // get the grid of tiles
const offsetFromDate = new Date(2022, 0, 1); // starting date
const msOffset = Date.now() - offsetFromDate // get difference in milliseconds
const dayOffset = msOffset / 1000 / 60 / 60 / 24 // convert to days
// const targetWord = targetWords[Math.floor(dayOffset)] // get the word in the array at that index, and every day, a new index
const targetWord = targetWords[1] // get the word in the array at that index, and every day, a new index

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
    showAlert("WWINNER WINNER CHICKEN DINNER!", 5000)
    showAlert("YOU WILL NOW BE REDIRECTED TO THE NEXT WORDLE TO SOLVE FOR THE SENTANCE", 5000)
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
  location.replace("index3.html")
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