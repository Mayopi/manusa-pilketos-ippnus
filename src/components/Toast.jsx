import React, { useState, useEffect } from "react";

const Toast = ({ message, show }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);

      const timeout = setTimeout(() => {
        setVisible(false);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    } else {
      setVisible(false);
    }
  }, [show]);

  return (
    <div className={`toast toast-top toast-end ${visible ? "" : "hidden"}`}>
      <div className="alert alert-success">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
