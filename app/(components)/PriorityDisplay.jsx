import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          priority > 0 ? "text-priority-red" : "text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          priority > 1 ? "text-priority-red" : "text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          priority > 2 ? "text-priority-red" : "text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          priority > 3 ? "text-priority-red" : "text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          priority > 4 ? "text-priority-red" : "text-slate-400"
        }`}
      />
    </div>
  );
};

export default PriorityDisplay;
