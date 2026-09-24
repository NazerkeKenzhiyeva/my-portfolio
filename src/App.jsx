import "./App.css";

import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <main className="page">
      <Header />
      <About />
      <Gallery />
      <Contact />
    </main>
  );
}

export default App;
