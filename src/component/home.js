import'./home.css';


import manchester from '../image/manchester.png';
import leeds from '../image/leeds.png';
import reading from '../image/reading.png';
import newcastle from '../image/newcastle.png';
import birmingam from '../image/birmingam.png';




function FirstPage(){
    return(
       <div>

        <div className="Main">

            <div className="things">

                <div className="rentCar">
                    <div className="imglog"></div>
                    <div>
                    <span>Rent a car</span>
                    <p>Hundreds of cars and 24/7 customer <br/> service</p>
                    </div>
                </div>

                <div className="rentCar">
                    <div className="imglog"></div>
                    <div>
                    <span>Book an airport taxi</span>
                    <p>A driver will be waiting to get you to <br/> your stay</p>
                    </div>
                </div>

                <div className="rentCar">
                    <div className="imglog"></div>
                    <div>
                    <span>Find things to do</span>
                    <p>Instant confirmation, digital tickets <br/> and verified customer reviews</p>
                    </div>
                </div>
                
            </div>

            <div className="Cities">

                <div className="manchester">
                <img src={manchester} alt="avatar2"/>
                <span className="headmanchester">Manchester</span>
                <p className="childmanchester">1,096 properties</p>
                </div>
                <div className="manchester">
                <span className="headmanchester">Leeds</span>
                <p className="childmanchester">276 properties</p>
                <img src={leeds} alt="avatar2"/>
                </div>
                
            </div>

            <div className="citythree">
                <div className="manchester">
                <img src={reading} alt="avatar2"/>
                <span className="headmanchester">reading</span>
                <p className="childmanchester">276 properties</p>
                </div>
                <div className="manchester">
                <img src={newcastle} alt="avatar2"/>
                <span className="headmanchester">newcastle</span>
                <p className="childmanchester">381 properties</p>
                </div>
                <div className="manchester">
                <img src={birmingam} alt="avatar2"/>
                <span className="headmanchester">birmingam</span>
                <p className="childmanchester">1,010 properties</p>
                </div>
            </div>


        </div>

       </div>
    )

}



export default FirstPage
