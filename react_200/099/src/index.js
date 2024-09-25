import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// 앱이 오프라인에서 작동하고 더 빠르게 로드되도록 하려면
// unregister()를 아래에서 register()로 변경할 수 있습니다. 여기에는 몇 가지 함정이 있습니다.
// 서비스 워커에 대해 자세히 알아보세요: https://bit.ly/CRA-PWA
serviceWorker.unregister();
