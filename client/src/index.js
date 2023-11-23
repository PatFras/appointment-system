import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ConfigProvider } from "antd";
import es_ES from "antd/lib/locale/es_ES"; // Importa el idioma español
import moment from "moment";
import "moment/locale/es"; // Importa el idioma español para Moment.js

// Configura la configuración regional (locale) de Ant Design y Moment.js
moment.locale("es");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ConfigProvider locale={es_ES}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConfigProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
