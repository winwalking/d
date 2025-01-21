import React from "react";

import { createRoot } from "react-dom/client";
import App from "./App";

// root 엘리먼트 가져오기
const container = document.getElementById("root");
const root = createRoot(container!);

// Redux store를 전체 App에 연결하기 위해 Provider로 감싼다
root.render(
  <>
    <App />
  </>
);
