import ReactDOM from "react-dom/client";
import "./index.css";
import { MyRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyRoutes />
  </BrowserRouter>
);
