import React from "react";

export default function ErrroMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return <p className="errorText"><i className="fas fa-exclamation-triangle"/> Required</p>;
      case "minLength":
        return <p className="errorText"><i className="fas fa-exclamation-triangle"/> Min 2 characters</p>;
      case "maxLength":
        return <p className="errorText"><i className="fas fa-exclamation-triangle"/> Max 15 characters</p>;
      case "pattern":
        return <p className="errorText"><i className="fas fa-exclamation-triangle"/> Invalid</p>;
      default:
        return null;
    }
  }

  return null;
}
