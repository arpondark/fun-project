import { useState } from "react";
import Footer from "./component/Footer.jsx";
import Home from "./component/Home.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Home />
      </div>

      <Footer />
    </>
  );
}

export default App;
