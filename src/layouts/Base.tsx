import Footer from "@components/base/Footer";
import Header from "@components/base/Header";
import React from "react";
import { Outlet } from "react-router-dom";

// 예시로 유저 역할을 Context에서 가져온다고 가정합니다.

const BaseLayout: React.FC = () => {
  // 유저의 역할을 가져옵니다.

  return (
    <main className="pt_84 lg:pt_84">
      <Outlet />
      {/* {children} */}
    </main>
  );
};

export default BaseLayout;
