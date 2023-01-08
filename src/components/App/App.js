import { useState } from "react";
import Header from "../Header/Header";
import NewGuide from "../NewGuide/NewGuide";
import Builds from "../Builds/Builds";
import Advertising from "../Advertising/Advertising";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
      />
      <NewGuide />
      <Builds />
      <Advertising />
    </>
  );
}

export default App;
