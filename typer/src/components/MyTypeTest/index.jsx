import React, { useEffect, useState } from "react"
import Typewriter from "typewriter-effect"

// const Words = English.join(" ")
// console.log(`English`, English)
// console.log(`Words`, Words)
const MyTypeTest = (props) => {
  // const [stuff, setStuff] = useState(Words)
  const { isStarted, normal } = props

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
  }

  const English = [
    "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.",
    "we",
    "can",
    "out",
    "other",
    "were",
    "all",
    "there",
    "when",
    "up",
    "use",
    "your",
    "how",
    "said",
    "an",
    "each",
    "she",
    "which",
    "do",
    "their",
    "time",
    "if",
    "will",
    "way",
    "about",
    "many",
    "then",
    "them",
    "write",
    "would",
    "like",
    "so",
    "these",
    "her",
    "long",
    "make",

    "most",
    "people",
    "my",
    "over",
    "know",
    "water",
    "than",
    "call",
    "first",
    "who",
    "may",
    "down",
    "side",
    "been",
    "now",
    "find",
    "any",
    "new",
    "work",
    "part",
    "take",
    "get",
    "place",
    "made",
    "live",
    "where",
    "after",
    "back",
    "little",
    "only",
    "round",
    "man",
    "year",
    "came",
    "show",
    "every",
    "good",
    "me",
    "give",
    "our",
    "under",
    "name",
    "very",
    "through",
    "just",
    "form",
    "sentence",
    "great",
    "think",
    "say",
    "help",
    "low",
    "line",
    "differ",
    "turn",
    "cause",
    "much",
    "mean",
    "before",
    "move",
    "right",
    "boy",
    "old",
    "too",
    "same",
    "tell",
    "does",
    "set",
    "three",
    "want",
    "air",
    "well",
    "also",
    "play",
    "small",
    "end",
    "put",
    "home",
    "read",
    "hand",
    "port",
    "large",
    "spell",
    "add",
    "even",
    "land",
    "here",
    "must",
    "big",
    "high",
    "such",
    "follow",
    "act",
    "why",
    "ask",
    "men",
    "change",
    "went",
    "light",
    "kind",
    "off",
    "need",
    "house",
    "picture",
    "try",
    "us",
    "again",
    "animal",
    "point",
    "mother",
    "world",
    "near",
    "build",
    "self",
    "earth",
    "father",
    "head",
    "stand",
    "own",
    "page",
    "should",
    "country",
    "found",
    "answer",
    "school",
    "grow",
    "study",
    "still",
    "learn",
    "plant",
    "cover",
    "food",
    "sun",
    "four",
    "between",
    "state",
    "keep",
    "eye",
    "never",
    "last",
    "let",
    "thought",
    "city",
    "tree",
    "cross",
    "farm",
    "hard",
    "start",
    "might",

    "late",
    "run",
    "don't",
    "while",
    "press",
    "close",
    "night",
    "real",
    "life",
    "few",
    "north",
    "open",
    "seem",
    "together",
    "next",
    "white",
    "children",
    "begin",
    "got",
    "walk",
    "example",
    "ease",
    "paper",
    "group",
    "always",
    "music",
    "those",
    "both",
    "mark",
    "often",
    "letter",
    "until",
    "mile",
    "river",
    "car",
    "feet",
    "care",
    "second",
    "book",
    "carry",
    "took",
    "science",
    "eat",
    "room",
    "friend",
    "began",
    "idea",
    "fish",
    "mountain",
    "stop",
    "once",
    "base",
    "hear",
    "horse",
    "cut",
    "sure",
    "watch",
    "color",
    "face",
    "wood",
    "main",
    "enough",
    "plain",
    "girl",
    "usual",
    "young",
    "ready",
    "above",
    "ever",

    "list",
    "though",
    "feel",
    "talk",
    "bird",
    "soon",
    "body",
    "dog",
    "family",
    "direct",
    "pose",
    "leave",
    "song",
    "measure",
    "door",
    "product",
    "black",
    "short",
    "numeral",
    "class",
    "wind",
    "question",
    "happen",
    "complete",
    "ship",
    "area",
    "half",
    "rock",
    "order",
    "fire",
    "south",
    "problem",
    "piece",
    "told",
    "knew",
    "pass",
    "since",
    "top",
    "whole",
    "king",
    "space",
    "heard",
    "best",
    "hour",
    "better",
    "true",
    "during",
    "hundred",
    "five",
    "remember",
    "step",
    "early",
    "hold",
    "west",
    "ground",
    "interest",
    "reach",
    "fast",
    "verb",
    "sing",
    "listen",
    "six",
    "table",
    "travel",
    "less",
    "morning",
    "ten",
    "simple",
    "several",
    "vowel",
    "toward",
    "war",
    "lay",
    "against",
    "pattern",
    "slow",
    "center",
    "love",
    "person",
    "money",
    "serve",
    "appear",
    "road",
    "map",
    "rain",
    "rule",
    "govern",
    "pull",
    "cold",
    "notice",
    "voice",
    "unit",
    "power",
    "town",
    "fine",
    "certain",
    "fly",
    "fall",
    "lead",
    "cry",
    "dark",
    "machine",
    "note",
    "wait",
    "plan",
    "figure",
    "star",
    "box",
    "noun",
    "field",
    "rest",
    "correct",
    "able",
    "pound",
    "done",
    "beauty",
    "drive",
    "stood",
    "contain",
    "front",
    "teach",
    "week",
    "final",
    "gave",
    "green",
    "oh",
    "quick",
    "develop",
    "ocean",
    "warm",
    "free",
    "minute",
    "strong",
    "special",
    "mind",
    "behind",
    "clear",
    "tail",
    "produce",
    "fact",
    "street",
    "inch",
    "multiply",
    "nothing",
    "course",
    "stay",
    "wheel",
    "full",
    "force",
    "blue",
    "object",
    "decide",
    "surface",
    "deep",
    "moon",
    "island",
    "foot",
    "system",
    "busy",
    "test",
    "record",
    "boat",
    "common",
    "gold",
    "possible",
    "plane",
    "stead",
    "dry",
    "wonder",
    "laugh",
    "thousand",
    "ago",
    "ran",
    "check",
    "game",
    "shape",
    "equate",
    "hot",
    "miss",
    "brought",
    "heat",
    "snow",
    "tire",
    "bring",
    "yes",
    "distant",
    "fill",
    "east",
    "paint",
    "language",
    "among",
    "grand",
    "ball",
    "yet",
    "wave",
    "drop",
    "heart",
    "am",
    "present",
    "heavy",
    "dance",
    "engine",
    "position",
    "arm",
    "wide",
    "sail",
    "material",
    "size",
    "vary",
    "settle",
    "speak",
    "weight",
    "general",
    "ice",
    "matter",
    "circle",
    "pair",
    "include",
    "divide",
    "syllable",
    "felt",
    "perhaps",
    "pick",
    "sudden",
    "count",
    "square",
    "reason",
    "length",
    "represent",
    "art",
    "subject",
    "region",
    "energy",
    "hunt",
    "probable",
    "bed",
    "brother",
    "egg",
    "ride",
    "cell",
    "believe",
    "fraction",
    "forest",
    "sit",
    "race",
    "window",
    "store",
    "summer",
    "train",
    "sleep",
    "prove",
    "lone",
    "leg",
    "exercise",
    "wall",
    "catch",
    "mount",
    "wish",
    "sky",
    "board",
    "joy",
    "winter",
    "sat",
    "written",
    "wild",
    "instrument",
    "kept",
    "glass",
    "grass",
    "cow",
    "job",
    "edge",
    "sign",
    "visit",
    "past",
    "soft",
    "fun",
    "bright",
    "gas",
    "weather",
    "month",
    "million",
    "bear",
    "finish",
    "happy",
    "hope",
    "flower",
    "clothes",
    "strange",
    "gone",
    "jump",
    "baby",
    "eight",
    "village",
    "meet",
    "root",
    "buy",
    "raise",
    "solve",
    "metal",
    "whether",
    "push",
    "seven",
    "paragraph",
    "third",
    "shall",
    "held",
    "hair",
    "describe",
    "cook",
    "floor",
    "either",
    "result",
    "burn",
    "hill",
    "safe",
    "cat",
    "century",
    "consider",
    "type",
    "law",
    "bit",
    "coast",
    "copy",
    "phrase",
    "silent",
    "tall",
    "sand",
    "soil",
    "roll",
    "temperature",
    "finger",
    "industry",
    "value",
    "fight",
    "lie",
    "beat",
    "excite",
    "natural",
    "view",
    "sense",
    "ear",
    "else",
    "quite",
    "broke",
    "case",
    "middle",
    "kill",
    "son",
    "lake",
    "moment",
    "scale",
    "loud",
    "spring",
    "observe",
    "child",
    "straight",
    "consonant",
    "nation",
    "dictionary",
    "milk",
    "speed",
    "method",
    "organ",
    "pay",
    "age",
    "section",
    "dress",
    "cloud",
    "surprise",
    "quiet",
    "stone",
    "tiny",
    "climb",
    "cool",
    "design",
    "poor",
    "lot",
    "experiment",
    "bottom",
    "key",
    "iron",
    "single",
    "stick",
    "flat",
    "twenty",
    "skin",
    "smile",
    "crease",
    "hole",
    "trade",
    "melody",
    "trip",
    "office",
    "receive",
    "row",
    "mouth",
    "exact",
    "symbol",
    "die",
    "least",
    "trouble",
    "shout",
    "except",
    "wrote",
    "seed",

    "fit",
    "flow",
    "fair",
    "bank",
    "collect",
    "save",
    "control",
    "decimal",
    "gentle",
    "woman",
    "captain",
    "practice",
    "separate",
    "difficult",
    "doctor",
    "please",
    "protect",
    "noon",
    "whose",
    "locate",
    "ring",
    "character",
    "insect",
    "caught",
    "period",
    "indicate",
    "radio",
    "spoke",
    "atom",
    "human",
    "history",
    "effect",
    "electric",
    "expect",
    "crop",
    "modern",
    "element",
    "hit",
    "student",
    "corner",
    "party",
    "supply",
    "bone",
    "rail",
    "imagine",
    "provide",
    "agree",
    "thus",
    "capital",
    "won't",
    "chair",
    "danger",
    "fruit",
    "rich",
    "thick",
    "soldier",
    "process",
    "operate",
    "guess",
    "necessary",
    "sharp",
    "wing",
    "create",
    "neighbor",
    "wash",
    "bat",
    "rather",
    "crowd",
    "corn",
    "compare",
    "poem",
    "string",
    "bell",
    "depend",
    "meat",
    "rub",
    "tube",
    "famous",
    "dollar",
    "stream",
    "fear",
    "sight",
    "thin",
    "triangle",
    "planet",
    "hurry",
    "chief",
    "colony",
    "clock",
    "mine",
    "tie",
    "enter",
    "major",
    "fresh",
    "search",
    "send",
    "yellow",
    "gun",
    "allow",
    "print",
    "dead",
    "spot",
    "desert",
    "suit",
    "current",
    "lift",
    "rose",
    "continue",
    "block",
    "chart",
    "hat",
    "sell",
    "success",
    "company",
    "subtract",
    "event",
    "particular",
    "deal",
    "swim",
    "term",
    "opposite",
    "wife",
    "shoe",
    "shoulder",
    "spread",
    "arrange",
    "camp",
    "invent",
    "cotton",
    "born",
    "determine",
    "quart",
    "nine",
    "truck",
    "noise",
    "level",
    "chance",
    "gather",
    "shop",
    "stretch",
    "throw",
    "shine",
    "property",
    "column",
    "molecule",
    "select",
    "wrong",
    "gray",
    "repeat",
    "require",
    "broad",
    "prepare",
    "salt",
    "nose",
    "plural",
    "anger",
    "claim",
    "continent",
    "oxygen",
    "sugar",
    "death",
    "pretty",
    "skill",
    "women",
    "season",
    "solution",
    "magnet",
    "silver",
    "thank",
    "branch",
    "match",
    "suffix",
    "especially",
    "fig",
    "afraid",
    "huge",
    "sister",
    "steel",
    "discuss",
    "forward",
    "similar",
    "guide",
    "experience",
    "score",
    "apple",
    "bought",
    "led",
    "pitch",
    "coat",
    "mass",
    "card",
    "band",
    "rope",
    "slip",
    "win",
    "dream",
    "evening",
    "condition",
    "feed",
    "tool",
    "total",
    "basic",
    "smell",
    "valley",
    "nor",
    "double",
    "seat",
    "arrive",
    "master",
    "track",
    "parent",
    "shore",
    "division",
    "sheet",
    "substance",
    "favor",
    "connect",
    "post",
    "spend",
    "chord",
    "fat",
    "glad",
    "original",
    "share",
    "station",
    "dad",
    "bread",
    "charge",
    "proper",
    "bar",
    "offer",
    "segment",
    "duck",
    "instant",
    "market",
    "degree",
    "populate",
    "chick",
    "dear",
    "enemy",
    "reply",
    "drink",
    "occur",
    "support",
    "speech",
    "nature",
    "range",
    "steam",
    "motion",
    "path",
    "liquid",
    "log",
    "meant",
    "quotient",
    "teeth",
    "shell",
    "neck",
  ]

  const Code = [
    "import { useTransition } from 'react'",
    "const [isPending, startTransition] = useTransition();",
    "startTransition(()",
    "=>",
    "{isPending && <Spinner />}",
    "setSearchQuery",
    "(",
    "he",
    ");",
    "state",
    "}",
    ")",
    "let",
    "i",
    "=",
    "0",
    "i<0",
    "function App()",
    "{",
    "const",
    "[count",
    "setCount] =",
    "useState(0);",
    "const [flag, setFlag] = useState(false);",
    "if(true)",
    "{let seconds = input}",
    "{arr.map(x=>return(<div>{x.name}</div>))}",
    "my mama told me to",
    "  handleChange(e),",
    "setState({ value: e.target.value });",
    "state",
    "= { value: 'Hello, **world**!' };",
    "return",
    "(",
    "<div>",
    "<button onClick={handleClick}>Next</button>",
    "<h1 style={{ color: flag ? blue : black }}>{count}</h1>",
    "</div>",
    ");",
    "}",
  ]

  // const RandomText = English.slice(getRandomInt(20))
  // const RandomCode = Code.slice(getRandomInt(20))

  let text = English.toString().replace(/,/g, " ")
  let codeStyle = Code.toString().replace(/,/g, " ")
  return (
    <>
      {isStarted && normal ? (
        <>
          <div className="typeWrapper">
            <Typewriter
              options={{
                strings: text,
                autoStart: true,
                pauseFor: 0,
                loop: false,
                changeDelay: 1,
              }}
            />
          </div>
        </>
      ) : (
        <></>
      )}
      {isStarted && !normal ? (
        <>
          <div className="typeWrapper">
            <Typewriter
              options={{
                strings: codeStyle,
                autoStart: true,
                pauseFor: 0,
                loop: false,
                changeDelay: 1,
              }}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default MyTypeTest