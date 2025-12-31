import "./App.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Contact } from "./pages/Contato/Contact";
import { Home } from "./pages/Home/home";
import { Project } from "./pages/Projects/Projects";
import { SobreMim } from "./pages/SobreMim/sobreMim";
import { Tecno } from "./pages/Tecno/Tecno";

function App() {
  return (
    <div>
      <div id="header">
        <Header />
      </div>
      <div id="page-body">
        <Home />
        <SobreMim />
        <Tecno />
        <Project />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
