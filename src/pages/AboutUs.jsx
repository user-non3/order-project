import Main from "../components/page_two/Main";
import About from "../components/page_two/About";
import Funds from "../components/page_two/Funds";
import WorldMap from "../components/page_two/WorldMap";
import OurTeam from "../components/page_two/OurTeam";
import Footer from '../components/Footer'

export default function AboutUs() {
  return (
    <div>
      <Main />
      <About />
      <Funds />
      <WorldMap />
      <OurTeam/>
      <Footer/>
    </div>
  );
}
