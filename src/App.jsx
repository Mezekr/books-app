import { createRoot } from "react-dom/client";
import { MainView } from "./components/mainView/main-view";

import "./index.scss";

const App = () => {
  return (
    <div>
      <h1 className="main-head"> Mastering Javascript Books</h1>
      <MainView />
    </div>
  );
};

export default App;
