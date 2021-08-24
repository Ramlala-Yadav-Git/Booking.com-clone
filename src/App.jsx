import { HomeGuestsDiv } from "./Components/HomeGuests/HomeGuestsDiv";
import { Navbar } from "./Components/Navbar/Navbar";
import { NextTrip } from "./Components/NextTripDiv/NextTrip";


function App() {
  return (
    <div className="App">
      <Navbar />

      <NextTrip/>
      <HomeGuestsDiv/>
    </div>
  );
}

export default App;
