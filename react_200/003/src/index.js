import React from "react";
// import ReactDOM from "react-dom"; //전버전
import ReactDOM from "react-dom/client"; // React 18에서는 '/client' 경로로 가져옴
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById("root")); //전버전
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// 앱이 오프라인에서 작동하고 더 빠르게 로드되도록 하려면
// unregister()를 아래에서 register()로 변경할 수 있습니다. 여기에는 몇 가지 함정이 있습니다.
// 서비스 워커에 대해 자세히 알아보세요: https://bit.ly/CRA-PWA
serviceWorker.unregister();
