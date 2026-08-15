import React from "react";
import "./LoaderLogo.css";

function LogoLoader(props) {
  const theme = props.theme;
  return (
    <svg
      className="raw_logo"
      viewBox="0 0 500 360"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer hexagon */}
      <path
        className="myHexagon"
        d="M250 40 L340 90 L340 190 L250 240 L160 190 L160 90 Z"
        stroke={theme.body}
        strokeWidth="4"
        fill="none"
      />
      {/* Inner hexagon */}
      <path
        className="myHexagon2"
        d="M250 55 L328 100 L328 180 L250 225 L172 180 L172 100 Z"
        stroke={theme.body}
        strokeWidth="2.5"
        fill="none"
      />

      {/* V - letter */}
      <path
        className="letter"
        d="M200 100 L225 165 L250 100"
        stroke={theme.body}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* C - letter */}
      <path
        className="letter"
        d="M295 115 Q265 110 265 140 Q265 170 295 165"
        stroke={theme.body}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Animated name: Vishal Chandrabanshi */}
      <text
        className="name-text"
        x="250"
        y="285"
        textAnchor="middle"
        fill={theme.body}
        fontFamily="'Segoe UI', Arial, sans-serif"
        fontSize="22"
        fontWeight="300"
        letterSpacing="3"
      >
        VISHAL CHANDRABANSHI
      </text>

      {/* Underline accent */}
      <line
        className="underline"
        x1="100"
        y1="298"
        x2="400"
        y2="298"
        stroke={theme.body}
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Tagline */}
      <text
        className="tagline-text"
        x="250"
        y="325"
        textAnchor="middle"
        fill={theme.body}
        fontFamily="'Segoe UI', Arial, sans-serif"
        fontSize="12"
        fontWeight="200"
        letterSpacing="2"
        opacity="0.7"
      >
        Design . Develop . Deploy
      </text>

      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .myHexagon {
              stroke-dasharray: 900;
              stroke-dashoffset: 900;
              animation: dash 1.8s ease-in-out forwards 0.3s;
            }
            .myHexagon2 {
              stroke-dasharray: 800;
              stroke-dashoffset: 800;
              animation: dash 1.8s ease-in-out forwards 0.6s;
            }
            .letter {
              opacity: 0;
              animation: fadein 0.8s ease forwards 1.8s;
            }
            .name-text {
              opacity: 0;
              animation: slideup 1s ease forwards 2.2s;
            }
            .underline {
              stroke-dasharray: 300;
              stroke-dashoffset: 300;
              animation: dash 0.8s ease forwards 2.8s;
            }
            .tagline-text {
              opacity: 0;
              animation: fadein 1s ease forwards 3s;
            }
            @keyframes dash {
              to { stroke-dashoffset: 0; }
            }
            @keyframes fadein {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideup {
              from { opacity: 0; transform: translateY(12px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `,
          }}
        />
      </defs>
    </svg>
  );
}

export default LogoLoader;
