// import React from "react";

// interface InputCompProps {
//   label: string; // Label text
//   type: "input" | "textarea"; // Type of element to render
//   placeholder?: string; // Placeholder for the input/textarea
//   width?: string; // Width of the input/textarea
//   height?: string; // Height of the input/textarea (only for textarea)
//   resize?: "none" | "both" | "horizontal" | "vertical"; // Resize behavior (only for textarea)
//   value?: string; // Value of the input/textarea
//   onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // Change event handler
//   name?: string; // Name attribute to identify the field
// }

// const InputComp: React.FC<InputCompProps> = ({
//   label,
//   type,
//   placeholder,
//   width = "100%", // Default width
//   height = "100px", // Default height for textarea
//   resize = "vertical", // Default resize behavior for textarea
//   value,
//   onChange,
//   name,
// }) => {
//   return (
//     <div style={{ marginBottom: "20px" }}>
//       {/* Label */}
//       <label
//         style={{
//           display: "block",
//           marginBottom: "16px",
//           fontSize: "18px",
//           fontWeight: 400,
//           color: "#111",
//         }}
//       >
//         {label}
//       </label>

//       {/* Input or Textarea */}
//       {type === "input" ? (
//         <input
//           type="text"
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           name={name} // Pass name prop
//           style={{
//             width: width,
//             color: "#767676",
//             padding: "10px",
//             fontSize: "18px",
//             border: "1px solid #D5DBE2",
//             borderRadius: "4px",
//             backgroundColor: "#fff",
//             boxSizing: "border-box",
//           }}
//         />
//       ) : (
//         <textarea
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           name={name} // Pass name prop
//           style={{
//             width: width,
//             height: height,
//             color: "#767676",
//             padding: "20px",
//             fontSize: "18px",
//             lineHeight: "27px",
//             border: "1px solid #D5DBE2",
//             borderRadius: "4px",
//             resize: resize,
//             backgroundColor: "#fff",
//             boxSizing: "border-box",
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default InputComp;
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface InputCompProps {
  label: string; // Label text
  type: "input" | "textarea" | "email"; // Added "email" type
  placeholder?: string | React.ReactNode; // 🔥 React 요소도 허용
  width?: string; // Width of the input/textarea
  height?: string; // Height of the input/textarea (only for textarea)
  resize?: "none" | "both" | "horizontal" | "vertical"; // Resize behavior (only for textarea)
  value?: string; // Value of the input/textarea
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void; // Change event handler
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void; // Blur event handler
  name?: string; // Name attribute to identify the field
}

const InputComp: React.FC<InputCompProps> = ({
  label,
  type,
  placeholder,
  width = "100%", // Default width
  height = "100px", // Default height for textarea
  resize = "vertical", // Default resize behavior for textarea
  value,
  onChange,
  onBlur, // Added as a prop
  name,
}) => {
  const { t } = useTranslation();
  const [error, setError] = useState(false); // State to manage error
  const [errorMessage, setErrorMessage] = useState("");

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!value) {
      setError(true);
      setErrorMessage(t("pages.dashboard.contactUsInputRequired") );
    } else if (type === "email") {
      const emailPattern = /^[a-zA-Z0-9]{3,}@[a-zA-Z0-9]{3,}\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(value)) {
        setError(true);
        setErrorMessage(t("pages.dashboard.contactUsInputEmailAddress") );
      } else {
        setError(false);
        setErrorMessage("");
      }
    } else {
      setError(false);
      setErrorMessage("");
    }

    if (onBlur) {
      onBlur(e);
    }
  };
  const [isDisplayXS, setIsDisplayXs] = useState(false);
  const [isDisplaySm, setIsDisplaySm] = useState(false);
  const [isDisplayMd, setIsDisplayMd] = useState(false);
  const [isDisplayNm, setIsDisplayNm] = useState(false);
  const [isDisplayLg, setIsDisplayLg] = useState(false);
  const [isDisplayXl, setIsDisplayXl] = useState(false);
  useEffect(() => {
    // const handleResize = () => {
    //   const width = window.innerWidth;
    //   setIsDisplayLg(width <= 1040);
    //   setIsDisplayXl(width <= 1280 && width > 1040);
    // };
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDisplayXs(width <= 390);
      setIsDisplaySm(width <= 675);
      setIsDisplayMd(width <= 1040);
      setIsDisplayNm(width <= 1180);
      setIsDisplayLg(width <= 1280);
      setIsDisplayXl(width <= 1460);
    };
    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="nm:w_100% mb_20">
      {/* Label */}
      <label
        style={{
          display: "block",
          marginBottom: isDisplayMd ? "8px" : "16px",
          fontSize: isDisplayMd ? "16px" : "18px",
          fontWeight: 400,
          color: "#111",
        }}
      >
        {label}
      </label>

       {/* Input or Textarea */}
       {type === "textarea" ? (
        <textarea
          placeholder={typeof placeholder === "string" ? placeholder : undefined}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          name={name}
          style={{
            width: width,
            height: height,
            color: "#767676",
            padding: "20px",
            fontSize: isDisplayMd ? "16px" : "18px",
            lineHeight: "27px",
            border: error ? "1px solid red" : "1px solid #D5DBE2",
            borderRadius: "4px",
            resize: resize,
            backgroundColor: "#fff",
            boxSizing: "border-box",
          }}
        />
      ) : (
        <input
          type={type === "email" ? "email" : "text"}
          placeholder={typeof placeholder === "string" ? placeholder : undefined}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          name={name}
          style={{
            width: width,
            color: "#767676",
            padding: "10px",
            fontSize: isDisplayMd ? "16px" : "18px",
            border: error ? "1px solid red" : "1px solid #D5DBE2",
            borderRadius: "4px",
            backgroundColor: "#fff",
            boxSizing: "border-box",
          }}
        />
      )}
      {/* Error Message */}
      {error && (
        <span
          style={{
            color: "red",
            fontSize: isDisplayMd ? "12px" : "14px",
            marginTop: "8px",
            display: "block",
          }}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default InputComp;
