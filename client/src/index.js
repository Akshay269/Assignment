import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Router from "./utils/Router";
import {disableReactDevTools} from '@fvilers/disable-react-devtools';


disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);