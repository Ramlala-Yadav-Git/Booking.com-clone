import Degination from "./Components/Degination";
import { Discover } from "./Components/Discover";
import FooterBlue from "./Components/Footer/FooterBlue";
import FooterWhite from "./Components/Footer/FooterWhite";
import { Navbar } from "./Components/Navbar/Navbar"
import { DataComponent } from "./Components/SearchData/DataComponent";
import { SearchDeals } from "./Components/SearchDeals/SearchDeals"
import { SearchRequest } from "./Components/SearchPage/SearchRequest";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchDeals />
      <SearchRequest />

      <DataComponent />
      {/* <Degination /> */}
      {/* <Discover /> */}
      {/* <FooterBlue /> */}
    </div>
  );
}

export default App;
