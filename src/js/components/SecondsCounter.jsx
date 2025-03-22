import React from "react";
import clockImage from "../../img/timer.png";

const SecondsCounter = (props) => {

  //converts prop.seconds to seconds, minutes and hours
  const seconds = props.seconds % 60;
  const minutes = Math.floor(props.seconds / 60) % 60;
  const hours = Math.floor(props.seconds / 3600);

  //ads zero to shor two digits when less than 10 and converts to string
  const showSeconds = seconds < 10 ? ("0" + seconds) : (seconds.toString());
  const showMinutes = minutes < 10 ? ("0" + minutes) : (minutes.toString());
  const showHours = hours < 10 ? ("0" + hours) : (hours.toString());


  //assign class for each digit on seconds
  const secondDigits = showSeconds.split("").map((char, index) => (
    <span key={index} className="clockDigit">
      {char}
    </span>
  ));

  //assign class for each digit on minutes
  const minuteDigits = showMinutes.split("").map((char, index) => (
    <span key={index} className="clockDigit">
      {char}
    </span>
  ));

  //assign class for each digit on hours
  const hourDigits = showHours.split("").map((char, index) => (
    <span key={index} className="clockDigit">
      {char}
    </span>
  ));

  //returns the clock formatted
  return <div className="container d-flex justify-content-center"><img className="clockImage" src={clockImage}></img> {hourDigits}<span className="clockSeparator"> : </span>{minuteDigits}<span className="clockSeparator"> : </span>{secondDigits}</div>
};

export default SecondsCounter;
