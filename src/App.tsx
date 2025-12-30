import "./App.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Home } from "./pages/Home/home";
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
      </div>
      <Footer />
    </div>
  );
}

export default App;
