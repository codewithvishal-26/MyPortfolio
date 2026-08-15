import React, { useEffect, useRef } from "react";
import "./CodeCard.css";
import heroIllustration from "../../assets/images/hero-illustration.png";

export default function FeelingProud(props) {
  const codeRef = useRef(null);

  useEffect(() => {
    const lines = [
      { text: "const ", cls: "cc-keyword" },
      { text: "dev", cls: "" },
      { text: " = {", cls: "" },
      { text: "\n  name:  ", cls: "" },
      { text: "'Vishal'", cls: "cc-string" },
      { text: ",", cls: "" },
      { text: "\n  stack: ", cls: "" },
      { text: "'AI+QA'", cls: "cc-func" },
      { text: ",", cls: "" },
      { text: "\n  focus: ", cls: "" },
      { text: "'Automation'", cls: "cc-string" },
      { text: ",", cls: "" },
      { text: "\n  status:", cls: "" },
      { text: "'building'", cls: "cc-string" },
      { text: "\n}", cls: "" },
    ];
    const el = codeRef.current;
    if (!el) return;
    el.innerHTML = "";
    let lineIndex = 0,
      charIndex = 0;
    let timeoutId;
    function type() {
      if (lineIndex >= lines.length) {
        timeoutId = setTimeout(() => {
          el.innerHTML = "";
          lineIndex = 0;
          charIndex = 0;
          type();
        }, 2500);
        return;
      }
      const current = lines[lineIndex];
      if (charIndex < current.text.length) {
        const char = current.text[charIndex];
        if (char === "\n") {
          el.appendChild(document.createElement("br"));
        } else {
          const span = document.createElement("span");
          if (current.cls) span.className = current.cls;
          span.textContent = char;
          el.appendChild(span);
        }
        charIndex++;
        timeoutId = setTimeout(type, 45);
      } else {
        lineIndex++;
        charIndex = 0;
        timeoutId = setTimeout(type, 25);
      }
    }
    type();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="hero-visual-stack">
      <div className="hero-illustration-box">
        <img
          src={heroIllustration}
          alt="Developer working with automation tools"
        />
      </div>
      <div className="code-card">
        <div className="code-card-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-amber"></span>
          <span className="dot dot-green"></span>
        </div>
        <pre className="code-card-body" ref={codeRef}></pre>
      </div>
    </div>
  );
}
