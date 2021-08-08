import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "": "",
  "😀": "Grinning",
  "😅": "Relief",
  "🙂": "Smiling",
  "😉": "Winking",
  "🤩": "Star Struck",
  "😏": "Smirking",
  "😒": "Unamused",
  "🙄": "Rolling Eyes",
  "😳": "Flushed",
  "😞": "Disappointed",
  "😠": "Angry",
  "😲": "Astonished"
};

var emojiArray = Object.keys(emojiDictionary);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function handleEmojiClick(emoji) {
    if (emoji in emojiDictionary) {
      setEmojiMeaning(emojiDictionary[emoji]);
    }
  }

  function emojiInputHandler(event) {
    var input = event.target.value;

    if (input in emojiDictionary) {
      setEmojiMeaning(emojiDictionary[input]);
    } else {
      setEmojiMeaning("Unknown Emoji");
    }
  }

  return (
    <div className="App">
      <h1 className="hero-head">Emoji Interpreter</h1>
      <div className="emoji-interpreter">
        <p>Enter emoji to know the meaning!</p>
        <input onChange={emojiInputHandler} className="emoji-input" />
        <div>
          <h2 className="emoji-meaning">{emojiMeaning}</h2>
        </div>
      </div>
      <div className="known-emojis">
        <h2>Emojis We Know</h2>
        <div className="known-emojis-list">
          {emojiArray.map((emoji) => {
            return (
              emoji !== "" && (
                <span
                  onClick={() => handleEmojiClick(emoji)}
                  className="emojis"
                  key={emoji}
                >
                  {emoji}
                </span>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}
