// import React, { useState, useEffect } from "react";

// interface ToastProps {
//   type: "success" | "warning" | "error" | "info";
//   title: string;
//   message: string;
//   duration?: number; // Duration in milliseconds, default is 5000
//   onClose?: () => void; // Callback when the toast is closed
// }

// const Toast: React.FC<ToastProps> = ({ type, title, message, duration = 5000, onClose }) => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     setVisible(true);
//     const timer = setTimeout(() => {
//       handleClose();
//     }, duration);

//     return () => clearTimeout(timer);
//   }, [duration]);

//   const handleClose = () => {
//     setVisible(false);
//     if (onClose) onClose();
//   };

//   if (!visible) return null;

//   return (
//     <div id="toast" className={type} style={{ animation: "open 0.3s cubic-bezier(.47,.02,.44,2) forwards" }}>
//       <div id="icon-wrapper">
//         <div id="icon"></div>
//       </div>
//       <div id="toast-message">
//         <h4>{title}</h4>
//         <p>{message}</p>
//       </div>
//       <button id="toast-close" onClick={handleClose}></button>
//       <div id="timer" className="timer-animation" style={{ animationDuration: `${duration}ms` }}></div>
//     </div>
//   );
// };

// export default Toast;
import React, { useState, useEffect } from "react";

interface ToastProps {
  type: "success" | "warning" | "error" | "info";
  title: string;
  message: string;
  duration?: number; // Duration in milliseconds, default is 5000
  onClose?: () => void; // Callback when the toast is closed
}

const Toast: React.FC<ToastProps> = ({
  type,
  title,
  message,
  duration = 5000,
  onClose,
}) => {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setClosing(true); // Trigger close animation
    setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 300); // Match the close animation duration
  };

  if (!visible) return null;

  return (
    <div
      id="toast"
      className={`${type} ${closing ? "closing" : ""}`} // Add 'closing' class when closing
      style={{
        animation: closing
          ? "close 0.3s cubic-bezier(.87,-1,.57,.97) forwards"
          : "open 0.3s cubic-bezier(.47,.02,.44,2) forwards",
      }}
    >
      <div id="icon-wrapper">
        <div id="icon"></div>
      </div>
      <div id="toast-message">
        <h4>{title}</h4>
        <p>{message}</p>
      </div>
      <button id="toast-close" onClick={handleClose}></button>
      <div
        id="timer"
        className="timer-animation"
        style={{ animationDuration: `${duration}ms` }}
      ></div>
    </div>
  );
};

export default Toast;
