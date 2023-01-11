import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import NewGuide from "../NewGuide/NewGuide";
import HuntressHeist from "../HuntressHeist/HuntressHeist";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
          <Header
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
      />
      <Routes>
        <Route path="/" element={<NewGuide />} />
        <Route path="/hunteresHeist" element={<HuntressHeist
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />} />
      </Routes>
    </>
  );
}

export default App;
