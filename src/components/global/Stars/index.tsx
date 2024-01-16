import React from "react";
import "./stars.css";

export default function Stars() {
  return (
    <div className="fixed inset-0 h-screen top-0 overflow-hidden z-[-1] !select-none bg-[#0c0519]">
      <div id="stars" className="!select-none"></div>
      <div id="stars2" className="!select-none"></div>
      <div id="stars3" className="!select-none"></div>
    </div>
  );
}
