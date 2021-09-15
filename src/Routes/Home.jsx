import Degination from "../Components/Degination"
import { Discover } from "../Components/Discover"
import FooterBlue from "../Components/Footer/FooterBlue"
import { Navbar } from "../Components/Navbar/Navbar"
import { SearchDeals } from "../Components/SearchDeals/SearchDeals"
import { HomeGuestsDiv } from "../Components/HomeGuests/HomeGuestsDiv"
import { NextTrip } from "../Components/NextTripDiv/NextTrip"
import { MiddleSection } from "../Components/middleSection/MiddleSection"
import axios from "axios"




export const Home = () => {

    axios.get("https://manishsinghbhadouria.github.io/api/db.json").then((data) => {

        console.log(data.data[0].discover);
    })


    return <>
        <Navbar />
        <SearchDeals />
        <MiddleSection />
        <NextTrip />
        <HomeGuestsDiv />
        <Degination />
        <Discover />
        <FooterBlue />

    </>
}
