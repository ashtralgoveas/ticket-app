import React from "react";

const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-status-green";
        return color;
      case "started":
        color = "bg-status-yellow";
        return color;
      case "not started":
        color = "bg-status-red";
        return color;
    }
    return color;
  };

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (word) => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {toTitleCase(status)}
    </span>
  );
};

export default StatusDisplay;
