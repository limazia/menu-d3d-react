import { createRoot } from "react-dom/client";

import { Menu } from "./pages/Menu";

import "./styles/styles.css";

const root = createRoot(document.getElementById("app"));
root.render(<Menu />);
