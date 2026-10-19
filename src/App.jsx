import { Header } from "./components/Header/Header.jsx";
import { Banner } from "./components/Banner/Banner.jsx";
import { Subscribe } from "./components/Subscribe/Subscribe.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

export function App() {
  return (
    <div className="layout">
      <Header />
      <Banner />
      <Subscribe />
      <Footer />
    </div>
  )
}