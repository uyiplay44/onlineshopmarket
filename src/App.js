import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Route/Home";
import Men from "./Route/Men";
import Women from "./Route/Women";
import Collection from "./Route/Collection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/item" element={<Collection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
