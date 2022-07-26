import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
// import RecorderPage from "./Pages/RecorderPage";
import CleanRecorder from "./Pages/CleanRecorder";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/recorder" element={<RecorderPage />} /> */}
        <Route path="/recorder" element={<CleanRecorder />} />
      </Routes>
    </div>
  );
}

export default App;
