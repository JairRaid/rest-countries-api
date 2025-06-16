import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
