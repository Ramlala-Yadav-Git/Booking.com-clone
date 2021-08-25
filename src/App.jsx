import { Navbar } from "./Components/Navbar/Navbar"
import { SearchDeals } from "./Components/SearchDeals/SearchDeals"
import { SearchRequest } from "./Components/SearchPage/SearchRequest";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchDeals />
      <SearchRequest />
    </div>
  );
}

export default App;
