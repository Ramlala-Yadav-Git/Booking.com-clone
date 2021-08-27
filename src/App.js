// import'../home.css';
import './App.css';
import FirstPage from './component/home';

import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

import Hotels from './image/Hotels.png';
import Appartment from './image/Appartment.png';
import Resort from './image/Resort.png';
import Villas from './image/Villas.png';
import Cabins from './image/Cabins.png';
import Cottages from './image/Cottages.png';
import Glamping from './image/Glamping.png';
import Serviced_appartment from './image/Serviced_appartment.png';
import Holidayhomes from './image/Holidayhomes.png';
import Guesthomes from './image/Guesthomes.png';
import hostels from './image/hostels.png';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
];

function App() {
  return (
    <div className="App">
     <FirstPage/>
     <div className="corosel">
       <h2 className="browsH2">Browse by property type</h2>
            <Carousel breakPoints={breakPoints} pagination={false} >
              <Item><img className="browsimg" src={Hotels} alt="Hotels"/></Item>
              <Item><img className="browsimg" src={Appartment} alt="Appartment"/></Item>
              <Item><img className="browsimg" src={Resort} alt="Resort"/></Item>
              <Item><img className="browsimg" src={Villas} alt="Villas"/></Item>
              <Item><img className="browsimg" src={Cabins} alt="Cabins"/></Item>
              <Item><img className="browsimg" src={Cottages} alt="Cottages"/></Item>
              <Item><img className="browsimg" src={Glamping} alt="Glamping"/></Item>
              <Item><img className="browsimg" src={Serviced_appartment} alt="Serviced_appartment"/></Item>
              <Item><img className="browsimg" src={Holidayhomes} alt="Holidayhomes"/></Item>
              <Item><img className="browsimg" src={Guesthomes} alt="Guesthomes"/></Item>
              <Item><img className="browsimg" src={hostels} alt="Hostels"/></Item>
              </Carousel>
      </div>
  
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
