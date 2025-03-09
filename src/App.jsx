import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import FirstPage from "./components/FirstPage/FirstPage";
import Footer from "./components/Footer/Footer";
import HamburgerNav from "./components/HamburgerNav/HamburgerNav";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import "./mediaqueries.css";
import "./style.css";

function App() {
  return (
    <>
      <div>
        <FirstPage />
        <HamburgerNav />
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
