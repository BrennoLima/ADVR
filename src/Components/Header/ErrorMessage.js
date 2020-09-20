import React from "react";
import './header.css'

export default function ErrroMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return <p className="errText" ><i className="fas fa-exclamation-triangle"/> Required</p>;
      case "pattern":
        return <p className="errText"><i className="fas fa-exclamation-triangle"/> Invalid input</p>;
      default:
        return null;
    }
  }

  return null;
}
