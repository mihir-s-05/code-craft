import { useEffect, useRef, useState } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";

export default function TerminalPanel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const termRef = useRef<Terminal | null>(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (containerRef.current && !termRef.current) {
      const term = new Terminal({ convertEol: true, cursorBlink: true });
      term.open(containerRef.current);
      term.writeln("Interactive shell. Type commands below.");
      termRef.current = term;
    }
    return () => {
      termRef.current?.dispose();
    };
  }, []);

  const sendCommand = async () => {
    if (!input.trim() || !termRef.current) return;
    termRef.current.writeln("$ " + input);
    try {
      const res = await fetch("/api/terminal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command: input })
      });
      const data = await res.json();
      if (data.output) termRef.current.writeln(data.output);
      if (data.error) termRef.current.writeln(data.error);
    } catch (e) {
      const err = e as Error;
      termRef.current.writeln("Error: " + err.message);
    }
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendCommand();
    }
  };

  return (
    <div className="h-[600px] flex flex-col">
      <div ref={containerRef} className="flex-1 overflow-hidden bg-[#1e1e2e] rounded-t-lg" />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-[#1e1e2e] text-gray-300 text-sm p-2 rounded-b-lg outline-none border-t border-gray-700"
        placeholder="Type a command and press Enter"
      />
    </div>
  );
}
