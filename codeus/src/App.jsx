import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Project from "./pages/project";
import Support from "./pages/support";
import Applications from "./pages/applications";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<Project />} />
          <Route path="/support" element={<Support />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;