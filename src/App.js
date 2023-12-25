//import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
  th2: "the",
};

export default function App() {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const handleChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    const words = inputText.split(" "); // ['teh','wrok']
    const correctedWords = words.map((item) => {
      const correctedWord = customDictionary[item.toLowerCase()];
      return correctedWord || item;
    });
    correctedWords.join(" "); //  the work
    const firstCorrection = correctedWords.find(
      (word, idx) => word !== words[idx]
    );
    setSuggestions(firstCorrection || "");
  };
  return (
    <div>
      <h1>Spell Check and Auto-correction</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestions && (
        <p>
          Did you mean: <strong>{suggestions}</strong>?
        </p>
      )}
    </div>
  );
}