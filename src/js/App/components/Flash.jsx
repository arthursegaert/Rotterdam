import React from "react";
import "../css/Flash.css";

const Flash = ({ flashState }) => {
  let type;
  let text;

  const checkFlashState = () => {
    const flashType = flashState.referer;
    console.log(flashType);
    switch (flashType) {
      case "login":
        type = "info";
        text = "Je bent ingelogd!";
        break;
      case "register":
        type = "info";
        text = "Je bent succesvol geregistreerd!";
        break;
      case "addCaption":
        type = "info";
        text = "Caption toegevoegd!";
        break;
      case "addEmptyCaption":
        type = "error";
        text = "Je kan geen lege caption toevoegen!";
        break;
      default:
        console.log("Error showing flash message.");
    }
  };

  checkFlashState();
  return <div className={`flash-${type}`}>{text}</div>;
};

export default Flash;
