
import styled from 'styled-components'
import { TopSection } from './TopSection/TopSection'
import { TitleInfo } from './TittleInfo/TittleInfo'
import { AllIcons } from './AllIcons/AllIcons'
import { Availability } from './Avaliablity/Availability'

const Div = styled.div`

width:60%;
margin:0 ;

`
export const HotelDetails = ()=>{
    return (
        <Div>
            <TopSection/>
            <TitleInfo type = "hotel" name = "Trident Hyderabad" 
            address = "Hitech City, Near Cyber Towers, Madhapur, 500081, india - "

            img = "https://cf.bstatic.com/xdata/images/hotel/max300/22148298.jpg?k=ed34f77153a30f4be4057eb460afe6a1959896e93246ae3b2ffd7cbb4e9da4fd&o=&hp=1"
            />

            <AllIcons/>

            <Availability/>



        </Div>
    )
}