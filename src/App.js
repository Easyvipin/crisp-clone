import Navigation from "./component/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./sass/main.scss";
import Banner from "./component/Banner";
import Investor from "./component/Investor";
import Feature from "./component/Feature";
import Services from "./component/Services";
import Access from "./component/Access";
import Stats from "./component/Stats";
import percentone from "./crispimage/percent1.png";
import percenttwo from "./crispimage/percent2.png";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Banner />
        <Investor />
        <Feature />
        <Services />
        <Access />
        <Stats
          percent={"70"}
          header={"RAISE MORE CAPITAL"}
          subheader={"IN LESS TIME"}
          desc={
            "Approach your raise with confidence by using intuitive analytics, tools and a progress dashboard to increase your conversion rate and capital raise.ed"
          }
          imgpercent={percentone}
          background={"bg-primary"}
          align={"right"}
        />
        <Stats
          percent={"88"}
          header={"UTILISE PROVEN TEMPLATE"}
          subheader={"PROCESSES AND EDUCATION"}
          desc={
            "Often as Founders, we have expectations of how the capital raising process show goes. These are often wildly inaccurate. Our Capital Raising Success program provides you with resources and tools you require, so that you can confidently approach your next raise, avoiding the simple mistake commonly made."
          }
          imgpercent={percenttwo}
          background={"bg-light"}
          align={"left"}
        />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
