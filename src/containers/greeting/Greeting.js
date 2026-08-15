import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

function TypingText({ text, color }) {
  const [displayed, setDisplayed] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  React.useEffect(() => {
    if (!isDeleting && index < text.length) {
      const t = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, 40);
      return () => clearTimeout(t);
    } else if (!isDeleting && index === text.length) {
      const t = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(t);
    } else if (isDeleting && index > 0) {
      const t = setTimeout(() => {
        setDisplayed(text.slice(0, index - 1));
        setIndex(index - 1);
      }, 20);
      return () => clearTimeout(t);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }
  }, [index, isDeleting, text]);
  return (
    <p className="greeting-text-p subTitle" style={{ color: color }}>
      {displayed}
      <span
        style={{
          borderLeft: "2px solid #2563EB",
          marginLeft: "2px",
          animation: "blink 0.7s infinite",
        }}
      ></span>
    </p>
  );
}

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            {greeting.nickname && (
              <div
                className="greeting-badge"
                style={{
                  color: "#2563EB",
                  background: "rgba(37,99,235,0.08)",
                  border: "1px solid rgba(37,99,235,0.2)",
                }}
              >
                <span
                  className="greeting-badge-dot"
                  style={{ background: "#2563EB" }}
                ></span>
                {greeting.nickname}
              </div>
            )}
            <h1 className="greeting-text" style={{ color: "#1a2b4a" }}>
              {greeting.title.split(" ")[0]}
              <span className="name-accent" style={{ color: "#2563EB" }}>
                {greeting.title.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="greeting-nickname" style={{ color: "#2563EB" }}>
              QA Engineer | Automation Tester | MERN Stack Developer
            </p>
            <TypingText text={greeting.subTitle} color="#4a5568" />
            <SocialMedia theme={theme} />
            <div className="portfolio-repo-btn-div">
              <Button
                text="⭐ Star Me On Github"
                newTab={true}
                href={greeting.portfolio_repository}
                theme={theme}
                className="portfolio-repo-btn"
              />
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
