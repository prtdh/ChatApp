import "./App.css";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Chatpage from "./pages/Chatpage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route exact path="/chat" element={<Chatpage />} />
    </Routes>
  );
}

export default App;
