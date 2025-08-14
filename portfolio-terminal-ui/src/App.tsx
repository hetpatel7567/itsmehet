import { useState } from "react";
import "./App.css";

const commands: Record<string, string> = {
  about: "Hi, I'm [Your Name], a software developer passionate about building cool stuff.",
  projects: "1. Terminal Portfolio UI\n2. React Apps\n3. Open Source Contributions",
  contact: "Email: your.email@example.com\nGitHub: github.com/yourusername",
  help: "Available commands: about, projects, contact, help, clear",
};

function App() {
  const [lines, setLines] = useState<string[]>([
    "Type 'help' to see available commands.",
  ]);
  const [input, setInput] = useState("");

  const handleCommand = (cmd: string) => {
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    const output = commands[cmd] || `Command not found: ${cmd}`;
    setLines([...lines, `PS C:\\Portfolio> ${cmd}`, output]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input.trim());
      setInput("");
    }
  };

  return (
    <div className="terminal">
      {lines.map((line, i) => (
        <pre key={i} className="line">{line}</pre>
      ))}
      <form onSubmit={handleSubmit} className="prompt-line">
        <span className="prompt">PS C:\Portfolio&gt; </span>
        <input
          autoFocus
          value={input}
          onChange={e => setInput(e.target.value)}
          className="input"
          spellCheck={false}
        />
      </form>
    </div>
  );
}

export default App;
