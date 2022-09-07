import "./App.css";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Array from "../src/Array";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const arrayElement = Array.map((item) => (
    <Experience
      duration={item.duration}
      img={item.img}
      year={item.year}
      exp={item.exp}
    />
  ));

  return (
    <>
      <Header />
      <Home />
      <Services />
      {arrayElement}
      <Feedback />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
